import { Router } from 'express';
import MessageController from './MessageController';

const messageRouter = Router();
const messageController = new MessageController();

messageRouter.post('/create', messageController.create);
messageRouter.get('/get-message:id', messageController.findById);
messageRouter.get('/get-by-chat/:chatId', messageController.findByChatId);
messageRouter.get('/get-by-sender/:senderId', messageController.findBySenderId);

export { messageRouter };