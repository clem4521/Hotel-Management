import SummitBtn from "../buttons/SubmitBtn";
import instance from "../../utils/axios";
import { useEffect, useState } from "react";
export default function CheckInForm(){

    const [rooms,setRooms] = useState([]);


    useEffect(()=>{
        try{
            instance.get("/api/rooms").then((res)=>{
                setRooms(res.data.results);
            })
        }catch(error){

        }
    },[])


    return (
        <div className="flex flex-col gap-5 bg-gray-600 w-100 h-60  text-white rounded-2xl">
            <span className="abolute text-center">Check In</span>
           <div className="flex flex-col gap-2 ml-5">
                <label>Name</label>
                <input placeholder="First Name" className="w-50 bg-gray-500 rounded-2xl pl-3"/>
           </div>
            <select id="id" name="rooms" size={1} className="w-70 ml-5 bg-gray-500 overflow-y-auto">
                {rooms.map((room)=>(
                    //@ts-ignore
                    <option value={room.id}>Floor:{room.floor} room number:{room.room_number} room type:{room.room_type} status:{room.status}</option>
                ))}
            </select>
            <div className="flex items-center justify-center">
                <SummitBtn/>
            </div>
        </div>
    );
}