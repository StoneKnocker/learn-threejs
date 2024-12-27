import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const App = () =>{
  return (
    <Canvas
      camera={{
        position: [1, 1, 1],
        fov: 75,
        near: 0.1,
        far: 100,
      }}
    >
      <color attach="background" args={[0,0,0]}/>
      <OrbitControls />
      <mesh>
        <ambientLight intensity={0.2}/>
        <directionalLight position={[10,10,10]}/>
        <sphereGeometry args={[1, 100, 100]}/>
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
