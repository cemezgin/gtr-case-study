const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const config = require('../config/config')
const server = express()

// middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// routes
server.use(config.baseUrl, routes)

module.exports = server
