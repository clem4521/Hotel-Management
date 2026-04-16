import AddBtn from "../buttons/AddBtn.tsx";
export default function MoreRoomsForms(){
    return(
        <div className="flex flex-col gap-5 bg-gray-600 w-100 h-60  text-white rounded-2xl relative">
            <div className="relative top-3 flex flex-col h-50">
                <span className="text-center w-100">Add Room</span>
                <div className="flex flex-row gap-5 ml-15 mt-2">
                    <div className=" flex flex-col">
                        <label>Add Floor Number</label>
                        <input placeholder="Floor Number" className="w-30 bg-gray-500 rounded-2xl pl-3"/>
                    </div>
                    <div className=" flex flex-col">
                        <label>Add Room Number</label>
                        <input placeholder="Room Number" className="w-30 bg-gray-500 rounded-2xl pl-3"/>
                    </div>
                </div>
                <div className="flex flex-row gap-8 ml-15 mt-2">
                    <div className=" flex flex-col">
                        <label>Add Room Type</label>
                        <input placeholder="Room Type" className="w-30 bg-gray-500 rounded-2xl pl-3"/>
                    </div>
                    <div className=" flex flex-col">
                        <label>Add Status</label>
                        <input placeholder="Status" className="w-30 bg-gray-500 rounded-2xl pl-3"/>
                    </div>
                </div>
                <div className="absolute bottom-0 left-[40%]">
                    <AddBtn/>
                </div>
            </div>
        </div>
    )
}