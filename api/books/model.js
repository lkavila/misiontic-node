const mongoose = require("mongoose");

const collection = "books";

const booksSchema = {
  name: { type: String, required: true },
  published_date: { type: Date },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
}
const options = {
  timestamps: true,
}
const schema = new mongoose.Schema(booksSchema, options);

const Book = mongoose.model(collection, schema);

module.exports = Book;