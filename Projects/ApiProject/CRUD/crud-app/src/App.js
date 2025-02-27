import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar";
import Books from "./Components/Books";
import AddBooks from "./Components/AddBooks";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [book, setBook] = useState([]);

  const getBooks = async () => {
    const url = "http://localhost:3000/books";
    const response = await axios.get(url);
    setBook(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="library-container">
        <div className="books-section">
          <Books bookprop={book} />
        </div>
        <div className="add-book-section">
          <AddBooks />
        </div>
      </div>
    </>
  );
}

export default App;

// lc 18 - 2:00
