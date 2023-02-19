import { Router } from "express";
import {
	addUser,
	deleteUser,
	getAllUsers,
	updateUser,
} from "../controllers/users.controller";

export const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.post("/", addUser);
usersRouter.patch("/:userId", updateUser);
usersRouter.delete("/:userID", deleteUser);
