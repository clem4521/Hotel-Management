import { useState } from "react";
            /*----Components----*/
import AddMoreRoomBtn from "../components/AddMoreRoomBtn";
import CheckInForm from "../components/CheckInForm";
import CustomersContainer from "../components/CustomersContainer";
import RoomsContainer from "../components/RoomsContainer";

function DashBoardPage(){

    const [checkInBtnStatus,setCheckInBtnStatus] = useState(true);

    const handleBooleanChange = (booleanValue:any) => {
        setCheckInBtnStatus(booleanValue);
    };

    const disable = (event:React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setCheckInBtnStatus(true);
        }
    }

    return(
        <div>
            <main className="relative w-screen h-screen z-0">
               <div className="absolute bottom-3 left-10">
                    <RoomsContainer/>
               </div>
                <div className="absolute top-4 left-10">
                    <CustomersContainer isHidden={handleBooleanChange}/>
                </div>
               <div className="absolute top-2 right-5">
                    <AddMoreRoomBtn/>
               </div>
               <div  onClick={disable} className={`flex justify-center items-center absolute w-screen h-screen bg-neutral-100/65 ${checkInBtnStatus?"hidden":"block"}`}>
                    <CheckInForm/>
               </div>
            </main>
        </div>
    )
}
export default DashBoardPage;