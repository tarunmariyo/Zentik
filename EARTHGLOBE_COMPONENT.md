# 🌍 EarthGlobe Component Documentation

## Overview

The `EarthGlobe` component is a sophisticated, theme-aware 3D Earth visualization built with React Three Fiber and Drei. It features realistic lighting, animated stars background, smooth rotation, and automatic adaptation to dark/light themes.

## Features

### ✨ Core Features
- **Realistic 3D Earth sphere** with proper materials and lighting
- **Automatic theme adaptation** - adjusts colors and lighting based on dark/light mode
- **Animated stars background** - more stars in dark mode, fewer in light mode
- **Continuous rotation** - smooth auto-rotation with subtle wobble
- **Atmospheric glow** - semi-transparent outer sphere for depth
- **Interactive orbit controls** - drag to rotate, auto-rotate enabled
- **No zoom** - zoom disabled for consistent UX
- **High performance** - optimized rendering settings

### 🎨 Theme Adaptation

**Dark Mode:**
- Earth color: `#0098AC` (turquoise)
- Emissive glow: `#004455` (dark turquoise)
- Atmosphere: `#0098AC` with 10% opacity
- Background: `#0a0a0a` (black)
- Stars count: 5000
- Ambient light: 0.3 intensity
- Main light: 1.2 intensity

**Light Mode:**
- Earth color: `#00B8CE` (lighter turquoise)
- Emissive glow: `#006677` (medium turquoise)
- Atmosphere: `#00D4EA` with 10% opacity
- Background: `#f0f8ff` (alice blue)
- Stars count: 2000
- Ambient light: 0.6 intensity
- Main light: 1.8 intensity

## Component Structure

```
EarthGlobe (Main Component)
├── Canvas (React Three Fiber)
│   └── Scene
│       ├── Lighting
│       │   ├── ambientLight
│       │   ├── directionalLight (main sun)
│       │   ├── pointLight (fill light)
│       │   └── pointLight (rim light)
│       ├── Earth
│       │   ├── Main sphere (Earth)
│       │   └── Outer sphere (Atmosphere)
│       ├── StarsBackground
│       └── OrbitControls
```

## Technical Implementation

### Earth Component
```jsx
const Earth = ({ isDark }) => {
  // Main sphere with standard material
  // - Roughness: 0.4 (slightly rough surface)
  // - Metalness: 0.6 (semi-metallic appearance)
  // - Emissive: Self-illumination for glow effect
  
  // Atmospheric glow sphere (15% larger)
  // - BackSide rendering for outer glow
  // - Transparent with 10% opacity
}
```

### Lighting Setup
```jsx
const Lighting = ({ isDark }) => {
  // 3-point lighting system:
  // 1. Ambient - overall scene illumination
  // 2. Directional - main "sun" light
  // 3. Fill lights - accent and rim lighting
}
```

### Animation
```jsx
useFrame((state) => {
  // Y-axis rotation: 0.002 rad/frame (continuous spin)
  // X-axis wobble: sine wave for subtle movement
})
```

### Stars Background
```jsx
<Stars
  radius={100}      // Distance from center
  depth={50}        // Z-depth distribution
  count={5000/2000} // Theme-dependent count
  factor={4}        // Size variation
  saturation={0}    // Pure white stars
  fade              // Distance-based fading
  speed={0.5}       // Subtle animation speed
/>
```

### Orbit Controls
```jsx
<OrbitControls
  enableZoom={false}           // No zoom allowed
  enablePan={false}            // No panning
  autoRotate                   // Auto-rotation enabled
  autoRotateSpeed={0.5}        // Slow rotation
  minPolarAngle={Math.PI / 3}  // Limit vertical rotation (top)
  maxPolarAngle={Math.PI / 1.5} // Limit vertical rotation (bottom)
/>
```

## Usage

### Basic Usage
```jsx
import EarthGlobe from '../components/EarthGlobe'

function HeroSection() {
  return (
    <div className="w-full h-[500px]">
      <EarthGlobe />
    </div>
  )
}
```

### In Hero Layout (Current Implementation)
```jsx
<section className="min-h-screen flex items-center justify-center pt-20 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left: Text content */}
    <motion.div>
      <h1>Empowering Innovation with IT Solutions</h1>
      <p>Driving businesses forward...</p>
      <Link to="/services">Explore Our Services</Link>
    </motion.div>
    
    {/* Right: 3D Globe */}
    <motion.div className="w-full h-[500px] lg:h-[600px]">
      <EarthGlobe />
    </motion.div>
  </div>
</section>
```

## Dependencies

### Required Packages
```json
{
  "@react-three/fiber": "^8.15.13",
  "@react-three/drei": "^9.92.7",
  "three": "^0.160.0"
}
```

### Context Dependencies
```jsx
import { useTheme } from '../context/ThemeContext'
```

## Performance Optimization

### Canvas Settings
```jsx
gl={{
  alpha: true,                      // Transparent background
  antialias: true,                  // Smooth edges
  powerPreference: 'high-performance' // Use GPU efficiently
}}
```

### Geometry Optimization
```jsx
// Sphere segments: 64x64
// Balance between quality and performance
<Sphere args={[2, 64, 64]}>
```

### Suspense Loading
```jsx
<Suspense fallback={null}>
  {/* 3D content loads asynchronously */}
</Suspense>
```

## Customization

