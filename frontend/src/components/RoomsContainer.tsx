import RoomContainer from "./RoomContainer";

export default function RoomsContainer(){
    return(
        <div className="border-2 border-gray-500 absolute w-[22%] h-[50%]">
            <div>
                <h1 className="mb-1">Rooms</h1>
                <div className="flex flex-col gap-2 overflow-y-auto h-75">
                    <RoomContainer floor={1} room_num={1} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={1} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={1} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={1} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={1} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={1} room_type={"King"} status={"Unoccupied"}/>
                </div>
            </div>
        </div>
    )
}