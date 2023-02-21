import { orderSchema } from "../models/orders.model";
import {
	knexDelete,
	knexExists,
	knexInsert,
	knexSelectAll,
	knexUpdate,
} from "../utils";

export async function getAllOrders(req, res) {
	let data = knexSelectAll("orders");

	return res.json(data);
}

export async function addOrder(req, res) {
	let reqBody = req.body;

	// validate the data and if failed then return error
	const validation = orderSchema.validate(reqBody);
	if (validation.error)
		return res.status(400).json({ message: "Invalid Order Data" });

	// check if entered user exists if not then return error
	const userExists = knexExists("users", reqBody.user_id);
	if (!userExists)
		return res.status(400).json({ message: "Order's user does not exist" });

	// check if entered item exists if not then return error
	const itemExists = knexExists("items", reqBody.item_id);
	if (!itemExists)
		return res.status(400).json({ message: "Order's item does not exist" });

	// insert the data
	await knexInsert("orders", reqBody);

	// send back the data
	res.json({ message: "Order inserted", data: reqBody });
}

export async function updateOrder(req, res) {
	let reqBody = req.body;
	let reqId = req.params.orderId;

	// validate the data and if failed then return error
	const validation = orderSchema.validate(reqBody);
	if (validation.error)
		return res.status(400).json({ message: "Invalid Order Data" });

	// try to find the order using id and return error if not found
	const idExists = await knexExists("orders", reqId);
	if (!idExists) return res.status(404).json({ message: "Order not found" });

	// update the data
	await knexUpdate("orders", reqId, reqBody);

	// send back the data
	res.json({ message: "Item updated", data: reqBody });
}

export async function deleteOrder(req, res) {
	let reqId = req.params.orderId;

	// try to find the order using id and return error if not found
	const idExists = await knexExists("orders", reqId);
	if (!idExists) return res.status(404).json({ message: "Order not found" });

	// delete the data
	await knexDelete("orders", reqId);

	// send back the data
	res.json({ message: "Order deleted" });
}
