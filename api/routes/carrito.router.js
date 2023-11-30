const express = require('express')

const CarritoService = require('./../services/carrito.services')
const validatorHandler = require('./../middlewares/validator.handler')
const {createCarritoSchema, getCarritoSchema} = require('./../schemas/carrito.schema')

const router = express.Router()
const service = new CarritoService()

router.get('/',async(req, res, next)=>{
  try{
    const carritos = await service.find()
    res.json(carritos)

  }catch(error){
    next(error)
  }
})

router.get('/:id',
validatorHandler(getCarritoSchema,'params'),
async (req, res, next)=>{
  try{
    const {id} = req.params
    const carrito = await service.findOne(id)
    res.json(carrito)

  }catch(error){
    next(error)
  }
})

router.post('/',
validatorHandler(createCarritoSchema, 'body'),
async(req, res, next)=>{
  try{
    const body = req.body
    const newCarrito = await service.create(body)
    res.status(201).json(newCarrito)

  }catch(error){
    next(error)
  }
}
)

router.patch('/:id',
async(req, res, next)=>{
  try{
    const {id} = req.params
    const body = req.body
    const carrito = await service.update(id, body)
    res.json(carrito)

  }catch(error){
    next(error)
  }
})

module.exports = router
