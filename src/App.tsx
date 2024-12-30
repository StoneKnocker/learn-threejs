import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Suspense } from 'react'
import { Floor, Fog, Ghosts, Graves } from './components'
import { House } from './components/House/House'

const App = () =>{
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 15] }}>
      <Stats />
      <OrbitControls maxPolarAngle={Math.PI * 0.49} minDistance={5} maxDistance={20} makeDefault />
      <ambientLight intensity={1} color="lightcyan" />
      <directionalLight color="lightcyan" castShadow intensity={1} />
      <Fog />
      <Suspense fallback={null}>
        <House />
        <Graves />
        <Floor />
        <Ghosts />
      </Suspense>
    </Canvas>
  )
}

export default App
