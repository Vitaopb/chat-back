import Message from "../../../models/Message";

class MessageRepository {
  async create(chatId, senderId, content, type) {
    return await Message.create({ chatId, senderId, content, type });
  }

  async findById(id) {
    return await Message.findByPk(id);
  }

  async findByChatId(chatId) {
    return await Message.findAll({
      where: {
        chatId,
      },
    });
  }

  async findBySenderId(senderId) {
    return await Message.findAll({
      where: {
        senderId,
      },
    });
  }
}

export default MessageRepository;