const Joi = require('joi')

const id = Joi.string()
const carritoId = Joi.number().integer()
const productoItemId = Joi.number().integer()
const cantidad = Joi.number().integer()

const getCarritoProductoSchema = Joi.object({
  id: id.required()
})

const createCarritoProductoSchema = Joi.object({
  carritoId: carritoId.required(),
  productoItemId: productoItemId.required(),
  cantidad: cantidad.required()
})

const updateCarritoProductoSchema = Joi.object({
  carritoId: carritoId,
  productoItemId: productoItemId,
  cantidad: cantidad
})

module.exports ={getCarritoProductoSchema, createCarritoProductoSchema, updateCarritoProductoSchema}
