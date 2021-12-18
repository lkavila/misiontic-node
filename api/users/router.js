const express = require("express")
const { list, createUser, updateUser } = require("./controller");
const { validateCreateUser } = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(list).post(validateCreateUser, createUser).put(updateUser)

module.exports = router;
