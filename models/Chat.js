import db from '../src/configs/database.config.js';
import { DataTypes, Model } from 'sequelize';

class Chat extends Model {
  static associate(models) {
    this.hasMany(models.Message, {
      foreignKey: 'chatId',
      as: 'messages',
    });

    this.belongsTo(models.User, {
      foreignKey: 'firstUserId',
      as: 'firstUser',
    }); // firstUserId

    this.belongsTo(models.User, {
      foreignKey: 'secondUserId',
      as: 'secondUser',
    }); // secondUserId
  }
}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    firstUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    secondUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: 'Chat',
    tableName: 'chats',
    timestamps: true,
  }
)

export default Chat;