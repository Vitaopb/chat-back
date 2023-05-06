import User from "../../../models/User";

class UserRepository {
  async create(name, email, password) {
    return await User.create({ name, email, password });
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async findById(id) {
    return await User.findByPk(id);
  }
}

export default UserRepository;