const Joi = require('joi')

const id = Joi.string()
const categoriaId = Joi.number().integer()
const nombre = Joi.string().min(3).max(50)
const descripcion = Joi.string().min(10).max(255)
const foto = Joi.string().uri()

const createProductoSchema = Joi.object({
  categoriaId: categoriaId.required(),
  nombre: nombre.required(),
  descripcion: descripcion.required(),
  foto: foto.required()
})

const updateProductoSchema = Joi.object({
  categoriaId: categoriaId,
  nombre: nombre,
  descripcion: descripcion,
  foto: foto
})

const getProductoSchema = Joi.object({
  id: id.required()
})

module.exports = {createProductoSchema, updateProductoSchema, getProductoSchema}


