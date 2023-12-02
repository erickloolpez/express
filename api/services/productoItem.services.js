const boom = require('@hapi/boom')
const {models} = require('./../../libs/sequelize')

class ProductoItemService{
  constructor(){}

  async create(data){
    const newProductoItem = await models.ProductoItem.create(data)
    return newProductoItem
  }

  async find(){
    const rta = await models.ProductoItem.findAll()
    return rta
  }

  async findOne(id){
    const productoItem = await models.ProductoItem.findByPk(id)
    if(!productoItem){
      throw boom.notFound('ProductoItem not found')
    }
    return productoItem
  }

  async update(id, changes){
    const productoItem = await this.findOne(id)
    const rta = await productoItem.update(changes)
    return rta
  }

  async delete(id){
    const productoItem = await this.findOne(id)
    const rta = await productoItem.destroy()
    return {id}
  }

}

module.exports = ProductoItemService
