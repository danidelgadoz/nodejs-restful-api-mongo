const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 8080;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRoutes')(Book);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  console.log('Running on port ' + port);
});
