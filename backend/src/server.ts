/* ---Dependencies-- */
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

/* ---Routers--- */
import roomsRouter from "./routers/roomsRouter.ts";
dotenv.config({quiet:true});

const port = process.env.PORT
const server = express();

/* ---Middleware--- */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

/*-----Endpoint-----*/
server.use("/api",roomsRouter);

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});