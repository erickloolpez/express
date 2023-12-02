const {Model, DataTypes, Sequelize} = require('sequelize')

const USUARIO_TABLE ='usuario'

const usuarioSchema = {
  id : {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email:{
    allowNull:false,
    type: DataTypes.STRING(30),
    unique: true
  },
  password:{
    allowNull:false,
    type: DataTypes.STRING(30)
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Usuario extends Model{
  static associate(models){
    this.hasOne(models.Carrito, {as:'carrito', foreignKey:'usuarioId'})
  }
  static config(sequelize){
    return{
    sequelize,
    tableName: USUARIO_TABLE,
    modelName: 'Usuario',
    timestamps: false
    }
  }
}

module.exports = {Usuario, usuarioSchema, USUARIO_TABLE}
