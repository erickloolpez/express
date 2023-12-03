const Joi = require('joi')

const id = Joi.string()
const nombre = Joi.string().max(50)

const createCategoriaSchema = Joi.object({
  nombre: nombre.required()
})

const updateCategoriaSchema = Joi.object({
  nombre: nombre
})

const getCategoriaSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCategoriaSchema,
  updateCategoriaSchema,
  getCategoriaSchema
}
