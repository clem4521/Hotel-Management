import SummitBtn from "./SubmitBtn";

export default function CheckoutForm(){
    return(
        <div className="bg-gray-600 text-white w-100 h-40 rounded-2xl absolute">
            <div className="flex flex-col pt-3">
                <span className="flex justify-center">Check Out</span>
                <label className="ml-5 pb-1.5">Choose a customer</label>
                <select id="id" name="customers" className="w-70 bg-gray-500 ml-5">
                </select>
            <div className="flex justify-center absolute bottom-5 w-full">
                <SummitBtn/>
            </div>
            </div>
        </div>
    )
}