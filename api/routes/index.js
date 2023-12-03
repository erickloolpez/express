const express = require('express')

const usuariosRouter = require('./usuario.router.js')
const carritosRouter = require('./carrito.router.js')
const productoItemRouter = require('./productoItem.router.js')
const productoRouter = require('./producto.router.js')
const categoriaRouter = require('./categoria.router.js')
const carritoProductoRouter = require('./carrito-producto.router.js')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/usuario', usuariosRouter)
  router.use('/carrito', carritosRouter)
  router.use('/productoItem', productoItemRouter)
  router.use('/producto', productoRouter)
  router.use('/categoria', categoriaRouter)
  router.use('/carritoProducto', carritoProductoRouter)

}

module.exports = routerApi
