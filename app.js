const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 8080;

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: "This is my API" };
    res.json(response);
  });

app.use('/', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  console.log('Running on port ' + port);
});
