# 🌓 Dark/Light Mode Theme Guide

## Overview

The Zenith Pact website now features a complete dark/light mode theme system with smooth animated transitions. Users can toggle between modes using the sun/moon icon in the navigation bar.

## 🎨 Theme Implementation

### Theme Context
The theme is managed using React Context API (`src/context/ThemeContext.jsx`):
- **State Management**: Stores current theme ('dark' or 'light')
- **LocalStorage Persistence**: Theme preference is saved and restored
- **Toggle Function**: Smoothly switches between themes

### CSS Variables
All colors use CSS custom properties defined in `src/index.css`:

**Dark Mode (Default):**
```css
--bg-primary: #0a0a0a       /* Main background */
--bg-secondary: #1a1a1a     /* Secondary backgrounds */
--bg-tertiary: #2a2a2a      /* Tertiary backgrounds */
--text-primary: #f5f5f5     /* Main text */
--text-secondary: #d1d1d1   /* Secondary text */
--text-tertiary: #a0a0a0    /* Tertiary text */
--border-color: #374151     /* Border color */
--accent-color: #0098AC     /* Primary accent */
--accent-hover: #007A8C     /* Accent hover */
```

**Light Mode:**
```css
--bg-primary: #ffffff       /* Main background */
--bg-secondary: #f5f5f5     /* Secondary backgrounds */
--bg-tertiary: #e5e5e5      /* Tertiary backgrounds */
--text-primary: #0a0a0a     /* Main text */
--text-secondary: #2a2a2a   /* Secondary text */
--text-tertiary: #4a4a4a    /* Tertiary text */
--border-color: #d1d5db     /* Border color */
--accent-color: #0098AC     /* Primary accent (same) */
--accent-hover: #007A8C     /* Accent hover (same) */
```

### Smooth Transitions
All elements transition smoothly (0.3s) between themes:
```css
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

## 🎯 Using Theme in Components

### Method 1: CSS Variables (Recommended)
Use CSS variables in className strings:
```jsx
<div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
  Content
</div>
```

### Method 2: useTheme Hook
Access theme state directly:
```jsx
import { useTheme } from '../context/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  )
}
```

## 🔧 Toggle Button

Located in the Navbar, the toggle button shows:
- **🌞 Sun icon** when in dark mode (click to switch to light)
- **🌙 Moon icon** when in light mode (click to switch to dark)

Desktop: Top-right corner of navbar  
Mobile: Next to hamburger menu

## 📁 Updated Files

### Core Theme Files
- ✅ `src/context/ThemeContext.jsx` - Theme context provider
- ✅ `src/index.css` - CSS variables and transitions
- ✅ `src/main.jsx` - Wrapped app with ThemeProvider

### Updated Components
- ✅ `src/components/Navbar.jsx` - Theme toggle button + logo update
- ✅ `src/components/Footer.jsx` - Theme-aware styling + logo update
- ✅ `src/components/ScrollToTop.jsx` - Theme-aware (uses primary color)
- ✅ `src/components/EarthGlobe.jsx` - Theme-aware (uses primary color)

### Updated Pages
- ✅ `src/pages/Home.jsx` - All text and backgrounds use CSS variables
- ✅ `src/pages/Services.jsx` - All text and backgrounds use CSS variables
- ✅ `src/pages/About.jsx` - All text and backgrounds use CSS variables
- ✅ `src/pages/Contact.jsx` - All text and backgrounds use CSS variables

### Other
- ✅ `src/App.jsx` - Root container uses theme variables

## 🎨 Color Mapping

| Element Type | CSS Variable | Dark Mode | Light Mode |
|-------------|--------------|-----------|------------|
| Page background | `--bg-primary` | #0a0a0a | #ffffff |
| Card background | `--bg-secondary` | #1a1a1a | #f5f5f5 |
| Nested elements | `--bg-tertiary` | #2a2a2a | #e5e5e5 |
| Headings | `--text-primary` | #f5f5f5 | #0a0a0a |
| Body text | `--text-secondary` | #d1d1d1 | #2a2a2a |
| Muted text | `--text-tertiary` | #a0a0a0 | #4a4a4a |
| Borders | `--border-color` | #374151 | #d1d5db |
| Accent (buttons, links) | `--accent-color` | #0098AC | #0098AC |

## 🖼️ Logo Update

The logo has been updated from PNG to SVG:
- **Old**: `/assets/logo.png` (200x200px)
- **New**: `/assets/logo.svg` (responsive, scalable)

The logo appears in:
- Navbar (top-left, full size with text fallback removed)
- Footer (smaller version)

## ✨ Features

### Smooth Animations
- 0.3s transition on all color properties
- Scale animations on hover (buttons, cards)
- Layout animations with Framer Motion

### Persistence
- Theme choice saved in localStorage
- Persists across page reloads
- Persists across browser sessions

### Accessibility
- Clear visual distinction between modes
- ARIA labels on theme toggle button
- Maintains color contrast ratios

### Responsive
- Theme toggle visible on all screen sizes
- Works seamlessly on mobile and desktop
- Touch-friendly toggle button

## 🚀 Testing the Theme

1. **Visit the site**: http://localhost:5173
2. **Find toggle**: Sun/moon icon in navbar (top-right)
3. **Click to switch**: Watch smooth color transitions
4. **Test persistence**: Reload page - theme stays
5. **Test all pages**: Navigate through all pages
6. **Test responsive**: Resize browser window

## 🎯 Best Practices

### When Adding New Components

1. Use CSS variables for colors:
   ```jsx
   // ✅ Good
   className="text-[var(--text-primary)] bg-[var(--bg-secondary)]"
   
   // ❌ Avoid
   className="text-white bg-gray-900"
   ```

2. For borders and shadows:
   ```jsx
   // ✅ Good
   className="border border-[var(--border-color)]"
   
   // ❌ Avoid
   className="border border-gray-800"
   ```

3. Accent colors (use primary):
   ```jsx
   // ✅ Good
   className="text-primary hover:text-[#007A8C]"
   
   // ✅ Also good
   className="bg-primary hover:bg-[var(--accent-hover)]"
   ```

### When Adding Custom Styles

```css
/* ✅ Good - Uses CSS variables */
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

/* ❌ Avoid - Hardcoded colors */
.my-component {
  background-color: #0a0a0a;
  color: #f5f5f5;
}
```

## 🔄 Updating Theme Colors

To change theme colors, edit `src/index.css`:

```css
:root {
  --accent-color: #0098AC; /* Change primary accent */
  --accent-hover: #007A8C; /* Change hover state */
}

.light {
  --bg-primary: #ffffff; /* Change light mode background */
  /* ... other colors */
}
```

## 📱 Mobile Considerations

- Toggle button positioned next to menu icon
- Touch-friendly size (40x40px minimum)
- Clear visual feedback on tap
- Works with mobile gestures

## 🐛 Troubleshooting

**Theme not switching:**
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)

**Colors not changing:**
- Verify CSS variables are used (not hardcoded colors)
- Check if element has inline styles overriding
- Inspect element to see computed styles

**Theme not persisting:**
- Check localStorage is enabled in browser
- Verify ThemeProvider wraps entire app
- Check console for localStorage errors

## 🎉 Summary

✅ Complete dark/light mode implementation  
✅ Smooth 0.3s animated transitions  
✅ Sun/moon toggle in navbar  
✅ Theme persists in localStorage  
✅ All pages and components updated  
✅ Logo updated to SVG  
✅ Fully responsive design  
✅ Accessible and user-friendly  

---

**Enjoy your beautiful new theme system! 🌓**
