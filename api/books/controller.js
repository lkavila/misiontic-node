const Book = require("./model");

const list = async (req, res) => {
  const books = await Book.find().populate("author", ["name", "pseudonym"]);
  res.status(200).json({ books })
};

const createBook = (req, res) => {
  const { name, published_date, author } = req.body;

  const book = {
    name: name,
    published_date,
    author
  };

  const newBook = new Book(book);
  newBook.save().then((createdBook) => {
    res.status(200).json({ createdBook });
  })
};

const deleteBook = (req, res) => {
  const id = req.params.id;
  Book.deleteOne({ _id: id }).then((result) => {
    res.status(200).json({ result })
  })
};

const updateBook = async (req, res) => {
  const { name, published_date, author, id } = req.body;
  const userFound = await Book.find({ _id: id });
  if (userFound.length === 1) {
    const book = {
      name: name,
      published_date,
      author
    };
    Book.updateOne({ _id: id }, book).then((result) => {
      res.status(200).json(result);
    })
  } else {
    res.status(400).json({ error: "Book doesn't exits" });
  }
};

module.exports = {
  list,
  createBook,
  deleteBook,
  updateBook
}