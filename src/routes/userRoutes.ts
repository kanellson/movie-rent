import { Router } from "express";
import { CreateUserController } from "../users/usercases/CreateUserController";

const createUserController = new CreateUserController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
