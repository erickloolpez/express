const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const {logError, errorHandler, boomErrorHandler, ormErrorHandler} = require('./middlewares/error.handle')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://myapp.com','http://localhost:5500']
const options ={
  origin : (origin, callback)=>{
    if(whitelist.includes(origin)|| !origin){
      callback(null, true)
    }else{
      callback(new Error('Not allowed'))
    }
  }
}
app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('Hi, my first server on express ')

})
app.get('/api/new-route', (req, res) => {
  res.send('Hi, Im the new route')

})

routerApi(app)

app.use(logError)//The order have importance
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('The port is ready men')
})


