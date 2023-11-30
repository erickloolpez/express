const boom = require('@hapi/boom')
const {models} = require('./../../libs/sequelize')

class UsuarioService{
  constructor(){}

  async create(data){
    const newUser = await models.Usuario.create(data)
    return newUser
  }

  async find(){
    const rta = await models.Usuario.findAll({
      include: ['carrito']
    })
  }

  async findOne(id){
    const user = await models.Usuario.findByPk(id)

    if(!user){
      throw boom.notFound('User not found')
    }

    return user
  }

  async update(id, changes){
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete(id){
    const user = await this.findOne(id)
    const rta = await user.destroy()
    return {id}
  }
}

module.exports = UsuarioService
