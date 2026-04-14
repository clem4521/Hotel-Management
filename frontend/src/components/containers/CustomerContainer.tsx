export default function CustomerContainer(props:{customer_name:string,floor_number:number,room_num:number}){
    return (
        <div className="pl-2 border rounded-2xl w-135">
            <div className="flex flex-row gap-3">
                <span>Cusotmer Name: {props.customer_name}</span>
                <span>Floor Number: {props.floor_number}</span>
                <span>Room Number: {props.room_num}</span>
            </div>
        </div>
    );
}