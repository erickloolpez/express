const boom = require('@hapi/boom')
const {models} = require('./../../libs/sequelize')

class CarritoService{
  constructor(){}

  async create(data){
    const newCarrito = await models.Carrito.create(data)
    return newCarrito
  }

  async find(){
    const rta = await models.Carrito.findAll({include:['usuario']})
    return rta
  }

  async findOne(id){
        const idAsNumber = parseInt(id,10)
    const carrito = await models.Carrito.findByPk(idAsNumber)
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
