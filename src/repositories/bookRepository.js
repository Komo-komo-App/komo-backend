const Book = require("../entities/book");

const bookRepository = {
  createBook: async (data) => {
    return Book.create(data);
  },
  getBookById: async (id) => {
    return Book.findByPk(id);
  },
};

module.exports = bookRepository;
