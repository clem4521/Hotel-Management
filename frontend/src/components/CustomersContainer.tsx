import CheckinBtn from "./CheckinBtn";

export default function CustomersContainer(){
    return(
        <div className="h-65 w-80 border-2 border-gray-500 rounded-2xl">
             
            <div className=" absolute w-full border-b flex flex-row top-2">
                <h1>Guests</h1>
                <div className="absolute right-3">
                    <CheckinBtn/>
                </div>
            </div>
        </div>
    )
}