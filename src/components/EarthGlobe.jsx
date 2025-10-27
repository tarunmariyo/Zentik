import { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

// Earth sphere component with realistic textures
const Earth = ({ isDark }) => {
  const meshRef = useRef()
  const groupRef = useRef()
  const cloudsRef = useRef()

  // Load textures from CDN (2K resolution)
  const [dayMap, nightMap, bumpMap, cloudsMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg', // Day texture
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_lights_2048.png', // Night lights
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg', // Bump/Normal map
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png', // Clouds
  ])

  // Continuous rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0015 // Clouds rotate slightly slower
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  // Create custom shader material for day/night transition
  const earthMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: dayMap,
      bumpMap: bumpMap,
      bumpScale: 0.05,
      emissiveMap: nightMap,
      emissive: new THREE.Color(isDark ? '#ffaa55' : '#ff9944'),
      emissiveIntensity: isDark ? 1.5 : 0.8,
      roughness: 0.9,
      metalness: 0.1,
    })
  }, [dayMap, nightMap, bumpMap, isDark])

  // Theme-based color tint overlay
  const colorTint = useMemo(() => {
    return new THREE.Color(isDark ? '#0098AC' : '#00B8CE')
  }, [isDark])

  return (
    <group ref={groupRef}>
      {/* Main Earth sphere with textures */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <primitive object={earthMaterial} attach="material" />
      </Sphere>

      {/* Theme color overlay (subtle tint) */}
      <Sphere args={[2.01, 64, 64]}>
        <meshBasicMaterial
          color={colorTint}
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Clouds layer */}
      <Sphere ref={cloudsRef} args={[2.03, 64, 64]}>
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          blending={THREE.NormalBlending}
          depthWrite={false}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.15, 64, 64]}>
        <meshBasicMaterial
          color={isDark ? '#0098AC' : '#00D4EA'}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  )
}

// Scene lighting component - optimized for textured Earth
const Lighting = ({ isDark }) => {
  return (
    <>
      {/* Ambient light - softer in dark mode to show night lights */}
      <ambientLight intensity={isDark ? 0.2 : 0.5} />
      
      {/* Main directional light (sun) - positioned to create day/night */}
      <directionalLight
        position={[5, 3, 5]}
        intensity={isDark ? 2.0 : 2.5}
        color={isDark ? '#ffffff' : '#fffaee'}
        castShadow
      />
      
      {/* Fill light from opposite side (subtle) */}
      <pointLight
        position={[-5, 0, -5]}
        intensity={isDark ? 0.2 : 0.3}
        color="#0098AC"
      />
      
      {/* Top rim light for atmosphere effect */}
      <pointLight
        position={[0, 8, 0]}
        intensity={isDark ? 0.3 : 0.4}
        color={isDark ? '#0098AC' : '#00B8CE'}
      />
    </>
  )
}

// Stars background component
const StarsBackground = ({ isDark }) => {
  return (
    <Stars
      radius={100}
      depth={50}
      count={isDark ? 5000 : 2000}
      factor={4}
      saturation={0}
      fade
      speed={0.5}
    />
  )
}

// Scene setup component
const Scene = ({ isDark }) => {
  const { scene } = useThree()
  
  // Update background color based on theme
  useMemo(() => {
    scene.background = new THREE.Color(isDark ? '#0a0a0a' : '#f0f8ff')
  }, [isDark, scene])

  return (
    <>
      <Lighting isDark={isDark} />
      <Earth isDark={isDark} />
      <StarsBackground isDark={isDark} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

const EarthGlobe = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px] relative">
      {/* Loading indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--text-tertiary)] text-sm">Loading Earth...</p>
        </div>
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <Scene isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default EarthGlobe
