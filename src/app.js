const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const dbHost = process.env.DATA_BASE_HOST || 'localhost';
mongoose.connect(`mongodb://${dbHost}/bookAPI`);

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Length, Content-Type, Authorization, Access-Control-Allow-Methods');
  next();
});

app.get('/', (req, res) => res.send('Node.js Restful API is running'));

app.use('/books', require('./books/bookController'));

module.exports = (app);