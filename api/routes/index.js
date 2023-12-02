const express = require('express')

const productsRouter = require('./products.router.js')
const usersRouter = require('./users.router.js')
const categoriesRouter = require('./categories.router.js')
const customersRouter = require('./customer.router.js')
const orderRouter = require('./order.router.js')
const usuariosRouter = require('./usuario.router.js')
const carritosRouter = require('./carrito.router.js')
const productoItemRouter = require('./productoItem.router.js')
const productoRouter = require('./producto.router.js')
const categoriaRouter = require('./categoria.router.js')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
  router.use('/customers', customersRouter)
  router.use('/orders', orderRouter)
  router.use('/usuario', usuariosRouter)
  router.use('/carrito', carritosRouter)
  router.use('/productoItem', productoItemRouter)
  router.use('/producto', productoRouter)
  router.use('/categoria', categoriaRouter)

}

module.exports = routerApi
