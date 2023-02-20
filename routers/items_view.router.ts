import { Router } from "express";
import { knexSelectAll } from "../models/utils.model";

export const itemsViewRouter = Router();

itemsViewRouter.get("/", getAllItemsView);

async function getAllItemsView(req, res) {
	const data = await knexSelectAll("items_view");

	res.json(data);
}
