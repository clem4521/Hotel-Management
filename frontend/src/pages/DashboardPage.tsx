import AddMoreRoomBtn from "../components/AddMoreRoomBtn";
import CustomersContainer from "../components/CustomersContainer";
import RoomsContainer from "../components/RoomsContainer";
function DashBoardPage(){
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
            </main>
        </div>
    )
}
export default DashBoardPage;