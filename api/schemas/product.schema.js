const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15)
const price = Joi.number().integer().min(10)
const image = Joi.string().uri()
const categoryId = Joi.number().integer()
const description = Joi.string().min(10)

const createProductSchema =Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required()
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
