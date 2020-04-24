const express = require('express');

const bookService = require('./bookService');

const routes = () => {
  const bookRouter = express.Router();

  bookRouter.route('/')
    .post(bookService.create)
    .get(bookService.findAll)

  bookRouter.use('/:id', (req, res, next) => {
    bookService.isAValidID(req.params.id) ? next() : res.sendStatus(404);
  })
  bookRouter
    .route('/:id')
    .get(bookService.findById)
    .put(bookService.findByIdAndUpdate)
    .patch(bookService.findByIdAndUpdate)
    .delete(bookService.findByIdAndRemove);

  return bookRouter;
};

module.exports = routes();