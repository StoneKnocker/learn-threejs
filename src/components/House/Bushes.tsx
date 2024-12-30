import { Instance, Instances } from "@react-three/drei"

export const Bushes = (props) => {
    return (
        <Instances castShadow receiveShadow limit={4} position={[0,0.2, 3.2]} {...props}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="green" />
            <Instance position={[1.5,0,0]} scale={1}/>
            <Instance position={[2.5,0,-0.2]} scale={0.5} />
            <Instance position={[-1.2,0,0]} scale={0.75} />
            <Instance position={[-2,0,-0.5]} scale={0.5} />
        </Instances>
    )
}
