const {User, userSchema} = require('./user.model')

function setupModels(sequelize){
  User.init(userSchema,User.config(sequelize))
}

module.exports = setupModels
