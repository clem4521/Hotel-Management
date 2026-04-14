import { useEffect, useState } from "react";
import CustomerContainer from "./CustomerContainer";
import instance from "../../utils/axios";
import useRooms from "../../hooks/useRooms";


type Customer = {
    name:string,
    floor:number,
    room_nummber:number
}

export default function CustomersContainer(props: { isHiddenCheckIn: (booleanValue: any) => void,isHiddenCheckOut: (booleanValue: any) => void }){

    const [bookings,setBookings] = useState([]);
    let getRooms = useRooms();
    let customerRoom:Customer[] = [];



    const handleCheckInClick = () => {
        props.isHiddenCheckIn(false); 
    };

    const handleCheckOutClick = () => {
        props.isHiddenCheckOut(false); 
    };

    useEffect(()=>{
        try {
            instance
            .get("/api/bookings")
            .then((res)=>{
                setBookings(res.data.results);
                //console.log(res.data.results);
            })
        } catch (error) {
            
        }
    },[]);

    function filterCustomersRooms(){
        for(let i = 0;i<bookings.length;i++){
            
            // //@ts-ignore
            // console.log(bookings[i].room_id);
            try {
                instance
                //@ts-ignore
                .get(`/api/rooms/${bookings[i].room_id}`)
                .then((res)=>{
                    //console.log(res.data.results);
                    customerRoom.push(res.data.results)
                });
            } catch (error) {
                console.log(error);
            }
            
        }
    }

    //console.log(getRooms)
    
    //filterCustomersRooms();

    console.log(customerRoom)
    return(
        <div className="h-65 w-140 border-2 border-gray-500 rounded-2xl">
             
            <div className=" absolute w-full border-b flex flex-row top-2">
                <h1>Guests</h1>
                <div className="absolute right-3">
                    <button onClick={handleCheckInClick} className="border border-green-400 hover:bg-green-500 hover:text-white rounded-2xl w-18">
                        <h1>Check In</h1>
                    </button>
                    <button onClick={handleCheckOutClick} className="border border-green-400 hover:bg-green-500 hover:text-white rounded-2xl w-22 ml-2">
                        <h1>Check out</h1>
                    </button>
                </div>
                <div className="absolute top-8 ml-2 flex flex-col gap-2">
                    {bookings.map((bookings)=>(
                        //@ts-expect-error
                        <CustomerContainer customer_name={bookings.customer_first_name} />
                    ))}
                </div>
            </div>
        </div>
    )
}