import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'

const Cube = ({color}) => {
  return (
    <mesh position={[0,0,0]}>
      <boxGeometry args={[1,1,1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

const App = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    if (canvasRef.current && document) {
      if (isFullscreen) {
        canvasRef.current?.requestFullscreen()
      } else {
        if (document.exitFullscreen) {
          document?.exitFullscreen()
        }
      }
    }
  }, [isFullscreen])

  return(
  <Canvas
  onDoubleClick={()=>setIsFullscreen(!isFullscreen)}
  onCreated={(state) => {
    canvasRef.current = state.gl.domElement
  }}
  camera={{
    position: [0,0,3],
    fov: 75,
    aspect: 800/600
  }}
  >
    <color attach="background" args={[0,0,0]} />
    <OrbitControls autoRotate/>
    <Cube color={0xff0000}/>
  </Canvas>
  );
}

export default App
