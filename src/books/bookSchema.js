const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  posterImgPath: { type: String },
  favorite: { type: Boolean, default: false },
});
mongoose.model('Book', BookSchema);

module.exports = mongoose.model('Book');