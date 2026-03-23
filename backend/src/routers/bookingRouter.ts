import express ,{Router} from "express";
import { check_in, check_out, getBookings } from "../controllers/bookingController.ts";

const bookingRouter:Router = express.Router();

bookingRouter.get("/bookings",getBookings);

bookingRouter.post("/check-in",check_in);

bookingRouter.get("/check-out",check_out);

export default bookingRouter;