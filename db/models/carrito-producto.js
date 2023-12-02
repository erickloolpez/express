const {Model, DataTypes, Sequelize} = require('sequelize')

const {CARRITO_TABLE} = require('./carrito.model')
const {PRODUCTO_ITEM_TABLE} = require('./productoItem.model')

const CARRITO_PRODUCTO_TABLE = 'carrito_producto'

const carritoProductoSchema = {
  id : {
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  carritoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'carrito_id',
    unique: true,
    references:{
      model: CARRITO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'producto_id',
    unique: true,
    references:{
      model: PRODUCTO_ITEM_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class CarritoProducto extends Model{
  static associate(models){
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CARRITO_PRODUCTO_TABLE,
      modelName: 'CarritoProducto',
      timestpams: false
    }
  }
}

module.exports = {CarritoProducto, carritoProductoSchema, CARRITO_PRODUCTO_TABLE}


