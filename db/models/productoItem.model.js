const {Model, DataTypes, Sequelize} = require('sequelize')

const {PRODUCTO_TABLE} = require('./producto.model')
const PRODUCTO_ITEM_TABLE = 'productoItem'

const productoItemSchema = {
  id : {
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productoId: {
    field: 'producto_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTO_TABLE,
      key: 'id'
    }
  },
  codigo: {
    allowNull: false,
    type: DataTypes.STRING(15),
    unique: true
  },
  foto: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  precio: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
}

class ProductoItem extends Model{
  static associate(models){
    this.belongsTo(models.Producto, {
      as: 'producto'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCTO_ITEM_TABLE,
      modelName: 'ProductoItem',
      timestpams: false
    }
  }
}

module.exports = {ProductoItem, productoItemSchema, PRODUCTO_ITEM_TABLE}
