const boom = require('@hapi/boom')
const { models } = require('./../../libs/sequelize')

class ProductoService {
  constructor() { }

  async create(data) {
    const newProducto = await models.Producto.create(data)
    return newProducto
  }

  async find(query) {
    const options = {
    }
    const { limit, offset } = query
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }
    const rta = await models.Producto.findAll(options)
    return rta
  }

  async findOne(id) {
    const idAsNumber = parseInt(id, 10)
    const producto = await models.Producto.findByPk(idAsNumber,{
      include: ['categoria', 'productoItems']
    })
    if (!producto) {
      throw boom.notFound('Producto not found')
    }
    return producto
  }

  async update(id, changes) {
    const producto = await this.findOne(id)
    const rta = await producto.update(changes)
    return rta
  }

  async delete(id) {
    const producto = await this.findOne(id)
    const rta = await producto.destroy()
    return { id }
  }

}

module.exports = ProductoService
