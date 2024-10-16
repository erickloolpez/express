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
  productoItemId: {
    field: 'producto_item_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
    createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
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
