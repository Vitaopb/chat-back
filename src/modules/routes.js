import { Router } from 'express';
import { userRouter } from './User/routes';
import { chatRouter } from './Chat/routes';
import { messageRouter } from './Message/routes';

const routes = [
  userRouter.use('/user', userRouter),
  chatRouter.use('/chat', chatRouter),
  messageRouter.use('/message', messageRouter),
]

export default routes;