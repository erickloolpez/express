const {Model, DataTypes, Sequelize} = require('sequelize')

const PRODUCTO_ITEM_TABLE = 'producto'

const productoItemSchema = {
  id : {
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  codigo: {
    allowNull: false,
    type: DataTypes.STRING(50),
    unique: true
  },
  foto: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  precio: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
}

class ProductoItem extends Model{
  static associate(models){
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
