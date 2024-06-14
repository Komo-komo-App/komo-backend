const { chapterRepository } = require("../repositories");

const chapterService = {
  createChapter: async (data) => {
    return chapterRepository.createChapter(data);
  },
  getChapterById: async (id) => {
    return chapterRepository.getChapterById(id);
  },
  updateChapter: async (id, data) => {
    return chapterRepository.updateChapter(id, data);
  },
  deleteChapter: async (id) => {
    return chapterRepository.deleteChapter(id);
  },
};

module.exports = chapterService;
