import RoomContainer from "./RoomContainer";
import useRooms from "../../hooks/useRooms";

export default function RoomsContainer(){

    let getRooms = useRooms();

    let unoccupiedRooms = 0;
    let occuppiedRooms = 0;
    let cleaningRooms = 0;

    for(let i = 0;i<getRooms.length;i++){
        //@ts-ignore
        if(getRooms[i].status == "Unoccupied"){
            unoccupiedRooms += 1;
        }
        //@ts-ignore
        else if(getRooms[i].status == "Occupied"){
            occuppiedRooms += 1;
        }
        //@ts-ignore
        else if(getRooms[i].status == "Cleaning"){
            cleaningRooms += 1;
        }
    }
    
    return(
        <div className="border border-gray-500 w-140 h-75 rounded-2xl cursor-default">
            <div>
                <div className="pl-2 mb-2 border-b flex flex-row gap-4">
                    <h1>Rooms</h1>
                    <h1 className="w-30">Unoccupied: <span className="">{unoccupiedRooms}</span></h1>
                    <h1 className="w-30">Occupied: <span className="">{occuppiedRooms}</span></h1>
                    <h1 className="w-30">Cleaning: <span className="">{cleaningRooms}</span></h1>
                </div>
                <div className="flex flex-col gap-2.5 w-138 pl-2 h-65 overflow-y-auto">
                    {getRooms.map((room)=>(
                        //@ts-ignore
                        <RoomContainer floor={room.floor} room_num={room.room_number} room_type={room.room_type} status={room.status}/>
                    ))}
                </div>
            </div>
        </div>
    )
}