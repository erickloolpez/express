const express = require('express')

const CategoriaService = require('../../services/categoria.service')
const validationHandler = require('../../utils/middleware/validationHandler')
const { createCategoriaSchema, updateCategoriaSchema, getCategoriaSchema } = require('../../utils/schemas/categoria.schema')

const router = express.Router()
const service = new CategoriaService()

router.get('/', async (req, res, next) => {
  try {
    const categorias = await service.find()
    res.json(categorias)
  } catch (error) {
    next(error)
  }
}
)

router.get('/:id',
  validationHandler(getCategoriaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const categoria = await service.findOne(id)
      res.json(categoria)
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  validationHandler(createCategoriaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newCategoria = await service.create(body)
      res.status(201).json(newCategoria)
    } catch (error) {
      next(error)
    }
  })

router.put('/:id',
  validationHandler(updateCategoriaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const categoria = await service.update(id, body)
      res.json(categoria)
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const rta = await service.delete(id)
    res.json(rta)
  } catch (error) {
    next(error)
  }
}
)

module.exports = router
