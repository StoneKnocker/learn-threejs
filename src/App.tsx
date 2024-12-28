import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Plane, Sphere, useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'

const Model = () => {
  return (
    <>
    <Sphere args={[1,32,32]} castShadow>
      <meshPhysicalMaterial color="aqua"/>
    </Sphere>
    <Plane args={[20,20]} position={[0,-1,0]} receiveShadow rotation={[-Math.PI * -0.5,0,0]}>
      <meshPhysicalMaterial color="gray"/>
    </Plane>
    </>
  )
}

const Lights = () => {
  const lightProps = useControls({
    color: 'aqua',
    intensity: 1,
    position: [3,3,3],
    distance: 10,
    angle: Math.PI /4,
    penumbra: 0.5,
    decay: 0.5
  })
  const mainLightRef = useRef(null)
  useHelper(mainLightRef, THREE.SpotLightHelper, 'red')
  return (
    <>
    <ambientLight color='aqua'/>
    <spotLight ref={mainLightRef} {...lightProps}/>
    </>
  )
}

const App = () =>{
  return (
    <Canvas shadows dpr={[1,2]}>
      <Lights/>
      <Model/>
      <OrbitControls makeDefault/>
    </Canvas>
  )
}

export default App
