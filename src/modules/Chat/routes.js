import { Router } from "express";
import ChatController from "./ChatController";

const chatRouter = Router();
const chatController = new ChatController();

chatRouter.post("/create", chatController.create);
chatRouter.get("/:id", chatController.findById);
chatRouter.get("/get-by-users/:firstUserId/:secondUserId", chatController.findByUsers);

export { chatRouter }