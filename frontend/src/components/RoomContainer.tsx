export default function RoomContainer({floor,room_num,room_type,status}:any){

    const statusColor = 
        status === 'Unoccupied'?"text-green-600":
        status === "Occupied"?"text-red-600":
        status === "Cleaning"?"text-yellow-600":"text-black";

    return(
        <div className="border border-gray-500 w-120 h-7 cursor-default pl-2">
            <div className="text-[16px] flex flex-row gap-3">
                <h1>Floor: {floor}</h1>
                <h1>Room Number: {room_num}</h1>
                <h1>Room Type: {room_type}</h1>
                <h1>Status: <span  className={`${statusColor}`}>{status}</span></h1>
            </div>
        </div>
    )
}