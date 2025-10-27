# Zenith Pact - IT Solutions Website

A complete, professional multi-page website for Zenith Pact, an IT Solutions provider. Built with React, Tailwind CSS, Framer Motion, and React Three Fiber.

## 🚀 Features

- **Multi-page Architecture** with React Router DOM
- **Dark Futuristic Design** with electric blue accents (#3b82f6)
- **3D Earth Globe Animation** using React Three Fiber on the home page
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** design for all screen sizes
- **Modern UI Components** with Tailwind CSS

## 📁 Project Structure

```
ZenithPact/
├── public/
│   └── assets/
│       ├── logo.png (place your logo here)
│       └── README.md
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with active page highlighting
│   │   ├── Footer.jsx          # Footer with social links and quick navigation
│   │   ├── EarthGlobe.jsx      # 3D rotating Earth globe
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── pages/
│   │   ├── Home.jsx            # Hero section with 3D globe, overview, and stats
│   │   ├── Services.jsx        # Service cards with hover animations
│   │   ├── About.jsx           # Mission, team, values, and animated counters
│   │   └── Contact.jsx         # Contact form and company details
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles and Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Pages

### Home Page (`/`)
- Hero section with animated heading and CTA button
- Realistic 3D rotating Earth globe (React Three Fiber)
- Company overview with IT-related images
- Statistics counters (Years, Clients, Projects, Team)
- Scroll-triggered fade-in and slide-up animations

### Services Page (`/services`)
- 6 service cards with icons:
  - Web Development
  - Mobile App Development
  - Cloud Solutions
  - AI & Data Integration
  - Digital Transformation
  - Cybersecurity
- Hover scaling animations
- "Request a Quote" CTA section

### About Page (`/about`)
- Company mission statement
- Animated stat counters
- Team member profiles with hover effects
- Core values with icons
- Office image section

### Contact Page (`/contact`)
- Contact form (Name, Email, Message)
- Form submission with console logging
- Contact details (Email, Phone, Address)
- Social media icons
- Working hours information
- Office location image

## 🛠️ Technologies Used

- **React 18.2** - Frontend framework
- **React Router DOM 6.20** - Routing
- **Tailwind CSS 3.3** - Utility-first CSS
- **Framer Motion 10.16** - Animation library
- **React Three Fiber 8.15** - 3D graphics with Three.js
- **@react-three/drei 9.92** - React Three Fiber helpers
- **React Icons 4.12** - Icon library
- **Vite 5.0** - Build tool

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build
```

### Preview Production Build

```bash
# Preview production build
npm run preview
```

## 🎨 Customization

### Colors
Update the primary color in `tailwind.config.js`:
```javascript
colors: {
  primary: '#3b82f6', // Change this to your brand color
}
```

### Logo
Place your logo file at `public/assets/logo.png` (recommended: 200x200px, PNG with transparent background)

### Images
Replace placeholder Unsplash images with your own in the respective page files.

### Contact Information
Update contact details in `src/pages/Contact.jsx`:
- Email: contact@zenithpact.com
- Phone: +91 98765 43210
- Address: Zenith Pact Pvt. Ltd., Bengaluru, India

## ✨ Key Features

### Animations
- Page transitions between routes
- Scroll-triggered animations (fade-in, slide-up)
- Hover effects on cards, buttons, and images
- Animated counters on About page
- Navbar fade-down entrance
- Scroll-to-top button

### 3D Globe
- Realistic Earth-like sphere with distortion effect
- Auto-rotation and manual orbit controls
- Environment lighting for realism
- Optimized for performance

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile, tablet, desktop
- Hamburger menu for mobile navigation
- Flexible grid layouts

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Environment Variables

Currently, no environment variables are required. For production deployment, you may want to add:
- API endpoints for contact form backend
- Analytics tracking IDs
- Third-party service keys

## 📄 License

© 2025 Zenith Pact. All rights reserved.

## 🤝 Support

For support, email contact@zenithpact.com or visit our Contact page.

---

Built with ❤️ by Zenith Pact Team
