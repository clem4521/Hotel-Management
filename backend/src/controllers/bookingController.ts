import type { Request,Response } from "express";
import { mysqlConfig as db } from "../config/mysqlConfig.ts";

export async function getBookings(req:Request,res:Response){
    const getRoomsQuery = `SELECT * FROM bookings`;
    const createBookingtableQuery = `
        CREATE TABLE IF NOT EXISTS 
        bookings(
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            room_id INTEGER(50),
            customer_first_name VARCHAR(50),
            check_in_time DATETIME DEFAULT CURRENT_TIMESTAMP,
            check_out_time DATETIME
        )
    `;
    try{
        const [results] = await db.query(getRoomsQuery);
        res.status(200).json({message:"successs",results});
    }catch(error:any){
        if(error.code == 'ER_NO_SUCH_TABLE'){
			const results = await db.query(createBookingtableQuery);
	 		console.log(results);
			return res.json(results);
		}
    }
}

export async function check_in(req:Request,res:Response){
    const {floor,room_number,first_name} = req.body;
    const getRoomQuery = `SELECT id,status FROM rooms WHERE floor = ? AND room_number = ?`;
    
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
            return res.json({message:"The room is currently being occupied"});
        }
    } catch (error:any) {
        console.log(error);
    }
}

export async function check_out(req:Request,res:Response){
    const {id,room_id} = req.body;
    const checkoutQuery = `UPDATE bookings SET check_out_time = NOW() WHERE id = ?`;

    try {
        const [results] = await db.query(checkoutQuery,[id]);
        await changingRoomStatus("Unoccupied",room_id);
        res.json({message:"successfully check out"});
    } catch (error) {
        console.log(error);
    }

}

async function creatingBooking(room_id:number,first_name:string) {
    const createBooking = `INSERT INTO bookings(room_id,customer_first_name) VALUES (?,?)`;
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
