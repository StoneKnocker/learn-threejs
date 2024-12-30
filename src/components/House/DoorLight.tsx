import { useControls } from "leva"

export const DoorLight = () => {
    const { distance, intensity } = useControls('door light', {
        intensity: 1,
        distance: 7
      })
    
      return (
        <>
          <pointLight castShadow distance={distance} intensity={intensity} position={[0, 2.7, 2.9]} />
        </>
      )
}
