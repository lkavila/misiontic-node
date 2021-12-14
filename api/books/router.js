const express = require("express")
const { list, createBook, deleteBook } = require("./controller");

const router = express.Router();

router.route("/").get(list).post(createBook)

router.route("/:id").delete(deleteBook)

module.exports = router;