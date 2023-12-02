const {Model, DataTypes, Sequelize} = require('sequelize')

const CATEGORIA_TABLE = 'categoria'

const categoriaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre:{
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Categoria extends Model{
  static associate(models){
    this.hasMany(models.Producto, {
      as: 'productos',
      foreignKey: 'categoriaId'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CATEGORIA_TABLE,
      modelName: 'Categoria',
      timestamps: false
    }
  }
}

module.exports = {Categoria, categoriaSchema,CATEGORIA_TABLE }
