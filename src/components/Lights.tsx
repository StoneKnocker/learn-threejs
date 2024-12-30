export const Lights = () => {
    return (
        <>
        <ambientLight intensity={0.5} color="lightcyan" />
        <directionalLight color="lightcyan" castShadow intensity={0.5} />
        </>
    );
}