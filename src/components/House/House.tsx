import { Bushes } from "./Bushes"
import { Door } from "./Door"
import { DoorLight } from "./DoorLight"
import { Roof } from "./Roof"
import { Walls } from "./Walls"

export const House = (props) => {
    return (
        <group {...props}>
            <Bushes />
            <DoorLight />
            <Door />
            <Roof />
            <Walls />
        </group>
    )
}
