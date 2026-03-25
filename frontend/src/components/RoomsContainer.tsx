import RoomContainer from "./RoomContainer";

export default function RoomsContainer(){
    return(
        <div className="border border-gray-500 w-128 h-75 rounded-2xl">
            <div>
                <div className="pl-2 mb-2 border-b flex flex-row gap-4">
                    <h1>Rooms</h1>
                    <h1 className="w-30">Unoccupied: <span className="">12</span></h1>
                    <h1 className="w-30">Occupied: <span className="">12</span></h1>
                    <h1 className="w-30">Cleaning: <span className="">12</span></h1>
                </div>
                {/* Change this later when backend is connected to the frontend*/}
                <div className="flex flex-col gap-2 w-127 pl-2 h-65 overflow-y-auto">
                    <RoomContainer floor={1} room_num={1} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={2} room_type={"King"} status={"Occupied"}/>
                    <RoomContainer floor={1} room_num={3} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={4} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Cleaning"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Unoccupied"}/>
                    <RoomContainer floor={1} room_num={5} room_type={"King"} status={"Unoccupied"}/>
                </div>
            </div>
        </div>
    )
}