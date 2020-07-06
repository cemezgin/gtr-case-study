// include .env file as environment
require('dotenv').config()

const mongoose = require('mongoose')
const server = require('./src/server')

// db connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Database connected'))
  .catch(err => console.log(err))

// settings
server.set('port', process.env.PORT || 3000)

// serve
server.listen(server.get('port'), () => {
  console.log(`Server listening on port ${server.get('port')}`)
})
