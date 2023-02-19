import { Router } from "express";
import {
	addItem,
	deleteItem,
	getAllItems,
	updateItem,
} from "../controllers/items.controller";

export const itemsRouter = Router();

itemsRouter.get("/", getAllItems);
itemsRouter.post("/", addItem);
itemsRouter.patch("/:itemId", updateItem);
itemsRouter.delete("/:itemId", deleteItem);
