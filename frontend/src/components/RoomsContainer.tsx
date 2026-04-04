import { useState,useEffect } from "react";
import RoomContainer from "./RoomContainer";
import instance from "../utils/axios";

export default function RoomsContainer(){

    const [rooms,setRooms] = useState([]);

    useEffect(()=>{
        try {
            instance.get("/api/rooms")
                .then((res)=>{
                    console.log(res.data.results);
                    setRooms(res.data.results);
                });
        } catch (error) {
            console.log(error);
        }
    },[]);
    

    return(
        <div className="border border-gray-500 w-lg h-75 rounded-2xl">
            <div>
                <div className="pl-2 mb-2 border-b flex flex-row gap-4">
                    <h1>Rooms</h1>
                    <h1 className="w-30">Unoccupied: <span className="">12</span></h1>
                    <h1 className="w-30">Occupied: <span className="">12</span></h1>
                    <h1 className="w-30">Cleaning: <span className="">12</span></h1>
                </div>
                <div className="flex flex-col gap-2 w-127 pl-2 h-65 overflow-y-auto">
                    {rooms.map((room)=>(
                        //@ts-ignore
                        <RoomContainer floor={room.floor} room_num={room.room_number} room_type={room.room_type} status={room.status}/>
                    ))}
                </div>
            </div>
        </div>
    )
}