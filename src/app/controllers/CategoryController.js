const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll()

    response.json(categories)
  }

  async show(request, response) {
    const { id } = request.params

    const category = await CategoriesRepository.findById(id)

    if (!category) {
      return response.status(404).json({ error: 'Category not found' })
    }

    response.json(category)
  }
}

module.exports = new CategoryController()
