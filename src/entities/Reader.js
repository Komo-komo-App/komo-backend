const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

export const Reader = sequelize.define("Reader", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  coins: { type: DataTypes.FLOAT, defaultValue: 0 },
});
