import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

const App = () =>{
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <directionalLight/>
      <mesh>
        <sphereGeometry args={[1, 100, 100]}/>
        <meshStandardMaterial />
      </mesh>
      <OrbitControls autoRotate/>
    </Canvas>
  )
}

export default App
