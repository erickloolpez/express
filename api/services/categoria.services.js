const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize')

class CategoriaService {
  constructor() { }

  async create(data) {
    const newCategory = await models.Categoria.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Categoria.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Categoria.findByPk(id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    const rta = await category.destroy();
    return { id };
  }
}

module.exports = CategoriaService;
