const {Model, DataTypes, Sequelize} = require('sequelize')
const {USUARIO_TABLE} = require('./usario.model')

const CARRITO_TABLE ='carrito'

const carritoSchema = {
  id : {
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  usarioId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'usuario_id',
    unique: true,
    references:{
      model: USUARIO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Carrito extends Model{
  static associate(models){
    this.belongsTo(models.Usuario , {as:'usuario'})
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CARRITO_TABLE,
      modelName: 'Carrito',
      timestpams: false
    }
  }
}

module.exports = {Carrito, carritoSchema, CARRITO_TABLE}
