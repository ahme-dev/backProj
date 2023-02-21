import { userSchema } from "../models/users.model";
import {
	knexDelete,
	knexExists,
	knexInsert,
	knexSelectAll,
	knexUpdate,
} from "../utils";

export async function getAllUsers(req, res) {
	const data = await knexSelectAll("users");

	res.json(data);
}

export async function insertUser(req, res) {
	const reqData = req.body;

	// validate the data and if failed then return error
	const validation = userSchema.validate(reqData);
	if (validation.error)
		return res.status(400).json({ message: "Invalid User Data" });

	// insert the data
	await knexInsert("users", reqData);

	res.json({ message: "User inserted", data: reqData });
}

export async function updateUser(req, res) {
	const reqData = req.body;
	const reqId = req.params.userId;

	// validate the data and if failed then return error
	const validation = userSchema.validate(reqData);
	if (validation.error)
		return res.status(400).json({ message: "Invalid User Data" });

	// try to find the user using id and return error if not found
	const idExists = await knexExists("users", reqId);
	if (!idExists) return res.status(404).json({ message: "User not found" });

	// update the data
	knexUpdate("users", reqId, reqData);

	res.json({ message: "User updated", data: reqData });
}

export async function deleteUser(req, res) {
	const reqId = req.params.userId;

	// try to find the user using id and return error if not found
	const idExists = await knexExists("users", reqId);
	if (!idExists) return res.status(404).json({ message: "User not found" });

	// delete the data
	await knexDelete("users", reqId);

	res.json({ message: "Brand deleted" });
}
