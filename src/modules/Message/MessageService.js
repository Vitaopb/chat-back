import ChatRepository from "../Chat/ChatRepository";
import MessageRepository from "./MessageRepository";
import UserRepository from "../User/UserRepository";
// import { ws } from "../../websocket";

class MessageService {
  constructor() {
    this.messageRepository = new MessageRepository();
    this.chatRepository = new ChatRepository();
    this.userRepository = new UserRepository();
  }

  async create(chatId, senderId, content, type) {
    try {
      const types = ['text', 'image', 'video', 'audio', 'file'];
      const chat = await this.chatRepository.findById(chatId);
      const sender = await this.userRepository.findById(senderId);

      if (!chat || !sender || !types.includes(type)) {
        const errors = [];
        if (!chat) errors.push('Chat not found');
        if (!sender) errors.push('Sender not found');
        if (!types.includes(type)) errors.push('Invalid type');
        return {
          error: errors.join(', '),
        };
      }

      await this.messageRepository.create(chatId, senderId, content, type);
      // ws.emit('message', { chatId, senderId, content, type });

    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }

  async findById(id) {
    try {
      return await this.messageRepository.findById(id);
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }

  async findByChatId(chatId) {
    try {
      const chat = await this.chatRepository.findById(chatId);
      if (!chat) {
        return {
          error: 'Chat not found',
        };
      }
      return await this.messageRepository.findByChatId(chatId);
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }

  async findBySenderId(senderId) {
    try {
      const sender = await this.userRepository.findById(senderId);
      if (!sender) {
        return {
          error: 'Sender not found',
        };
      }
      return await this.messageRepository.findBySenderId(senderId);
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }
}

export default MessageService;