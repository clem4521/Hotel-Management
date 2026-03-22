import type { Request,Response } from "express";
import {mysqlConfig as db }from "../config/mysqlConfig.ts";

export async function getRooms(req:Request,res:Response){
    const getRoomsQuery = `SELECT * FROM rooms`
    try{
        const [results] = await db.query(getRoomsQuery);
        res.status(200).json({message:"successs",results});
        console.log(results)
    }catch(error:any){
        if(error.code == 'ER_NO_SUCH_TABLE'){
            const roomTableQuery = `
                CREATE TABLE IF NOT EXISTS rooms(
                    id INTEGER PRIMARY KEY AUTO_INCREMENT,
                    floor INTEGER(10),
                    room_number INTEGER(20),
                    room_type VARCHAR(50),
                    bed_type VARCHAR(50),
                    bed_count INTEGER(20)
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