const {Model, DataTypes, Sequelize} = require('sequelize')

const {CARRITO_TABLE} = require('./carrito.model')
const {PRODUCTO_TABLE} = require('./producto.model')

const CARRITO_PRODUCTO_TABLE = 'carrito_producto'

const carritoProductoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  carritoId: {
    field: 'carrito_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CARRITO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productoId: {
    field: 'producto_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class CarritoProducto extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CARRITO_PRODUCTO_TABLE,
      modelName: 'CarritoProducto',
      timestamps: false
    }
  }
}

module.exports = {
  CarritoProducto,
  carritoProductoSchema,
  CARRITO_PRODUCTO_TABLE
}
