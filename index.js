const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const {logError, errorHandler, boomErrorHandler} = require('./middlewares/error.handle')
const app = express()
const port = 3000

app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://myapp.com']
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

app.get('/', (req, res) => {
  res.send('Hi, my first server on express ')

})
app.get('/new-route', (req, res) => {
  res.send('Hi, Im the new route')

})

routerApi(app)

app.use(logError)//The order have importance
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('The port is ready men')
})


