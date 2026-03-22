import express ,{Router} from "express";
import { addRoom, deleteRoom, getRoom, getRooms } from "../controllers/roomsController.ts";

const roomsRouter:Router = express.Router();

roomsRouter.get("/rooms",getRooms);
roomsRouter.get("/rooms/:id",getRoom);

roomsRouter.post("/rooms/create",addRoom);

roomsRouter.delete("/rooms/delete",deleteRoom);

export default roomsRouter;