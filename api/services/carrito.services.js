const boom = require('@hapi/boom')
const {models} = require('./../../libs/sequelize')

class CarritoService{
  constructor(){}

  async create(data){
    const newCarrito = await models.Carrito.create(data)
    return newCarrito
  }

  async find(){
    const rta = await models.Carrito.findAll({as:'usuario'})
    return rta
  }

  async findOne(id){
    const carrito = await models.Carrito.findByPk(id)
    if(!carrito){
      throw boom.notFound('Carrito not found')
    }
    return carrito
  }

  async update(id, changes){
    const carrito = await this.findOne(id)
    const rta = await carrito.update(changes)
    return rta
  }

  async delete(id){
    const carrito = await this.findOne(id)
    const rta = await carrito.destroy()
    return {id}
  }

}

module.exports = CarritoService
