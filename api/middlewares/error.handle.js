const {ValidationError} = require('sequelize')
const boom = require('@hapi/boom');

function logError(err, req, res, next) {
  console.log('Log error')
  console.error(err)
  next(err)
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

function ormErrorHandler(err,req, res, next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
    next(err)

  }

}

module.exports = { logError, errorHandler, boomErrorHandler , ormErrorHandler}
