const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = require("./book");

const AuthorSchema = new Schema(
  {
    name: String,
    age: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", AuthorSchema);
