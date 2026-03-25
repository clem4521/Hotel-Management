import CustomersContainer from "../components/CustomersContainer";
import RoomsContainer from "../components/RoomsContainer";
function DashBoardPage(){
    return(
        <div>
            <main className="relative">
               <div className="absolute top-0 left-10">
                    <RoomsContainer/>
               </div>
                <div className="absolute top-0 right-10">
                    <CustomersContainer/>
                </div>
               
            </main>
        </div>
    )
}
export default DashBoardPage;