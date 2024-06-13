const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Database Connected");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
