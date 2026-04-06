import { useState } from "react";
            /*----Components----*/
import AddMoreRoomBtn from "../components/AddMoreRoomBtn";
import CheckInForm from "../components/CheckInForm";
import CustomersContainer from "../components/CustomersContainer";
import RoomsContainer from "../components/RoomsContainer";
import CheckoutForm from "../components/CheckoutForm";
import MoreRoomsForms from "../components/MoreRoomsForm";


function DashBoardPage(){

    const [checkInBtnStatus,setCheckInBtnStatus] = useState(true);
    const [checkOutBtnstatus,setCheckOutBtnstatus] = useState(true);
    const [addRoomBtn,setAddRoomBtn] = useState(true);

    const handleCheckInForm= (booleanValue:any) => {
        //console.log("check in");
        setCheckInBtnStatus(booleanValue);
    };

    const handleCheckOutForm= (booleanValue:any) => {
        //console.log("check out");
        setCheckOutBtnstatus(booleanValue);
    };

    const handleAddMoreBtn = (booleanValue:any) => {
        //console.log("Add More rooms")
        setAddRoomBtn(booleanValue);
    };

    const disableForms = (event:React.MouseEvent<HTMLDivElement>) => {
       if(!checkInBtnStatus && checkOutBtnstatus && addRoomBtn){
            if (event.target === event.currentTarget) {
                setCheckInBtnStatus(true);
            } 
       }

       if(!checkOutBtnstatus && checkInBtnStatus && addRoomBtn){
            if (event.target === event.currentTarget) {
                setCheckOutBtnstatus(true);
            }
       }
       if(checkOutBtnstatus && !addRoomBtn && checkInBtnStatus){
            if (event.target === event.currentTarget) {
                setAddRoomBtn(true);
            }
       }
    }

    return(
        <div>
            <main className="relative w-screen h-screen z-0">
               <div className="absolute bottom-3 left-10">
                    <RoomsContainer/>
               </div>
                <div className="absolute top-4 left-10">
                    <CustomersContainer isHiddenCheckIn={handleCheckInForm} isHiddenCheckOut={handleCheckOutForm}/>
                </div>
               <div className="absolute top-2 right-5">
                    <AddMoreRoomBtn isHidden={handleAddMoreBtn}/>
               </div>
               <div onClick={disableForms} className={`flex justify-center items-center absolute w-screen h-screen bg-neutral-100/65 ${addRoomBtn?"hidden":"block"}`}>
                    <MoreRoomsForms/>
               </div>
               <div  onClick={disableForms} className={`flex justify-center items-center absolute w-screen h-screen bg-neutral-100/65 ${checkInBtnStatus?"hidden":"block"}`}>
                    <CheckInForm/>
               </div>
               <div onClick={disableForms} className={`${checkOutBtnstatus?"hidden":"block"} flex justify-center items-center absolute w-screen h-screen bg-neutral-100/65`}>
                    <CheckoutForm/>
               </div>
            </main>
        </div>
    )
}
export default DashBoardPage;