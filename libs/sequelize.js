const {Sequelize} = require('sequelize')
const {config} = require('../config/config')

const setupModels = require('../db/models/index')


const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI,{
  dialect: 'postgres',
  logging: true,
})

setupModels(sequelize)
// sequelize.sync() we dont't do that in the part of settintg the migrations

module.exports = sequelize
