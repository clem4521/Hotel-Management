import SummitBtn from "../buttons/SubmitBtn";
import instance from "../../utils/axios";
import { useEffect, useState } from "react";
export default function CheckInForm(){
    
    const [rooms,setRooms] = useState([]);
    let unoccupiedRooms:any[] = [];

    useEffect(()=>{
        try{
            instance.get("/api/rooms")
            .then((res)=>{
                setRooms(res.data.results);
            });
        }catch(error){
            
        }
    },[])

    const filterRooms = (room_type:string,room_list:any[]) =>{
         for(let i = 0;i<=rooms.length-1;i++){
            //@ts-ignore
            if(rooms[i].status == room_type){
                room_list.push(rooms[i])
            }
        }
    }

    filterRooms("Unoccupied",unoccupiedRooms);
    return (
        <div className="flex flex-col gap-5 bg-gray-600 w-120 h-60  text-white rounded-2xl">
            <span className="abolute text-center">Check In</span>
           <div className="flex flex-col gap-2 ml-5">
                <label>Name</label>
                <input placeholder="First Name" className="w-50 bg-gray-500 rounded-2xl pl-3"/>
           </div>
            <select id="id" name="rooms" size={1} className="w-md ml-5 bg-gray-500 overflow-y-auto">
                {unoccupiedRooms.map((unoccupiedRoom)=>(
                    //@ts-ignore
                    <option value={unoccupiedRoom.id}>Floor:{unoccupiedRoom.floor} room number:{unoccupiedRoom.room_number} room type:{unoccupiedRoom.room_type} status:{unoccupiedRoom.status}</option>
                ))}
            </select>
            <div className="flex items-center justify-center">
                <SummitBtn/>
            </div>
        </div>
    );
}