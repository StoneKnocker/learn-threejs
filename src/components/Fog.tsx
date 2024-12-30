import { useControls } from "leva";

export const Fog = () => {
    const {color, near, far} = useControls('fog', {
        color: '#1b153e',
        near: 1,
        far: 100,
    })
    return (
        <>
        <fog attach="fog" args={[color, near, far]} />
        <color attach="background" args={[color]} />
        </>
    );
}