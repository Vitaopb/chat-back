import db from '../src/configs/database.config.js';
import { DataTypes, Model } from 'sequelize';

class Message extends Model {
  static associate(models) {
    this.belongsTo(models.Chat, {
      foreignKey: 'chatId',
      as: 'chat',
    });

    this.belongsTo(models.User, {
      foreignKey: 'senderId',
      as: 'sender',
    }); // senderId
  }
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chats',
        key: 'id',
      }
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM('text', 'image', 'video', 'audio', 'file'),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: 'Message',
    tableName: 'messages',
    timestamps: true,
  }
)

export default Message;