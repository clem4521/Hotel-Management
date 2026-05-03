import { useState } from "react";
import AddBtn from "../buttons/AddBtn.tsx";
import instance from "../../utils/axios.ts";

export default function MoreRoomsForms(){
    const [floorNumValue,setFloorNumValue] = useState("");
    const [roomNumValue,setRoomNumValue] = useState("");
    const [roomTypeValue,setRoomTypeValue] = useState("");
    const [statusValue,setStatusValue] = useState("");
   
    function addRoom(){
        try {
            instance.post("/api/rooms",{
                floor:floorNumValue,
                room_number:roomNumValue,
                room_type:roomTypeValue,
                status:statusValue
            }).then(
                (res)=>{
                    console.log(res);
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    console.log(roomNumValue);

    return(
        <div className="flex flex-col gap-5 bg-gray-600 w-100 h-60  text-white rounded-2xl relative">
            <div className="relative top-3 flex flex-col h-50">
                <span className="text-center w-100">Add Room</span>
                <div className="flex flex-row gap-5 ml-15 mt-2">
                    <div className=" flex flex-col">
                        <label>Add Floor Number</label>
                        <input 
                            placeholder="Floor Number" 
                            value={floorNumValue} 
                            onChange={(e)=>setFloorNumValue(e.target.value)}
                            id="Floor_Num_Field" 
                            className="w-30 bg-gray-500 rounded-2xl pl-3"
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label>Add Room Number</label>
                        <input 
                            placeholder="Room Number" 
                            id="Room_Num_Field" 
                            value={roomNumValue} 
                            onChange={(e)=>setRoomNumValue(e.target.value)}
                            className="w-30 bg-gray-500 rounded-2xl pl-3"
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-8 ml-15 mt-2">
                    <div className=" flex flex-col">
                        <label>Add Room Type</label>
                        <input 
                            placeholder="Room Type" 
                            id="Room_Type_Field"
                            value={roomTypeValue} 
                            onChange={(e)=>setRoomTypeValue(e.target.value)} 
                            className="w-30 bg-gray-500 rounded-2xl pl-3"
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label>Add Status</label>
                        <input 
                            placeholder="Status" 
                            id="Status_Field"
                            value={statusValue} 
                            onChange={(e)=>setStatusValue(e.target.value)} 
                            className="w-30 bg-gray-500 rounded-2xl pl-3"
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 left-[40%]">
                    <AddBtn/>
                </div>
            </div>
        </div>
    )
}