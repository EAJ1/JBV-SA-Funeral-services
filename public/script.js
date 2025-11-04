// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#d4af37' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#d4af37', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-js-container').appendChild(renderer.domElement);

// Create floating memorial elements
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xd4af37, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Handle window resize for Three.js
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.hero-subtitle', { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from('.cta-button', { opacity: 0, y: 50, duration: 1, delay: 1.5 });

// Section animations
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section.querySelector('h2'), {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
  });
});

// Service cards animation
gsap.from('.service-card', {
  scrollTrigger: {
    trigger: '#services',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2
});

// Cover cards animation
gsap.from('.cover-card', {
  scrollTrigger: {
    trigger: '#funeral-cover',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2
});

// Casket items animation
gsap.from('.casket-item', {
  scrollTrigger: {
    trigger: '#caskets',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2
});

// Plan cards animation
gsap.from('.plan-card', {
  scrollTrigger: {
    trigger: '#plans',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2
});

// Insurance content animation
gsap.from('.insurance-content', {
  scrollTrigger: {
    trigger: '#insurance',
    start: 'top 80%'
  },
  opacity: 0,
  y: 50,
  duration: 0.8
});

// FAQ items animation
gsap.from('.faq-item', {
  scrollTrigger: {
    trigger: '#faq',
    start: 'top 80%'
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.1
});

// Parallax effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  document.querySelector('#hero').style.transform = `translateY(${rate}px)`;
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Load testimonials from database
async function loadTestimonials() {
  try {
    const response = await fetch('/api/testimonials');
    const testimonials = await response.json();
    const container = document.getElementById('testimonials-container');

    if (testimonials.length === 0) {
      // Add some sample testimonials if none in DB
      const sampleTestimonials = [
        { name: 'John Doe', message: 'JBV South Africa provided exceptional service during our time of need. Their compassion and professionalism were truly remarkable.' },
        { name: 'Jane Smith', message: 'We were impressed by the dignity and care shown by the entire team. Thank you for honoring our loved one so beautifully.' },
        { name: 'Michael Johnson', message: 'The memorial service arranged by JBV was perfect. Every detail was handled with grace and respect.' },
        { name: 'Sarah Williams', message: 'From start to finish, JBV South Africa handled everything with such sensitivity. We couldn\'t have asked for better support during this difficult time.' },
        { name: 'David Brown', message: 'The team at JBV went above and beyond to make sure our family\'s wishes were honored. Their dedication is truly appreciated.' }
      ];

      sampleTestimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
          <p>"${testimonial.message}"</p>
          <div class="author">- ${testimonial.name}</div>
        `;
        container.appendChild(card);
      });
    } else {
      testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
          <p>"${testimonial.message}"</p>
          <div class="author">- ${testimonial.name}</div>
        `;
        container.appendChild(card);
      });
    }

    // Animate testimonials
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 80%'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2
    });
  } catch (error) {
    console.error('Error loading testimonials:', error);
  }
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      alert('Thank you for your message. We will get back to you soon.');
      document.getElementById('contact-form').reset();
    } else {
      alert('There was an error sending your message. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    alert('There was an error sending your message. Please try again.');
  }
});

// Handle inquiry form submission
document.getElementById('inquiry-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('inquiry-name').value;
  const email = document.getElementById('inquiry-email').value;
  const phone = document.getElementById('inquiry-phone').value;
  const service = document.getElementById('inquiry-service').value;
  const message = document.getElementById('inquiry-message').value;

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, service, message })
    });

    if (response.ok) {
      alert('Thank you for your inquiry. We will get back to you soon.');
      document.getElementById('inquiry-form').reset();
    } else {
      alert('There was an error sending your inquiry. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting inquiry form:', error);
    alert('There was an error sending your inquiry. Please try again.');
  }
});

// Handle insurance quote form submission
document.getElementById('insurance-quote-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = e.target.querySelector('input[placeholder="Full Name"]').value;
  const email = e.target.querySelector('input[placeholder="Email Address"]').value;
  const phone = e.target.querySelector('input[placeholder="Phone Number"]').value;
  const coverageType = e.target.querySelector('select').value;

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, coverageType, message: 'Insurance quote request' })
    });

    if (response.ok) {
      alert('Thank you for your quote request. We will get back to you soon.');
      e.target.reset();
    } else {
      alert('There was an error sending your request. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting insurance quote form:', error);
    alert('There was an error sending your request. Please try again.');
  }
});

// Handle inquiry buttons for all sections
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('inquire-btn')) {
    const itemName = e.target.getAttribute('data-item');
    let selectedPlan = '';

    // Check if there's a plan select dropdown before the button
    const planSelect = e.target.previousElementSibling;
    if (planSelect && planSelect.classList.contains('plan-select')) {
      selectedPlan = planSelect.value;
    }

    // Scroll to inquiry form
    const inquirySection = document.getElementById('inquiry');
    inquirySection.scrollIntoView({ behavior: 'smooth' });

    // Pre-fill the inquiry form
    const serviceSelect = document.getElementById('inquiry-service');
    const messageTextarea = document.getElementById('inquiry-message');

    serviceSelect.value = 'other';
    if (selectedPlan) {
      messageTextarea.value = `I am interested in the ${itemName} with ${selectedPlan}. Please provide more information.`;
    } else {
      messageTextarea.value = `I am interested in the ${itemName}. Please provide more information.`;
    }
  }
});

// Load testimonials on page load
document.addEventListener('DOMContentLoaded', loadTestimonials);