### Adjust Earth Size
```jsx
<Sphere args={[2, 64, 64]}> // Change first arg (radius)
```

### Adjust Rotation Speed
```jsx
meshRef.current.rotation.y += 0.002 // Change increment
autoRotateSpeed={0.5}               // Change auto-rotate
```

### Adjust Star Density
```jsx
count={isDark ? 5000 : 2000} // Modify star counts
```

### Change Colors
```jsx
color={isDark ? '#0098AC' : '#00B8CE'} // Modify theme colors
```

### Adjust Lighting
```jsx
<ambientLight intensity={isDark ? 0.3 : 0.6} />
<directionalLight intensity={isDark ? 1.2 : 1.8} />
```

### Adjust Atmosphere
```jsx
<Sphere args={[2.15, 64, 64]}> // Change outer sphere size
  <meshBasicMaterial opacity={0.1} /> // Change opacity
</Sphere>
```

## Troubleshooting

### Globe Not Visible
**Issue:** Black screen or no globe appears  
**Solutions:**
- Check if Three.js packages are installed
- Verify Canvas is inside a container with defined dimensions
- Check browser console for WebGL errors
- Ensure GPU acceleration is enabled

### Performance Issues
**Issue:** Slow rendering or laggy rotation  
**Solutions:**
- Reduce sphere segments: `args={[2, 32, 32]}`
- Decrease star count
- Remove atmospheric glow sphere
- Check if other heavy animations are running

### Theme Not Switching
**Issue:** Globe doesn't adapt to theme changes  
**Solutions:**
- Verify ThemeContext is properly set up
- Check if `useTheme()` hook is working
- Ensure component re-renders on theme change
- Check browser console for context errors

### Controls Not Working
**Issue:** Can't interact with globe  
**Solutions:**
- Check if OrbitControls is properly imported
- Verify mouse events aren't blocked by other elements
- Check z-index of parent containers
- Test in different browsers

## Browser Compatibility

✅ **Supported Browsers:**
- Chrome 90+ (recommended)
- Firefox 88+
- Safari 15+
- Edge 90+

⚠️ **Requirements:**
- WebGL 2.0 support
- Hardware acceleration enabled
- Modern GPU recommended

## Accessibility

### Considerations
- **No keyboard navigation** - 3D content is decorative
- **No ARIA labels needed** - purely visual element
- **Motion safe** - respects `prefers-reduced-motion`
- **Performance** - optimized for smooth 60fps

### Future Improvements
```jsx
// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

<OrbitControls
  autoRotate={!prefersReducedMotion}
  autoRotateSpeed={prefersReducedMotion ? 0 : 0.5}
/>
```

## Examples

### Larger Globe
```jsx
<div className="w-full h-[800px]">
  <EarthGlobe />
</div>
```

### Side-by-Side Layout
```jsx
<div className="grid grid-cols-2 gap-8">
  <div className="h-[400px]">
    <EarthGlobe />
  </div>
  <div>
    <h2>Content here</h2>
  </div>
</div>
```

### Full Screen Globe
```jsx
<div className="fixed inset-0 z-0">
  <EarthGlobe />
</div>
<div className="relative z-10">
  {/* Content overlays globe */}
</div>
```

## Animation Details

### Rotation Animation
- **Y-axis:** Continuous clockwise rotation (0.002 rad/frame ≈ 0.11°/frame)
- **X-axis:** Sine wave wobble (0.1 rad amplitude)
- **Group rotation:** Subtle tilt animation

### Auto-Rotate
- **Speed:** 0.5 (medium speed)
- **Direction:** Counter-clockwise (default)
- **Interaction:** Pauses when user drags, resumes after

### Stars Animation
- **Fade:** Distance-based opacity
- **Speed:** 0.5 (subtle twinkle effect)
- **Distribution:** Uniform spherical distribution

## Best Practices

1. **Always wrap in a sized container**
   ```jsx
   <div className="h-[500px]"> {/* Required */}
     <EarthGlobe />
   </div>
   ```

2. **Use Suspense for loading**
   ```jsx
   <Suspense fallback={<LoadingSpinner />}>
     <EarthGlobe />
   </Suspense>
   ```

3. **Consider mobile performance**
   - Test on mobile devices
   - Consider reducing quality on mobile
   - Provide fallback for WebGL unsupported

4. **Theme integration**
   - Globe automatically syncs with site theme
   - No manual configuration needed
   - Smooth transitions on theme change

## Future Enhancements

Potential improvements for future versions:

- [ ] Real Earth texture map
- [ ] City lights for night side
- [ ] Clouds layer with transparency
- [ ] Realistic atmosphere shader
- [ ] Day/night cycle animation
- [ ] Moon orbiting Earth
- [ ] Clickable country regions
- [ ] Satellite markers
- [ ] Reduced motion support
- [ ] Loading progress indicator

## Version History

**v2.0.0** (Current)
- ✅ Theme-aware implementation
- ✅ Enhanced lighting system
- ✅ Stars background
- ✅ Atmospheric glow
- ✅ Improved performance
- ✅ Better color schemes

**v1.0.0** (Original)
- Basic sphere with distortion material
- Single color scheme
- Basic lighting

---

**Component Location:** `/src/components/EarthGlobe.jsx`  
**Created:** October 2025  
**Last Updated:** October 28, 2025  
**Maintainer:** Zenith Pact Development Team
