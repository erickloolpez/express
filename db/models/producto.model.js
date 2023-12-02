const {Model, DataTypes, Sequelize} = require('sequelize')

const {CATEGORIA_TABLE} = require('./categoria.model')
const PRODUCTO_TABLE = 'producto'

const productoSchema = {
  id : {
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  categoriaId: {
    field: 'categoria_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORIA_TABLE,
      key: 'id'
    }
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(50),
    unique: true
  },
  descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  foto: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class Producto extends Model{
  static associate(models){
    this.belongsTo(models.Categoria, {
      as: 'categoria'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: 'Producto',
      timestamps: false
    }
  }
}

module.exports = {Producto, productoSchema, PRODUCTO_TABLE}
