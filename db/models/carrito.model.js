const {Model, DataTypes, Sequelize} = require('sequelize')
const {USUARIO_TABLE} = require('./usario.model')

const CARRITO_TABLE ='carrito'

const carritoSchema = {
  id : {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  usuarioId: {
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
  },
    createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Carrito extends Model{
  static associate(models){
    this.belongsTo(models.Usuario , {as:'usuario'})
    this.belongsToMany(models.Producto, {
      as: 'items',
      through: models.CarritoProducto,
      foreignKey: 'carritoId',
      otherKey: 'productoItemId'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CARRITO_TABLE,
      modelName: 'Carrito',
      timestamps: false
    }
  }
}

module.exports = {Carrito, carritoSchema, CARRITO_TABLE}
