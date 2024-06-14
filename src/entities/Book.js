const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

export const Book = sequelize.define("Book", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true },
  isPublished: { type: DataTypes.BOOLEAN, defaultValue: true },
});
