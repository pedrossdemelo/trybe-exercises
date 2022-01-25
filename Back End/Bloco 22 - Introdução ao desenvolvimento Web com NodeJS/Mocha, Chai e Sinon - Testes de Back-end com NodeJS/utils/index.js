const fs = require('fs').promises;
module.exports = {
  evalNum: (num) => {
    if (typeof num !== "number") return "o valor deve ser um número";
    if (num > 0) return "positivo";
    if (num < 0) return "negativo";
    return "neutro";
  },
  writeFile: async (fileName, content) => {
    try {
      await fs.writeFile(fileName, content);
      return "ok";
    } catch (err) {
      return err;
    }
  }
};
