import { Router } from "express";
import {
	addOrder,
	deleteOrder,
	getAllOrders,
	updateOrder,
} from "../controllers/orders.controller";

export const ordersRouter = Router();

ordersRouter.get("/", getAllOrders);
ordersRouter.post("/", addOrder);
ordersRouter.patch("/:orderId", updateOrder);
ordersRouter.delete("/:orderId", deleteOrder);
