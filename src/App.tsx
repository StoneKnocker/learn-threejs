import './index.css'
import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useMemo, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

extend({TextGeometry})


const HelloText = () => {
  const ref = useRef<THREE.Mesh>(null)
  const { color, text} = useControls({color: 'aqua', text: 'Hello'})
  const font = useLoader(FontLoader, '/typefaces/optimer_bold.typeface.json')
  const config = useMemo(()=>({font, size:5, height: 2}), [font])
  useLayoutEffect(()=>void ref.current?.geometry.center(), [text])

  return (
    <mesh ref={ref}>
      <textGeometry args={[text, config]}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}

const App = () =>{
  return (
    <Canvas dpr={[1,2]} camera={{position: [0,0,20], fov: 75}}>
      <ambientLight intensity={0.2} />
      <directionalLight/>
      <OrbitControls autoRotate/>
      <HelloText/>
    </Canvas>
  )
}

export default App
