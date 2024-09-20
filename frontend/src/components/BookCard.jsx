import React from "react";
import Card from "./Card";
import { deleteBook } from "../services/api";

export default function BookCard({ book, setActiveBookId, getBooks }) {
  const handleDelete = (id) => {
    deleteBook(id)
      .then((response) => {
        getBooks();
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <div>
      <Card
        title={book.title}
        author={book.author}
        publishedDate={book.publishedDate}
        price={book.price}
        isbn={book.isbn}
      />
      <button
        onClick={() => handleDelete(book._id)}
        className=" bg-indigo-500 text-white mt-3 py-2 px-4 mr-3 rounded ">
        {" "}
        Delete
      </button>
      <button
        onClick={() => setActiveBookId(book._id)}
        className=" bg-indigo-500 text-white mt-3 py-2 px-4 mr-3 rounded ">
        Edit
      </button>
    </div>
  );
}
