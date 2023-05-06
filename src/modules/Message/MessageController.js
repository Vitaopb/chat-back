import MessageService from "./MessageService";

const messageService = new MessageService();

class MessageController {
  async create(req, res) {
    const { chatId, senderId, content, type } = req.body;
    const message = await messageService.create(chatId, senderId, content, type);
    res.json(message);
  }

  async findById(req, res) {
    const { id } = req.params;
    const message = await messageService.findById(id);
    res.json(message);
  }

  async findByChatId(req, res) {
    const { chatId } = req.params;
    const messages = await messageService.findByChatId(chatId);
    res.json(messages);
  }

  async findBySenderId(req, res) {
    const { senderId } = req.params;
    const messages = await messageService.findBySenderId(senderId);
    res.json(messages);
  }
}

export default MessageController;