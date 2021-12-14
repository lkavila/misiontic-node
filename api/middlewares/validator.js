const validateCreateUser = (req, res, next) => {
  const { name, pseudonym, birthdate } = req.body;
  if (!name || !pseudonym || !birthdate) {
    res.status(400).json({ error: "There are one or more empty fields" });

  } else {
    next();
  }

}

module.exports = {
  validateCreateUser
}