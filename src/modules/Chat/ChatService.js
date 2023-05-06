import UserRepository from "../User/UserRepository";
import ChatRepository from "./ChatRepository";

class ChatService {
  constructor() {
    this.chatRepository = new ChatRepository();
    this.userRepository = new UserRepository();
  }

  async create(firstUserId, secondUserId) {
    const firstUser = await this.userRepository.findById(firstUserId);
    const secondUser = await this.userRepository.findById(secondUserId);

    if (!firstUser || !secondUser) {
      return {
        error: 'User not found',
      }
    }
    return await this.chatRepository.create(firstUserId, secondUserId);
  }

  async findById(id) {
    return await this.chatRepository.findById(id);
  }

  async findByUsers(firstUserId, secondUserId) {
    return await this.chatRepository.findByUsers(firstUserId, secondUserId);
  }
}

export default ChatService;