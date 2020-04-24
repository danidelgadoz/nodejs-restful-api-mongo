const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false },
});
mongoose.model('Book', BookSchema);

module.exports = mongoose.model('Book');