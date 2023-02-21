import { Router } from "express";
import {
	insertUser,
	deleteUser,
	getAllUsers,
	updateUser,
} from "../controllers/users.controller";

export const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.post("/", insertUser);
usersRouter.patch("/:userId", updateUser);
usersRouter.delete("/:userId", deleteUser);
