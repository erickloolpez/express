const Joi = require('joi')

const id = Joi.number().integer()
const productoId = Joi.number().integer()
const codigo = Joi.string().min(3).max(15)
const foto = Joi.string().uri()
const precio = Joi.number()
const stock = Joi.number().integer()

const createProductoItemSchema = Joi.object({
  productoId: productoId.required(),
  codigo: codigo.required(),
  foto: foto.required(),
  precio: precio.required(),
  stock: stock.required()
})

const updateProductoItemSchema = Joi.object({
  codigo: codigo,
  foto: foto,
  precio: precio,
  stock: stock
})

const getProductoItemSchema = Joi.object({
  id: id.required()
})

module.exports = {createProductoItemSchema, updateProductoItemSchema, getProductoItemSchema}
