import SummitBtn from "../buttons/SubmitBtn";
import useRooms from "../../hooks/useRooms";
export default function CheckInForm(){
    
    let unoccupiedRooms:any[] = [];
    let getRooms = useRooms();
    

    const filterRooms = (room_type:string,room_list:any[]) =>{
        for(let i = 0;i<=getRooms.length-1;i++){
            //@ts-ignore
            if(getRooms[i].status == room_type){
                room_list.push(getRooms[i])
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
            <select id="id" name="rooms" size={1} className="w-85 ml-5 bg-gray-500">
                {unoccupiedRooms.map((unoccupiedRoom)=>(
                    //@ts-ignore
                    <option value={unoccupiedRoom.id}>Floor: {unoccupiedRoom.floor} room number: {unoccupiedRoom.room_number} room type: {unoccupiedRoom.room_type}</option>
                ))}
            </select>
            <div className="flex items-center justify-center">
                <SummitBtn/>
            </div>
        </div>
    );
}