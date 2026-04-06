import { useState,useEffect } from "react";
import RoomContainer from "./RoomContainer";
import instance from "../../utils/axios";

export default function RoomsContainer(){

    const [rooms,setRooms] = useState([]);

    let unoccupiedRooms = 0;
    let occuppiedRooms = 0;
    let cleaningRooms = 0;

    useEffect(()=>{
        try {
            instance.get("/api/rooms")
            .then((res)=>{
                setRooms(res.data.results);
                
            });
            //
        } catch (error) {
            console.log(error);
        }
    },[]);

    for(let i = 0;i<rooms.length;i++){
        //@ts-ignore
        if(rooms[i].status == "Unoccupied"){
            unoccupiedRooms += 1;
        }
        //@ts-ignore
        else if(rooms[i].status == "Occupied"){
            occuppiedRooms += 1;
        }
        //@ts-ignore
        else if(rooms[i].status == "Cleaning"){
            cleaningRooms += 1;
        }
    }
    
    return(
        <div className="border border-gray-500 w-140 h-75 rounded-2xl">
            <div>
                <div className="pl-2 mb-2 border-b flex flex-row gap-4">
                    <h1>Rooms</h1>
                    <h1 className="w-30">Unoccupied: <span className="">{unoccupiedRooms}</span></h1>
                    <h1 className="w-30">Occupied: <span className="">{occuppiedRooms}</span></h1>
                    <h1 className="w-30">Cleaning: <span className="">{cleaningRooms}</span></h1>
                </div>
                <div className="flex flex-col gap-2.5 w-138 pl-2 h-65 overflow-y-auto">
                    {rooms.map((room)=>(
                        //@ts-ignore
                        <RoomContainer floor={room.floor} room_num={room.room_number} room_type={room.room_type} status={room.status}/>
                    ))}
                </div>
            </div>
        </div>
    )
}