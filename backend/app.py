from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Testimonial, Contact
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Supabase configuration
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_ANON_KEY')

# Database configuration (fallback to SQLite if Supabase not available)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///funeral_services.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    try:
        # Try to fetch from Supabase
        headers = {
            'apikey': supabase_key,
            'Authorization': f'Bearer {supabase_key}'
        }
        response = requests.get(f'{supabase_url}/rest/v1/testimonials?order=date.desc', headers=headers)
        if response.status_code == 200:
            testimonials = response.json()
            return jsonify([{
                'id': t['id'],
                'name': t['name'],
                'message': t['message'],
                'date': t['date']
            } for t in testimonials])
        else:
            raise Exception('Supabase request failed')
    except Exception as e:
        # Fallback to local SQLite
        testimonials = Testimonial.query.order_by(Testimonial.date.desc()).all()
        return jsonify([{
            'id': t.id,
            'name': t.name,
            'message': t.message,
            'date': t.date.isoformat()
        } for t in testimonials])

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({'error': 'All fields are required'}), 400

    try:
        # Try to insert into Supabase
        headers = {
            'apikey': supabase_key,
            'Authorization': f'Bearer {supabase_key}',
            'Content-Type': 'application/json'
        }
        payload = {
            'name': name,
            'email': email,
            'message': message
        }
        response = requests.post(f'{supabase_url}/rest/v1/contacts', json=payload, headers=headers)
        if response.status_code == 201:
            return jsonify({'id': response.json()[0]['id'], 'message': 'Contact submitted successfully'})
        else:
            raise Exception('Supabase request failed')
    except Exception as e:
        # Fallback to local SQLite
        contact = Contact(name=name, email=email, message=message)
        db.session.add(contact)
        db.session.commit()
        return jsonify({'id': contact.id, 'message': 'Contact submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
