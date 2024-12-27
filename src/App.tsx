import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Plane, Sphere, Stage, Torus } from '@react-three/drei'
import { useState } from 'react';
import * as THREE from 'three';
import { useControls } from 'leva';

const Model = () => {
  const materialProps = useControls({color:'aqua', opacity:1, roughness:0.5, metalness:0.5});
  const [material, setMaterial] = useState<THREE.MeshPhysicalMaterial|undefined>(undefined); 
  return (
    <>
     <meshPhysicalMaterial ref={setMaterial} side={THREE.DoubleSide} {...materialProps}/>
     <Sphere args={[1,32,32]} material={material}/>
     <Plane args={[2,2]} position={[3,0,0]} material={material}/>
     <Torus args={[1, 0.5, 32, 32]} position={[-3.5,0,0]} material={material}/>
    </>
  )
}

const App = () =>{
  return (
    <Canvas
      camera={{
        position: [1, 1, 1],
        fov: 75,
        near: 0.1,
        far: 100,
      }}
      shadows
      dpr={[1,2]}
    >
      <color attach="background" args={[0,0,0]}/>
      <OrbitControls makeDefault/>
      <Stage intensity={1}>
        <Model/>
      </Stage>
    </Canvas>
  )
}

export default App
