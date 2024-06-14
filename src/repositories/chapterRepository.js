const Chapter = require("../entities/chapter");

const chapterRepository = {
  createChapter: async (data) => {
    return Chapter.create(data);
  },
  getChapterById: async (id) => {
    return Chapter.findByPk(id);
  },
  updateChapter: async (id, data) => {
    const chapter = await Chapter.findByPk(id);
    if (chapter) {
      return chapter.update(data);
    }
    throw new Error("Chapter not found");
  },
  deleteChapter: async (id) => {
    const chapter = await Chapter.findByPk(id);
    if (chapter) {
      return chapter.destroy();
    }
    throw new Error("Chapter not found");
  },
};

module.exports = chapterRepository;
