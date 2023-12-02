'use strict';

const {usuarioSchema, USUARIO_TABLE} = require('../models/usario.model')
const {carritoSchema, CARRITO_TABLE} = require('../models/carrito.model')
const {carritoProductoSchema, CARRITO_PRODUCTO_TABLE} = require('../models/carrito-producto.model')
const {productoItemSchema, PRODUCTO_ITEM_TABLE} = require('../models/productoItem.model')
const {productoSchema, PRODUCTO_TABLE} = require('../models/producto.model')
const {categoriaSchema, CATEGORIA_TABLE} = require('../models/categoria.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USUARIO_TABLE, usuarioSchema)
    await queryInterface.createTable(CARRITO_TABLE, carritoSchema)
    await queryInterface.createTable(CARRITO_PRODUCTO_TABLE, carritoProductoSchema)
    await queryInterface.createTable(PRODUCTO_ITEM_TABLE, productoItemSchema)
    await queryInterface.createTable(PRODUCTO_TABLE, productoSchema)
    await queryInterface.createTable(CATEGORIA_TABLE, categoriaSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USUARIO_TABLE)
    await queryInterface.dropTable(CARRITO_TABLE)
    await queryInterface.dropTable(CARRITO_PRODUCTO_TABLE)
    await queryInterface.dropTable(PRODUCTO_ITEM_TABLE)
    await queryInterface.dropTable(PRODUCTO_TABLE)
    await queryInterface.dropTable(CATEGORIA_TABLE)
  }
};
