# Zentik IT Solution

A modern, professional multi-page website for Zentik IT Solution, showcasing innovative IT services and solutions. Built with React, Tailwind CSS, Framer Motion, and React Three Fiber.

## 🚀 Features

- **Multi-page Architecture** with React Router DOM
- **Dark/Light Theme Toggle** with persistent theme preference
- **3D Interactive Elements** using React Three Fiber
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** design for all screen sizes
- **Modern UI Components** with Tailwind CSS
- **Dynamic Service Pages** with detailed information
- **Careers Section** for job opportunities
- **Animated Backgrounds** for enhanced visual experience

## 📁 Project Structure

```
Zentik IT Solution/
├── public/
│   └── assets/
│       ├── companylogo.png
│       ├── ceo.png
│       ├── ananyapatel.jpeg
│       ├── priyasharma.jpeg
│       └── rajeshkumar.jpeg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky navigation with theme toggle
│   │   ├── Footer.jsx              # Footer with social links
│   │   ├── EarthGlobe.jsx          # 3D rotating Earth globe
│   │   ├── ScrollToTop.jsx         # Scroll to top button
│   │   └── AnimatedBackground.jsx  # Dynamic animated background
│   ├── pages/
│   │   ├── Home.jsx                # Hero section with 3D elements
│   │   ├── Services.jsx            # Service cards with animations
│   │   ├── ServiceDetail.jsx       # Detailed service information
│   │   ├── About.jsx               # Company mission and team
│   │   ├── Contact.jsx             # Contact form and details
│   │   └── Careers.jsx             # Job opportunities
│   ├── context/
│   │   └── ThemeContext.jsx        # Theme management
│   ├── App.jsx                     # Main app with routing
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Pages

### Home Page (`/`)
- Hero section with animated heading and CTA button
- Interactive 3D elements
- Company overview
- Statistics counters (Years, Clients, Projects, Team)
- Scroll-triggered animations

### Services Page (`/services`)
- Comprehensive service offerings:
  - Web Development
  - Mobile App Development
  - Cloud Solutions
  - AI & Data Integration
  - Digital Transformation
  - Cybersecurity
- Detailed service pages with in-depth information
- "Request a Quote" CTA section

### About Page (`/about`)
- Company mission and vision
- Animated stat counters
- Team member profiles with images
- Core values showcase
- Company culture highlights

### Contact Page (`/contact`)
- Interactive contact form
- Contact details (Email, Phone, Address)
- Social media integration
- Working hours information

### Careers Page (`/careers`)
- Current job openings
- Company culture overview
- Application process

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

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

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

### Theme
The website features a dark/light theme toggle. Users can switch between themes, and their preference is saved in localStorage.

### Colors
Update the color scheme in `tailwind.config.js` and the theme configuration in `src/context/ThemeContext.jsx`.

### Logo
Replace the logo at `public/assets/companylogo.png` with your own company logo.

### Images
Update team member photos and other images in the `public/assets/` directory.

### Contact Information
Update contact details in `src/pages/Contact.jsx`:
- Email
- Phone
- Address
- Social media links

## ✨ Key Features

### Animations
- Page transitions between routes
- Scroll-triggered animations (fade-in, slide-up)
- Hover effects on cards, buttons, and images
- Animated counters
- Navbar animations
- Animated backgrounds
- Scroll-to-top functionality

### 3D Elements
- Interactive 3D globe on the home page
- Optimized for performance
- Responsive rendering

### Theme System
- Dark and light theme support
- Persistent theme preference
- Smooth theme transitions
- System-wide theme consistency

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile, tablet, desktop
- Adaptive navigation
- Flexible grid layouts

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables
For production deployment, you may want to add:
- API endpoints for contact form backend
- Analytics tracking IDs
- Third-party service keys

Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

## 📄 License

© 2025 Zentik IT Solution. All rights reserved.

## 🤝 Support

For support, visit our Contact page or reach out through our website.

---

Built with ❤️ by the Zentik IT Solution Team
