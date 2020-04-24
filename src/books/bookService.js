const Book = require('./bookSchema');
const mongoose = require('mongoose');

const BookService = () => {
  const isAValidID = (id) => (mongoose.Types.ObjectId.isValid(id));

  const create = (req, res) => {
    Book.create(req.body, (err, book) => {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(201).json(book);
    })
  };

  const findAll = (req, res) => {
    Book.find({}, (err, books) => {
      if (err) return res.status(500).send("There was a problem finding the books.");
      res.status(200).json(books);
    })
  };
  
  const findById = (req, res) => {
    Book.findById(req.params.id, (err, book) => {
      if (err) return res.status(500).send("There was a problem finding the book.");
      if (!book) return res.sendStatus(404);
      res.status(200).send(book);
    });
  };

  const findByIdAndRemove = (req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, book) => {
      if (err) return res.status(500).send("There was a problem deleting the book.");
      res.sendStatus(204);
    });
  };

  const findByIdAndUpdate = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, book) => {
      if (err) return res.status(500).send("There was a problem updating the book.");
      res.status(200).send(book);
    });
  };

  return { 
    create,
    findAll,
    findById,
    findByIdAndRemove,
    findByIdAndUpdate,
    isAValidID
  };
}

module.exports = BookService();