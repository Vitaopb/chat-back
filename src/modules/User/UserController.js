import UserService from "./UserService";
const userService = new UserService();

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;
    const user = await userService.create(name, email, password);
    return res.json(user);
  }

  async findByEmail(req, res) {
    const { email } = req.query;
    const user = await userService.findByEmail(email);
    return res.json(user);
  }

  async findById(req, res) {
    const { id } = req.params;
    const user = await userService.findById(id);
    return res.json(user);
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    return res.json(user);
  }
}

export default UserController;