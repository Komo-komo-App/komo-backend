const { readerRepository, bookRepository } = require("../repositories");

const readerService = {
  buyBook: async (readerId, bookId) => {
    const reader = await readerRepository.getReaderById(readerId);
    if (!reader) {
      throw new Error("Reader not found");
    }
    const book = await bookRepository.getBookById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
  },
  viewCoins: async (readerId) => {
    const reader = await readerRepository.getReaderById(readerId);
    if (!reader) {
      throw new Error("Reader not found");
    }
    return reader.coins;
  },
};

module.exports = readerService;
