export default function RoomContainer({floor,room_num,room_type,status}:any){
    return(
        <div className="border-2 border-gray-500 w-63 h-18 cursor-default">
            <div className="text-[14px]">
                <div className="flex flex-row gap-2">
                    <h1>Floor: {floor}</h1>
                    <h1>Room Number: {room_num}</h1>
                </div>
                <h1>Room Type: {room_type}</h1>
                <h1>Status: {status}</h1>
            </div>
        </div>
    )
}