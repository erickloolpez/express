const express = require('express')

const productsRouter = require('./products.router.js')
const usersRouter = require('./users.router.js')
const categoriesRouter = require('./categories.router.js')
const customersRouter = require('./customer.router.js')
const orderRouter = require('./order.router.js')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
  router.use('/customers', customersRouter)
  router.use('/orders', orderRouter)

}

module.exports = routerApi
