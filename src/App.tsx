import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

const sizes = {
  width: 800,
  height: 600
}

interface CubeProps {
  posX: number
}

const Cube = ({posX, color}) => {
  return (
    <mesh position-x={posX}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshBasicMaterial color={color}/>
    </mesh>
  );
}

const Cubes = () => {
  return (
    <group position={[0, 1, 0]} scale={[1,2,1]} rotation={[0, 1, 0]}>
      <Cube posX={0} color="red"/>
      <Cube posX={-2} color="green"/>
      <Cube posX={2} color="blue"/>
    </group>
  );
}

const App = () => {
  return (
    <>
      <Canvas
       className='w-[800px] h-[600px]'
       gl={{alpha: false}}
       camera = {{
        position: [0, 0, 10],
        fov: 75,
        aspect: sizes.width / sizes.height,
       }}
        >
        <Cubes/>
      </Canvas>
    </>
  )
}

export default App
