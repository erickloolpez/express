const boom = require('@hapi/boom')
const {models} = require('./../../libs/sequelize')

class CarritoProductoService{
  constructor(){}

  async create(data){
    const newCarritoProducto = await models.CarritoProducto.create(data)
    return newCarritoProducto
  }

  async find(){
    const rta = await models.CarritoProducto.findAll()
    return rta
  }

  async findOne(id){
        const idAsNumber = parseInt(id,10)
    const carritoProducto = await models.CarritoProducto.findByPk(idAsNumber)
    if(!carritoProducto){
      throw boom.notFound('CarritoProducto not found')
    }
    return carritoProducto
  }

  async update(id, changes){
    const carritoProducto = await this.findOne(id)
    const rta = await carritoProducto.update(changes)
    return rta
  }

  async delete(id){
    const carritoProducto = await this.findOne(id)
    const rta = await carritoProducto.destroy()
    return {id}
  }

}

module.exports = CarritoProductoService
