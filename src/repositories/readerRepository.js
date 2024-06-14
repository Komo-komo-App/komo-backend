const Reader = require("../entities/reader");

const readerRepository = {
  createReader: async (data) => {
    return Reader.create(data);
  },
  getReaderById: async (id) => {
    return Reader.findByPk(id);
  },
};

module.exports = readerRepository;
