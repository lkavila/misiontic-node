const express = require("express")
const { list, createBook, deleteBook, updateBook } = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createBook).put(updateBook)

router.route("/:id").delete(deleteBook)

module.exports = router;