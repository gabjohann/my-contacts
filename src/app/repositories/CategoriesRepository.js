const db = require('../../database')

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name')

    return rows
  }
}

module.exports = new CategoriesRepository()
