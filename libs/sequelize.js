const {Sequelize} = require('sequelize')
const {config} = require('../config/config')

const setupModels = require('../db/models/index')


// const USER = encodeURIComponent(config.dbUser)
// const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// const sequelize = new Sequelize(URI,{
//   dialect: 'postgres',
//   logging: true,
// })
const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize)
// sequelize.sync() we dont't do that in the part of settintg the migrations

module.exports = sequelize
