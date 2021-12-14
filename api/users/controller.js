const User = require("./model");

const list = async (req, res) => {
  const authors = await User.find();
  res.status(200).json({ authors })
}
const createUser = async (req, res) => {
  const { name, pseudonym, birthdate } = req.body;
  const userFound = await User.find({ pseudonym });
  if (userFound.length === 0) {
    const user = {
      name: name,
      pseudonym,
      birthdate
    };

    const newUser = new User(user);
    newUser.save().then((createdUser) => {
      res.status(200).json({ createdUser });
    })
  } else {
    res.status(400).json({ error: "Pseudonym already exits" });
  }

}

module.exports = {
  list,
  createUser
}