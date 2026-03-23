import express ,{Router} from "express";
import { check_in } from "../controllers/bookingController.ts";

const bookingRouter:Router = express.Router();

bookingRouter.post("/check-in",check_in);

export default bookingRouter;