import { useTexture } from "@react-three/drei"

export const Walls = (props) => {
    const textureProps = useTexture({
        map: 'textures/walls/color.jpg',
        normalMap: 'textures/walls/normal.jpg',
        roughnessMap: 'textures/walls/roughness.jpg',
        aoMap: 'textures/walls/ambientOcclusion.jpg',
    })

    return (
        <mesh castShadow receiveShadow position={[0,1.5,0]} {...props}>
            <boxGeometry args={[5,3,5]} />
            <meshStandardMaterial {...textureProps} />
        </mesh>
    )
}