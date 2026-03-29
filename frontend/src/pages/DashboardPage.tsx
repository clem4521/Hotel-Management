import { useState } from "react";
            /*----Components----*/
import AddMoreRoomBtn from "../components/AddMoreRoomBtn";
import CheckInForm from "../components/CheckInForm";
import CustomersContainer from "../components/CustomersContainer";
import RoomsContainer from "../components/RoomsContainer";

function DashBoardPage(){
    const [hiddened,sethidden] = useState(false);
    return(
        <div>
            <main className="relative w-screen h-screen">
               <div className="absolute bottom-3 left-10">
                    <RoomsContainer/>
               </div>
                <div className="absolute top-4 left-10">
                    <CustomersContainer/>
                </div>
               <div className="absolute top-2 right-5">
                    <AddMoreRoomBtn/>
               </div>
               <div className="flex justify-center items-center absolute w-screen h-screen">
                    <CheckInForm/>
               </div>
            </main>
        </div>
    )
}
export default DashBoardPage;