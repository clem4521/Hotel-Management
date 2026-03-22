import express from "express";
import roomsRouter from "./routers/roomsRouter.js";
import dotenv from "dotenv";
dotenv.config({quiet:true});

const port = process.env.PORT
const server = express();

/*-----Endpoint-----*/
server.use("/api",roomsRouter);

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});