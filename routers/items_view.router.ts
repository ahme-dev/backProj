import { Router } from "express";

export const itemsViewRouter = Router();

itemsViewRouter.get("/", getAllItemsView);

async function getAllItemsView(req, res) {
	res.send("Get all items view");
}
