import { Router } from "express";

export const ordersViewRouter = Router();

ordersViewRouter.get("/", getAllOrdersView);

async function getAllOrdersView(req, res) {
	res.send("Get all orders view");
}
