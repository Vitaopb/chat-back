import Chat from "../../../models/Chat";

class ChatRepository {
  async create(firstUserId, secondUserId) {
    return await Chat.create({ firstUserId, secondUserId });
  }

  async findById(id) {
    return await Chat.findByPk(id);
  }

  async findByUsers(firstUserId, secondUserId) {
    return await Chat.findOne({
      where: {
        firstUserId,
        secondUserId,
      },
    });
  }
}

export default ChatRepository;