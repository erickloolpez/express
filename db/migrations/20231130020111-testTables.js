'use strict';

const {carritoSchema, CARRITO_TABLE} = require('../models/carrito.model')
const {usuarioSchema, USUARIO_TABLE} = require('../models/usario.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CARRITO_TABLE, carritoSchema)
    await queryInterface.createTable(USUARIO_TABLE, usuarioSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CARRITO_TABLE)
    await queryInterface.dropTable(USUARIO_TABLE)
  }
};
