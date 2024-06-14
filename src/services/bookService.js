const { bookRepository } = require("../repositories");

const bookService = {
  createBook: async (data) => {
    return bookRepository.createBook(data);
  },
  getBookById: async (id) => {
    return bookRepository.getBookById(id);
  },
  updateBook: async (id, data) => {
    return bookRepository.updateBook(id, data);
  },
  deleteBook: async (id) => {
    return bookRepository.deleteBook(id);
  },
};

module.exports = bookService;
