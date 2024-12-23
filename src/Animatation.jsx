import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated, config } from '@react-spring/three'

function MyAnimateBox() {
    const mesh = useRef();
    const [active, setActive] = useState(false);

    const {scale} = useSpring({scale: active ? 1.5:1, config: config.wobbly});


    useFrame(({clock})=>{
        const a = clock.getElapsedTime();
        mesh.current.rotation.x = a;
    })
    return (
        <animated.mesh ref={mesh} scale={scale} onClick={()=>setActive(!active)} className="w-full h-full">
            <boxGeometry />
            <meshStandardMaterial color="red"/>
        </animated.mesh>
    )
}

export default function Animatation() {
  return (
    <Canvas className="w-full h-full">
        <MyAnimateBox />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10,10,10]} intensity={1} />
    </Canvas>
  )
}