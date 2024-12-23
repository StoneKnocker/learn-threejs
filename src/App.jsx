import './index.css'
import { Canvas, useLoader} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const name = (type) => `PavingStones092_1K-JPG/PavingStones092_1K-JPG_${type}.jpg`;

const Scene = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [name('Color'), name('Displacement'), name('NormalGL'), name('Roughness'), name('AmbientOcclusion')])
  return (
    <>
    <ambientLight intensity={0.2} />
    <directionalLight/>
    <mesh>
      <sphereGeometry args={[1, 100, 100]}/>
      <meshStandardMaterial 
      map={colorMap}
      displacementScale={0.2}
      displacementMap={displacementMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      aoMap={aoMap}
      />
    </mesh>
    </>
  );
}

const App = () => (
  <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls autoRotate/>
      </Suspense>
  </Canvas>
)

export default App
