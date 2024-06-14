const Author = require("../entities/author");

const authorRepository = {
  createAuthor: async (data) => {
    return Author.create(data);
  },
  getAuthorById: async (id) => {
    return Author.findByPk(id);
  },
};

module.exports = authorRepository;
