//include .env file as environment
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./src/server/routes/index');
const config = require('./src/config/config');

const app = express();

//mongoose settings
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//db connection
mongoose.connect(process.env.MONGODB_URI)
.then(db => console.log('DB connected.'))
  .catch(err => console.log(err));

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// settings
app.set('port', process.env.PORT || 3000);

//routes
app.use(config.baseUrl, routes);

//serve
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});