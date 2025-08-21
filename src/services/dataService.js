const fs = require("fs").promises; // file system
const path = require("path");

class DataService {
  constructor() {
    this.dataPath = path.join(__dirname, "../../data/category.json");
  }

  /**
    @returns {Promise<Array>}
   */
  async lerCategory() {
    try {
      const arquivoPayload = await fs.readFile(this.dataPath, "utf-8");
      return JSON.parse(arquivoPayload);
    } catch (error) {
      console.log("Ocorreu um erro ao ler o arquivo", error);
      return [];
    }
  }

  /**
    @param {Array} category
    @returns {Promise<void>}
   */
  async escreveCategory(category) {
    try {
      const arquivoPayload = JSON.stringify(category, null, 2);
      await fs.writeFile(this.dataPath, arquivoPayload, "utf-8");
    } catch (error) {
      console.log("Ocorreu um erro ao escrever o arquivo", error);
    }
  }
}

module.exports = DataService;
