import { Request,Response } from "express";
import {mysqlConfig as db }from "../config/mysqlConfig.ts";
import { Query, QueryResult } from "mysql2";

export async function getRooms(req:Request,res:Response){
    const getRoomsQuery = `SELECT * FROM rooms`
    try{
        const results:Query = await db.query(getRoomsQuery);
        res.status(200).json({message:"successs",results});
    }catch(error){
        console.log(error);
    }
}
export async function getRoom(req:Request,res:Response){
    const getRoomQuery = `SELECT * FROM rooms WHERE id = ?`;
    const {id} = req.body;

    try{
        const results:Query = await db.query(getRoomQuery,[id]);
        res.status(200).json({message:"successs",results});
    }catch(error){
        console.log(error);
    }
}