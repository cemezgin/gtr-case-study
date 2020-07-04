//include .env file as environment
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./src/server/routes/index');
const config = require('./src/config/config');

const app = express();

//db connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
.then(db => console.log('Database connected'))
  .catch(err => console.log(err));


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(config.baseUrl, routes);

//serve
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});