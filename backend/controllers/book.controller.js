import { Book } from "../models/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksId = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const postBook = async (req, res) => {
  try {
    const product = await Book.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const putBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).json({ message: "not found" });
    }
    const updateBook = await Book.findById(id);
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found by give ID." });
    }
    res.status(200).json({ message: "Book deleted successfully by given ID." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
