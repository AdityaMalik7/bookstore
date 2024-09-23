import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PostForm from "./Operations/PostForm";
import BookCard from "./components/BookCard";

function App() {
  const [data, setData] = useState([{}]);
  const [activeBookId, setActiveBookId] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  function getBooks() {
    fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  return (
    <>
      <Header />
      <div className="min-h-scree flex">
        <div className="ml-1/3 w-2/3 p-6 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((book) => (
              <BookCard
                setActiveBookId={setActiveBookId}
                key={book._id}
                book={book}
                getBooks={getBooks}
              />
            ))}
          </div>
        </div>
        <div>
          <PostForm
            activeBookId={activeBookId}
            setActiveBookId={setActiveBookId}
            onBookAdded={getBooks}
          />
        </div>
      </div>
    </>
  );
}

export default App;
