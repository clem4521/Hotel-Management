import type { Request,Response } from "express";
import {mysqlConfig as db }from "../config/mysqlConfig.ts";

export async function getRooms(req:Request,res:Response){
    const getRoomsQuery = `SELECT * FROM rooms`
    try{
        const [results] = await db.query(getRoomsQuery);
        res.status(200).json({message:"successs",results});
    }catch(error:any){
        if(error.code == 'ER_NO_SUCH_TABLE'){
            const roomTableQuery = `
                CREATE TABLE IF NOT EXISTS rooms(
                    id INTEGER PRIMARY KEY AUTO_INCREMENT ,
                    floor INTEGER(10) NOT NULL,
                    room_number INTEGER(20) NOT NULL,
                    room_type VARCHAR(50) NOT NULL,
                    status VARCHAR(50) NOT NULL
                )
            `;
			const results = await db.query(roomTableQuery);
	 		console.log(results);
			return res.json(results);
		}
    }
}
export async function getRoom(req:Request,res:Response){
    const getRoomQuery = `SELECT * FROM rooms WHERE id = ?`;
    const {id} = req.body;

    try{
        const [results] = await db.query(getRoomQuery,[id]);
        res.status(200).json({message:"successs",results});
    }catch(error){
        console.log(error);
    }
}

export async function addRoom(req:Request,res:Response) {
    const addRoomQuery = `
        INSERT 
        INTO 
        rooms(floor,room_number,room_type,status)
        VALUES(?,?,?,?)
    `;
    const {floor,room_number,room_type,status} = req.body;
    try {
        const isRoomExists = await roomCheck(floor,room_number);
        if(!isRoomExists){
            const [results] = await db.query(addRoomQuery,[floor,room_number,room_type,status]);
            res.status(200).json({message:"success"});
        }else{
            res.json({message:"room has already created"});
        }
    } catch (error) {
        console.log(error);
    }
}

/** Check if room has already been created
 ** return true if there's a room
 */
async function roomCheck(floor:number,room_number:number):Promise<boolean>{
    const getRoomQuery = `SELECT * FROM rooms WHERE floor = ? AND room_number = ?`;
    try {
        const [results] = await db.query(getRoomQuery,[floor,room_number]);
         //@ts-expect-error
        const floorNum = results[0].floor;
        if(floorNum == floorNum){
            console.log(results);
            return true;
        }else{
            false;
        }
    } catch (error) {
        console.log(error)
    }

    return false;
}