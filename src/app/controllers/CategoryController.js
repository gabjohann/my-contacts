const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll()

    response.json(categories)
  }
}

module.exports = new CategoryController()
