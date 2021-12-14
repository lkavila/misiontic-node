const express = require("express")
const { list, createUser } = require("./controller");
const { validateCreateUser } = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(list).post(validateCreateUser, createUser)

module.exports = router;
