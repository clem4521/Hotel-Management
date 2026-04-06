import SummitBtn from "../buttons/SubmitBtn";

export default function CheckInForm(){
    return (
        <div className="flex flex-col gap-5 bg-gray-600 w-100 h-60  text-white rounded-2xl">
            <span className="abolute text-center">Check In</span>
           <div className="flex flex-col gap-2 ml-5">
                <label>Name</label>
                <input placeholder="First Name" className="w-50 bg-gray-500 rounded-2xl pl-3"/>
           </div>
            <select id="id" name="rooms" className="w-70 ml-5 bg-gray-500">
                <option value={"1"}>floor: 1 Room: 1 Room_Type: singal</option>
                <option value={"2"}>floor:1 Room:2</option>
                <option value={"2"}>floor:1 Room:3</option>
            </select>
            <div className="flex items-center justify-center">
                <SummitBtn/>
            </div>
        </div>
    );
}