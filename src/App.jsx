import './index.css'
import { Canvas, useLoader} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = () => {
  const gltf = useLoader(GLTFLoader, './Poimandres.gltf')
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  )
}

const App = () => (
  <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <Model />
      <OrbitControls />
      <Environment preset="sunset" background />
    </Suspense>
    <ambientLight color={0xff0000} intensity={0.1} />
    <directionalLight position={[0, 0, 5]} intensity={0.5} />
  </Canvas>
)

export default App
