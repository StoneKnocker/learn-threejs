export const Roof = (props) => {
    return (
        <mesh {...props} castShadow position={[0,4,0]} rotation-y={Math.PI/4}>
            <coneGeometry args={[4.5,2,4]} />
            <meshStandardMaterial color="#b35f45" />
        </mesh>
    )
}

