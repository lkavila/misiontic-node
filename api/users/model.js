const mongoose = require("mongoose");

const collection = "users";

const usersSchema = {
  name: { type: String, required: true },
  pseudonym: { type: String },
  birthdate: { type: Date, required: true },
  active: { type: Boolean, required: true, default: true },
}
const options = {
  timestamps: true,
}
const schema = new mongoose.Schema(usersSchema, options);

const User = mongoose.model(collection, schema);

module.exports = User;