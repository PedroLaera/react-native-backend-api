const dataService = require("../../data/category.json");
const model = require("../model/category");

class CategoryController {
  async listAllCategory(req, res) {
    try {
      const category = await dataService.APICategory; //Prof alterei nessa parte do código chamando o nome da API que eu criei
      res.status(200).json({
        message: "Categorias listadas com sucesso",
        data: category,
        success: true,
      });
    } catch (error) {
      console.error("Error reading category data:", error);
      res.status(500).json({ message: "Error reading category data" });
    }
  }
}

module.exports = new CategoryController();
