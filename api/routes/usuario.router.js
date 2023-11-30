const express = require('express')

const UsuarioService = require('./../services/usuario.services')
const validatorHandler = require('./../middlewares/validator.handler')
const {createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema} = require('./../schemas/usuario.schema')

const router = express.Router()
const service = new UsuarioService()

router.get('/',async(req, res, next)=>{
  try{
    const usuarios = await service.find()
    res.json(usuarios)

  }catch(error){
    next(error)
  }
})

router.get('/:id',
validatorHandler(getUsuarioSchema,'params'),
async(req, res, next)=>{
  try{
    const {id} = req.params
    const usuario = await service.findOne(id)
    res.json(usuario)

  }catch(error){
    next(error)
  }
})

router.post('/',
validatorHandler(createUsuarioSchema, 'body'),
async(req, res, next)=>{
  try{
    const body = req.body
    const newUsuario = await service.create(body)
    res.status(201).json(newUsuario)

  }catch(error){
    next(error)
  }

  router.patch('/:id',
  validatorHandler(updateUsuarioSchema,'params'),
  async(req, res, next)=>{
    try{
      const {id} = req.params
      const body = req.body
      const usuario = await service.update(id, body)
      res.json(usuario)

    }catch(error){
      next(error)
    }
  }
  )

  router.delete('/:id',
  async (req, res, next)=>{
    try{
      const {id} = req.params
      const rta = await service.delete(id)
      res.json(rta)

    }catch(error){
      next(error)
    }
  }
  )

})

module.exports = router
