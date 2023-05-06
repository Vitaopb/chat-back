import UserRepository from "./UserRepository";
import bcrypt from 'bcrypt';

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(name, email, password) {
    try {
      const salt = bcrypt.genSaltSync(10);
      password = bcrypt.hashSync(password, salt);
      
      return await this.userRepository.create(name, email, password);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      return await this.userRepository.findByEmail(email);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await this.userRepository.findById(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  } 

  async login(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return {
        error: 'User not found',
      }
    }

    const compare = bcrypt.compareSync(password, user.password);
    if (!compare) {
      return {
        error: 'Invalid password',
      }
    }

    return user;
  }
}

export default UserService;