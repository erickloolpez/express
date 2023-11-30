const Joi = require('joi')

const id = Joi.number().integer()
const email = Joi.string().email()
const password = Joi.string().max(30)

const createUsuarioSchema = Joi.object({
  email: email.required(),
  password: password.required()
})

const updateUsuarioSchema = Joi.object({
  email: email,
  password: password
})

const getUsuarioSchema = Joi.object({
  id: id.required()
})

module.exports = {createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema}
