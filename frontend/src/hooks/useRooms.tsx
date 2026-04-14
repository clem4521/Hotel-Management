import { useEffect, useState } from "react";
import instance from "../utils/axios";

export default function useRooms():String[]{
    const [rooms,setRooms] = useState([]);

    useEffect(()=>{
        try{
            instance.get("/api/rooms")
            .then((res)=>{
                setRooms(res.data.results);
            });
        }catch(error){
            
        }
    },[]);

    return rooms;
}

