import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'

function Box() {
  const {args1} = useControls({
    args1: [1,32,32]
  })

  const textureProps = useTexture({
    map: 'textures/color.jpg',
    displacementMap: 'textures/displacement.jpg',
    metalnessMap: 'textures/metalness.jpg',
    roughnessMap: 'textures/roughness.jpg',
    normalMap: 'textures/normal.jpg',
  })
  return (
  <Sphere args={args1}>
    <meshPhysicalMaterial {...textureProps} map-magFilter={THREE.NearestFilter} displacementScale={0.5}/>
  </Sphere>
  )
}

const App = () => (
  <Canvas shadows dpr={[1,2]}>
      <OrbitControls makeDefault autoRotate/>
      <Suspense fallback={null}>
        <Stage preset="portrait" shadows={false}>
          <Box/>
        </Stage>
      </Suspense>
  </Canvas>
)

export default App
