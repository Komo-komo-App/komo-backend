const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

export const Chapter = sequelize.define("Chapter", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
});
