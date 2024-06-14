const { Author } = require("./Author");
const { Book } = require("./Book");
const { Chapter } = require("./Chapter");
const { Reader } = require("./Reader");
const { PurchasedBook } = require("./PurchasedBook");
const { PurchasedChapter } = require("./PurchasedChapter");

Author.hasMany(Book);
Book.belongsTo(Author);
Book.hasMany(Chapter);
Chapter.belongsTo(Book);

Reader.belongsToMany(Book, { through: PurchasedBook });
Book.belongsToMany(Reader, { through: PurchasedBook });

Reader.belongsToMany(Chapter, { through: PurchasedChapter });
Chapter.belongsToMany(Reader, { through: PurchasedChapter });

module.exports = {
  Author,
  Book,
  Reader,
  Chapter,
  PurchasedBook,
  PurchasedChapter,
};
