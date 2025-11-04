# JBV South Africa - Funeral Services Website

![JBV South Africa Logo](https://via.placeholder.com/150x50?text=JBV+South+Africa) <!-- Replace with actual logo URL -->

An elegant and comprehensive funeral services website for JBV South Africa, featuring stunning animations, database integration, and a user-friendly interface designed to provide compassionate support during difficult times.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Database Integration**: SQLite database for storing testimonials and contact form submissions
- **RESTful API**: Backend API endpoints for testimonials and contact management
- **Form Handling**: Secure contact and inquiry forms with server-side validation

### Visual Effects & Animations
- **GSAP Animations**: Smooth scroll-triggered animations for enhanced user experience
- **Particles.js Background**: Dynamic particle effects for visual appeal
- **Three.js 3D Elements**: Subtle 3D memorial elements in the hero section
- **Parallax Scrolling**: Engaging parallax effects throughout the site

### Services & Offerings
- **Comprehensive Services**: Traditional burials, cremations, memorial planning, and grief support
- **Funeral Cover Options**: Multiple coverage plans (Basic, Premium, Family) with detailed pricing
- **Casket Offerings**: Wide range of JBV South Africa caskets including wooden, stainless steel, eco-friendly, and specialty options
- **Family Plans**: Pre-paid funeral plans for individuals, couples, and families
- **Insurance Guidance**: Information and quote forms for funeral insurance options

### User Experience
- **Navigation**: Smooth-scrolling navigation with mobile hamburger menu
- **Interactive Elements**: Hover effects, inquiry buttons, and dynamic content loading
- **Accessibility**: WCAG-compliant design with proper semantic HTML and ARIA labels
- **Performance**: Optimized loading with CDN-hosted libraries and efficient code

## 🛠 Tech Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6+)**: Interactive functionality and API integration
- **GSAP**: Animation library for smooth transitions
- **Particles.js**: Background particle effects
- **Three.js**: 3D graphics for memorial elements

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **SQLite3**: Lightweight database for data persistence
- **CORS**: Cross-origin resource sharing
- **Body-parser**: Request body parsing middleware

### Development Tools
- **Nodemon**: Development server with auto-restart
- **Google Fonts**: Typography (Playfair Display, Roboto)

## 📋 Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/funeral-services-website.git
   cd funeral-services-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to view the website.

## 📖 Usage

### For Users
- Browse services, funeral cover options, and casket offerings
- Submit inquiries through the contact form
- Request insurance quotes
- View testimonials and company information

### For Developers
- **Development Mode**: `npm run dev` - Starts server with auto-reload
- **Production Mode**: `npm start` - Starts production server
- **Database**: SQLite database file `funeral_services.db` is created automatically

## 📡 API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### GET /api/testimonials
Retrieves all testimonials from the database.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "message": "Excellent service...",
    "date": "2023-12-01T10:00:00.000Z"
  }
]
```

#### POST /api/contact
Submits a contact form message.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Inquiry about services..."
}
```

**Response:**
```json
{
  "id": 123,
  "message": "Contact submitted successfully"
}
```

## 📁 Project Structure

```
funeral-services-website/
├── package.json
├── server.js
├── funeral_services.db
├── README.md
├── TODO.md
└── public/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── caskets_480x480.webp
    ├── Domes.jpg
    └── Pine-Flat-Plain.jpg.webp
```

## 🎨 Customization

### Styling
- Colors: Dark theme with gold accents (#D4AF37)
- Fonts: Playfair Display for headings, Roboto for body text
- Responsive breakpoints: 768px (tablet), 480px (mobile)

### Content
- Update service descriptions in `public/index.html`
- Modify pricing in respective sections
- Add new testimonials via database or API

### Animations
- Adjust GSAP timelines in `public/script.js`
- Modify particle effects configuration
- Customize Three.js 3D elements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- JBV South Africa for the inspiration and content
- Unsplash for stock images
- Open source libraries: GSAP, Particles.js, Three.js

## 📞 Support

For support or inquiries:
- Email: info@jbvsouthafrica.co.za
- Phone: +27 XX XXX XXXX
- Website: [www.jbvsouthafrica.co.za](https://www.jbvsouthafrica.co.za)

## 🔄 Future Enhancements

- [ ] User authentication and admin panel
- [ ] Multi-language support
- [ ] Online booking system
- [ ] Payment integration for plans
- [ ] Mobile app development
- [ ] Advanced analytics and reporting

---

**JBV South Africa - Providing Dignified Funeral Services with Compassion and Care**
