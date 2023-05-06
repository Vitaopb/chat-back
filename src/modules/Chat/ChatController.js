import ChatService from "./ChatService";

const chatService = new ChatService();

class ChatController {
  async create(req, res) {
    const { firstUserId, secondUserId } = req.body;
    const chat = await chatService.create(firstUserId, secondUserId);
    res.json(chat);
  }

  async findById(req, res) {
    const { id } = req.params;
    const chat = await chatService.findById(id);
    res.json(chat);
  }

  async findByUsers(req, res) {
    const { firstUserId, secondUserId } = req.params;
    const chat = await chatService.findByUsers(firstUserId, secondUserId);
    res.json(chat);
  }
}

export default ChatController;