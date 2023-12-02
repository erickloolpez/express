'use strict';

const {productoSchema, PRODUCTO_TABLE} = require('../models/producto.model');
const {categoriaSchema, CATEGORIA_TABLE} = require('../models/categoria.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORIA_TABLE, categoriaSchema)
    await queryInterface.createTable(PRODUCTO_TABLE, productoSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORIA_TABLE)
    await queryInterface.dropTable(PRODUCTO_TABLE)
  }
};
