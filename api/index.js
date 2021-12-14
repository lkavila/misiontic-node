const express = require("express");
const users = require("./users/router");
const books = require("./books/router");
const api = express();

api.use("/users", users)
api.use("/books", books)

module.exports = api;