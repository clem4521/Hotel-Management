
export default function CustomersContainer(props: { isHidden: (booleanValue: any) => void }){
    const handleClick = () => {
        props.isHidden(false); 
    };
    return(
        <div className="h-65 w-80 border-2 border-gray-500 rounded-2xl">
             
            <div className=" absolute w-full border-b flex flex-row top-2">
                <h1>Guests</h1>
                <div className="absolute right-3">
                    <button onClick={handleClick} className="border border-green-400 hover:bg-green-500 hover:text-white rounded-2xl w-18">
                    <h1>Check In</h1>
                </button>
                </div>
            </div>
        </div>
    )
}