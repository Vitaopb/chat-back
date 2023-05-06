require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });
import Sequelize from 'sequelize';

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    define: {
      timestamps: true,
      freezeTableName: true,
    },
  }
)

export default db;