const express = require('express')

const ProductoItemService = require('./../services/productoItem.services')
const validatorHandler = require('./../middlewares/validator.handler')
const {createProductoItemSchema, updateProductoItemSchema, getProductoItemSchema} = require('./../schemas/productoItem.schema')


const router = express.Router()
const service = new ProductoItemService()

router.get('/',async(req, res, next)=>{
  try{
    const productoItems = await service.find()
    res.json(productoItems)

  }catch(error){
    next(error)
  }
})

router.get('/:id',
validatorHandler(getProductoItemSchema, 'params'),
 async (req, res, next)=>{
  try{
    const {id} = req.params
    const productoItem = await service.findOne(id)
    res.json(productoItem)

  }catch(error){
    next(error)
  }
})

router.post('/',
validatorHandler(createProductoItemSchema, 'body'),
 async(req, res, next)=>{
  try{
    const body = req.body
    const newProductoItem = await service.create(body)
    res.status(201).json(newProductoItem)

  }catch(error){
    next(error)
  }
}
)

router.patch('/:id',
validatorHandler(updateProductoItemSchema, 'params'),
 async(req, res, next)=>{
  try{
    const {id} = req.params
    const body = req.body
    const productoItem = await service.update(id, body)
    res.json(productoItem)

  }catch(error){
    next(error)
  }
})

router.delete('/:id', async(req, res, next)=>{
  try{
    const {id} = req.params
    const productoItem = await service.delete(id)
    res.json(productoItem)

  }catch(error){
    next(error)
  }
})

module.exports = router
