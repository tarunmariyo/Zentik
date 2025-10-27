# 🚀 Quick Start Guide - Zenith Pact Website

## What You Just Got

A complete, production-ready multi-page website for **Zenith Pact IT Solutions** with:

✅ **4 Pages**: Home, Services, About, Contact  
✅ **3D Earth Globe** animation on Home page  
✅ **Dark futuristic design** with electric blue accents  
✅ **Smooth animations** throughout  
✅ **Fully responsive** for all devices  
✅ **Modern tech stack**: React, Tailwind CSS, Framer Motion, React Three Fiber  

## 🎯 Your Website is Running!

**Visit:** http://localhost:5173

The development server is already running in your terminal.

## 📄 Pages Overview

| Route | Page | Features |
|-------|------|----------|
| `/` | **Home** | Hero section with 3D globe, company overview, stats |
| `/services` | **Services** | 6 service cards with animations, CTA section |
| `/about` | **About Us** | Mission, team profiles, animated counters, values |
| `/contact` | **Contact** | Contact form, company details, social links |

## 🎨 Customize Your Site

### 1. Add Your Logo
```bash
# Place your logo here (200x200px recommended):
public/assets/logo.png
```

### 2. Update Contact Info
Edit `src/pages/Contact.jsx`:
- Email: contact@zenithpact.com
- Phone: +91 98765 43210
- Address: Bengaluru, India

### 3. Change Brand Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#3b82f6', // Change to your brand color
}
```

### 4. Replace Images
Update image URLs in:
- `src/pages/Home.jsx` (3 overview images)
- `src/pages/About.jsx` (team member photos)

## 🛠️ Available Commands

```bash
# Development (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Test Responsive Design

The site is fully responsive. Test it by:
1. Opening http://localhost:5173 in your browser
2. Using browser DevTools (F12)
3. Click the device toolbar icon (or Ctrl/Cmd + Shift + M)
4. Try different device sizes

## ✨ Key Features You Can Explore

### Navigation
- Click through all pages using the navbar
- Notice the active page highlighting
- Try the mobile menu (resize browser to < 768px)

### Animations
- Scroll down on any page to see fade-in animations
- Hover over service cards on Services page
- Watch the 3D Earth globe rotate on Home page
- Notice the scroll-to-top button appear after scrolling

### Contact Form
- Fill out the form on Contact page
- Submit it (data logged to browser console - F12 to view)
- See the success message

## 🎭 Interactive Elements

| Element | Location | Action |
|---------|----------|--------|
| 3D Globe | Home page | Drag to rotate, auto-rotates |
| Service Cards | Services page | Hover for scale effect |
| Team Photos | About page | Hover for overlay |
| Scroll Button | All pages (after scroll) | Click to return to top |

## 📚 Learn More

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Project Structure**: Organized in `src/` folder

## 🚀 Next Steps

1. **Customize content** - Replace placeholder text with your actual content
2. **Add your logo** - Place it in `public/assets/`
3. **Update images** - Replace Unsplash URLs with your images
4. **Test everything** - Click all links, test forms, check mobile view
5. **Deploy** - Follow `DEPLOYMENT.md` to go live!

## 🆘 Need Help?

**Common Issues:**

**Q: The site looks broken**  
A: Make sure `npm run dev` is running and visit http://localhost:5173

**Q: 3D Globe not showing**  
A: Wait a moment for Three.js to load, or check browser console for errors

**Q: Changes not reflecting**  
A: Vite auto-reloads, but you can refresh browser or restart `npm run dev`

**Q: How to stop the server?**  
A: Press `Ctrl + C` in the terminal

## 🎉 You're All Set!

Your professional IT solutions website is ready. Start customizing and make it yours!

**Happy coding! 🚀**

---

Built with React + Vite + Tailwind CSS + Framer Motion + React Three Fiber
