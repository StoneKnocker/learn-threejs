import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import {a, useSpring} from '@react-spring/three'

const Cube = ({color}: {color: string}) => {
  const {position} = useSpring({
    loop: {
      reverse: true
    },
    from: {
      position: [0,0,0]
    },
    to: {
      position: [2,0,0]
    }
  })

  return (
    <a.mesh position={position}>
      <boxGeometry args={[1,1,1]} />
      <meshBasicMaterial color={color} />
    </a.mesh>
  )
}

const App = () => (
  <Canvas className='w-[800px] h-[600px]'
  gl={{alpha: false}}
  camera={{position: [0,0,3], fov: 75, aspect: 800/600}}>
    <ambientLight intensity={0.2} />
    <directionalLight position={[10,10,10]} />
    <Cube color={0xff0000}/>
  </Canvas>
)

export default App
