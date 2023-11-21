const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15)
const price = Joi.number().integer().min(10)
const image = Joi.string().uri()
const categoryId = Joi.number().integer()
const description = Joi.string().min(10)

const pricemin = Joi.number().integer()
const pricemax = Joi.number().integer()
const limit = Joi.number().integer()
const offset = Joi.number().integer()

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

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  pricemin,
  pricemax: pricemax.when('pricemin',{
    is: Joi.number().integer().required(),
    then:Joi.required()
  })
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema, queryProductSchema}
