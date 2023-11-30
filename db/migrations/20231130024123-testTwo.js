'use strict';

const {carritoSchema, CARRITO_TABLE} = require('../models/carrito.model')
const {usuarioSchema, USUARIO_TABLE} = require('../models/usario.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USUARIO_TABLE, usuarioSchema)
    await queryInterface.createTable(CARRITO_TABLE, carritoSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USUARIO_TABLE)
    await queryInterface.dropTable(CARRITO_TABLE)
  }
};
