const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

export const Author = sequelize.define("Author", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  revenue: { type: DataTypes.FLOAT, defaultValue: 0 },
});
