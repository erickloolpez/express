'use strict';

const {carritoProductoSchema, CARRITO_PRODUCTO_TABLE} = require('../models/carrito-producto');
const {productoItemSchema, PRODUCTO_ITEM_TABLE} = require('../models/productoItem.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CARRITO_PRODUCTO_TABLE, carritoProductoSchema)
    await queryInterface.createTable(PRODUCTO_ITEM_TABLE, productoItemSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCTO_ITEM_TABLE)
    await queryInterface.dropTable(CARRITO_PRODUCTO_TABLE)
  }
};
