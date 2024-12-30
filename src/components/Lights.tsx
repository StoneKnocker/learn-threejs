export const Lights = () => {
    return (
        <>
        <ambientLight intensity={0.12} color="lightcyan" />
        <directionalLight color="lightcyan" castShadow intensity={0.12} />
        </>
    );
}