import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import PostForm from "./Requests/PostForm";
function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/books/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setData(data.filter((book) => book.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <>
      <Header />
      <div className="min-h-scree flex">
        <div className="ml-1/3 w-2/3 p-6 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((book) => (
              <div>
                <Card
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  publishedDate={book.publishedDate}
                  price={book.price}
                  isbn={book.isbn}
                />
                <button
                  onClick={() => handleDelete(book.id)}
                  className=" bg-indigo-500 text-white mt-3 py-2 px-4 mr-3 rounded ">
                  {" "}
                  Delete
                </button>
                <button className=" bg-indigo-500 text-white mt-3   py-2 px-4 rounded">
                  {" "}
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <PostForm />
        </div>
      </div>
    </>
  );
}

export default App;
