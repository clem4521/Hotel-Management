import express ,{Router} from "express";
import { getRoom, getRooms } from "../controllers/roomsController.ts";

const roomsRouter:Router = express.Router();

roomsRouter.get("/rooms",getRooms);
roomsRouter.get("/rooms/:id",getRoom);

export default roomsRouter;