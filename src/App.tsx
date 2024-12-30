import './index.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import { Particles } from './components/Particles'
import { Objects } from './components/Objects'
import * as THREE from 'three'
import { Suspense } from 'react'


function ScrollBasedAnimation() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
  })

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <Particles />
        <Objects />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  )
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} style={{ mixBlendMode: 'multiply' }}>
      <ambientLight />
      <directionalLight color="red" intensity={10} />
      <Suspense fallback={null}>
        <ScrollBasedAnimation />
      </Suspense>
    </Canvas>
  )
}