import React, { useState, useEffect } from "react";
import { PostUpdateBook } from "../services/api";

export default function PostForm({
  onBookAdded,
  activeBookId,
  setActiveBookId,
}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  function getBook(id) {
    fetch(`http://ec2-18-222-170-221.us-east-2.compute.amazonaws.com${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);

        setIsbn(data.isbn);
        setPrice(data.price);
        setPublishedDate(data.publishedDate);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    if (!activeBookId) return;
    getBook(activeBookId);
  }, [activeBookId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postBook = {
      title,
      author,
      isbn,
      price,
      publishedDate,
    };

    PostUpdateBook(activeBookId, postBook)
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage("Data successfully posted!");

        setTitle("");
        setAuthor("");
        setIsbn("");
        setPrice("");
        setPublishedDate("");
        if (onBookAdded) {
          onBookAdded();
        }
        setActiveBookId("");
      })
      .catch((error) => {
        setResponseMessage("Error posting data");
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-8 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {activeBookId ? "Update Book" : "Post Book"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author">
            Author
          </label>
          <textarea
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Author"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isbn">
            ISBN
          </label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder="Enter ISBN"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter Price"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="publishedDate">
            Published Date
          </label>
          <input
            type="date"
            id="publishedDate"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
          Submit
        </button>
      </form>
    </div>
  );
}
