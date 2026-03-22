import express ,{Router} from "express";
import { addRoom, getRoom, getRooms } from "../controllers/roomsController.ts";

const roomsRouter:Router = express.Router();

roomsRouter.get("/rooms",getRooms);
roomsRouter.get("/rooms/:id",getRoom);

roomsRouter.post("/rooms/create",addRoom)

export default roomsRouter;