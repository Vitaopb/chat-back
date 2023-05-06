import { Router } from "express";
import UserController from "./UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/create", userController.create);
userRouter.get("/get-by-email", userController.findByEmail);
userRouter.get("/:id", userController.findById);

userRouter.post("/login", userController.login);

export { userRouter }
