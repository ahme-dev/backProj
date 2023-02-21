import { itemSchema } from "../models/items.model";
import {
	knexDelete,
	knexExists,
	knexInsert,
	knexSelectAll,
	knexUpdate,
} from "../models/utils.model";

export async function getAllItems(req, res) {
	let data = knexSelectAll("items");

	return res.json(data);
}

export async function addItem(req, res) {
	let reqBody = req.body;

	// validate the data
	const validation = itemSchema.validate(reqBody);

	// if not valid then return error
	if (validation.error)
		return res.status(400).json({ message: "Invalid Item Data" });

	// check if entered brand exists
	const brandExists = knexExists("brands", reqBody.brand_id);

	// if the brand doesn't exist then return error
	if (!brandExists)
		return res.status(400).json({ message: "Item's brand does not exist" });

	// insert the data
	await knexInsert("items", reqBody);

	// send back the data
	res.json({ message: "Item inserted", data: reqBody });
}

export async function updateItem(req, res) {
	let reqBody = req.body;
	let reqId = req.params.itemId;

	// validate the data
	const validation = itemSchema.validate(reqBody);

	// if not valid then return error
	if (validation.error)
		return res.status(400).json({ message: "Invalid Item Data" });

	// update the data
	await knexUpdate("items", reqId, reqBody);

	// send back the data
	res.json({ message: "Item updated", data: reqBody });
}

export async function deleteItem(req, res) {
	let reqId = req.params.itemId;

	// delete the data
	await knexDelete("items", reqId);

	// send back the data
	res.json({ message: "Item deleted" });
}
