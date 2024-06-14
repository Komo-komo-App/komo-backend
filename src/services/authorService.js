const { authorRepository, bookRepository } = require("../repositories");

const authorService = {
  publishBook: async (authorId, bookData) => {
    const author = await authorRepository.getAuthorById(authorId);
    if (!author) {
      throw new Error("Author not found");
    }
    return bookRepository.createBook({ ...bookData, AuthorId: authorId });
  },
  viewRevenue: async (authorId) => {
    const author = await authorRepository.getAuthorById(authorId);
    if (!author) {
      throw new Error("Author not found");
    }
    return author.revenue;
  },
};

module.exports = authorService;
