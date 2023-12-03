const express = require('express')

const CarritoProductoService = require('./../services/carrito-producto.services')
const validatorHandler = require('./../middlewares/validator.handler')
const {createCarritoProductoSchema, getCarritoProductoSchema, updateCarritoProductoSchema} = require('./../schemas/carrito-producto.schema')

const router = express.Router()
const service = new CarritoProductoService()

router.get('/',async(req, res, next)=>{
  try{
    const carritoProductos = await service.find()
    res.json(carritoProductos)

  }catch(error){
    next(error)
  }
}
)

router.get('/:id',
validatorHandler(getCarritoProductoSchema,'params'),
async (req, res, next)=>{
  try{
    const {id} = req.params
    const carritoProducto = await service.findOne(id)
    res.json(carritoProducto)

  }catch(error){
    next(error)
  }
}
)

router.post('/',
validatorHandler(createCarritoProductoSchema, 'body'),
async(req, res, next)=>{
  try{
    const body = req.body
    const newCarritoProducto = await service.create(body)
    res.status(201).json(newCarritoProducto)

  }catch(error){
    next(error)
  }
}
)

router.patch('/:id',
validatorHandler(updateCarritoProductoSchema,'body'),
async(req, res, next)=>{
  try{
    const {id} = req.params
    const body = req.body
    const carritoProducto = await service.update(id, body)
    res.json(carritoProducto)

  }catch(error){
    next(error)
  }
}
)

router.delete('/:id',
async(req, res, next)=>{
  try{
    const {id} = req.params
    const rta = await service.delete(id)
    res.json(rta)

  }catch(error){
    next(error)
  }
}
)

module.exports = router
