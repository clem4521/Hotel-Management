import express ,{Router} from "express";
import { addRoom, deleteRoom, getRoom, getRooms } from "../controllers/roomsController.ts";

const roomsRouter:Router = express.Router({ mergeParams: true });

roomsRouter.get("/rooms/:id",getRoom);
roomsRouter.get("/rooms",getRooms);

roomsRouter.post("/rooms/create",addRoom);

roomsRouter.delete("/rooms/delete",deleteRoom);

export default roomsRouter;