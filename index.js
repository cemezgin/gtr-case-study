// include .env file as environment
require('dotenv').config()

const mongoose = require('mongoose')
const path = require('path')
const server = require('./src/server')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

// db connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Database connected'))
  .catch(err => console.log(err))

// settings
server.set('port', process.env.PORT || 3000)
server.set('views', path.join(__dirname, '/src/views'))
server.set('view engine', 'ejs')

server.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

// serve
server.listen(server.get('port'), () => {
  console.log(`Server listening on port ${server.get('port')}`)
})
