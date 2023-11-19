
const express = require('express')
const ProductsService = require('../services/product.services.js')
const {validatorHandler}= require('../middlewares/validator.handler.js')

const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
}

)

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const product = await service.findOne(id)

  res.json(product)
})

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const newProduct = await service.create(req.body)
    res.status(201).json({
      message: 'craated',
      newProduct
    })
  })

router.put('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const answer = await service.update(id, body)
      res.json({
        message: 'update',
        answer
      })
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const answer = await service.delete(id)
    res.json({
      message: 'deleted',
      answer,
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
