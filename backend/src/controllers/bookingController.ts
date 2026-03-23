import type { Request,Response } from "express";
import { mysqlConfig as db } from "../config/mysqlConfig.ts";

export async function check_in(req:Request,res:Response){
    const {floor,room_number,first_name} = req.body;
    const getRoomQuery = `SELECT id,status FROM rooms WHERE floor = ? AND room_number = ?`;
    const createBookingtable = `
        CREATE TABLE IF NOT EXISTS 
        booking(
            id INTEGER PRIMARY KEY AUTO_INCREMENT
            room_id INTERGER(50)
            customer_first_name VARCHAR(50)
            check_in_time DATETIME DEFAULT CURRENT_TIMESTAMP
            check_out_time DATETIME DEFAULT
        )
    `;
    
    try {
        const [results] = await db.query(getRoomQuery,[floor,room_number]);
        console.log(results);
        //@ts-expect-error
        const status = results[0].status;
        //@ts-expect-error
        const room_id = results[0].id;

        if(status == 'Unoccupied'){
            await creatingBooking(room_id,first_name);
            await changingRoomStatus("Occupied",room_id);
            return res.json({message:"Check-in successfully"});
        }else if(status == 'Occupied'){
            return res.json({message:"The room is currently occupied"});
        }
    } catch (error:any) {
        if(error.code == 'ER_NO_SUCH_TABLE'){
			const results = await db.query(createBookingtable);
	 		console.log(results);
			return res.json(results);
		}
    }
}

async function creatingBooking(room_id:number,first_name:string) {
    const createBooking = `INSERT INTO booking(room_id,customer_first_name) VALUES (?,?)`;
    try {
        const [results] = await db.query(createBooking,[room_id,first_name]);
    } catch (error) {
        console.log(error);
    }
}
async function changingRoomStatus(status:string,id:number){
    const updateStatusQuery = `UPDATE rooms SET status = ? WHERE id = ?`;
    try {
        const [results] = await db.query(updateStatusQuery,[status,id]);
    } catch (error) {
        console.log(error);
    }
}
