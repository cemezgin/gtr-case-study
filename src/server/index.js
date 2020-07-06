const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const config = require('../config/config')
const server = express()
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')
const responseHelper = require('../utils/response-helper')
const { RESPONSE_CODE_BAD_REQUEST } = require('../constants')

const jsonErrorHandler = async (err, req, res, next) => {
  res.status(400).send(responseHelper.getStandardResponse(RESPONSE_CODE_BAD_REQUEST, err.type))
}

// middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonErrorHandler)

// routes
server.use(config.baseUrl, routes)
server.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

module.exports = server
