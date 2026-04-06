export default function CheckinBtn({isHidden}:any){
    const handleClick = () => {
        isHidden(false); 
    };
    
    return(
        <button onClick={handleClick} className="border border-green-400 hover:bg-green-500 hover:text-white rounded-2xl w-18">
            <h1>Check In</h1>
        </button>
    )
}