const Joi = require('joi')

const id = Joi.number().integer()
const usuarioId = Joi.number().integer()

const getCarritoSchema = Joi.object({
  id: id.required()
})

const createCarritoSchema = Joi.object({
  usuarioId: usuarioId.required()
})

module.exports ={getCarritoSchema, createCarritoSchema}
