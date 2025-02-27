import React from "react";
import { useState } from "react";
import axios from "axios";
import "./add-books.css";

export default function AddBooks() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const addBook = async (e) => {
    e.preventDefault();
    const book = {
      id: id,
      title: title,
      author: author,
      publishedYear: published,
      genre: genre,
      description: description,
    };
    const url = "http://localhost:3000/books";
    const response = await axios.post(url, book).catch((err) => {
      console.log(err);
    });
    console.log(response);
    window.location.reload();
  };

  //this function will limit the description to 225 characters
  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 225) {
      setDescription(e.target.value);
    }
  };

  return (
    <div className="custom-div1">
      <h1>Add Books</h1>
      <div className="custom-div2">
        <form>
          <div className="mb-3">
            <label className="form-label">Book ID</label>
            <input
              type="text"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Book Name</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Published Year</label>
            <input
              type="text"
              className="form-control"
              value={published}
              onChange={(e) => setPublished(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>

            {/* this will show the number of characters left */}
            <small className="text-muted">
              {description.length}/225 characters
            </small>
          </div>
          <button type="submit" className="btn btn-primary" onClick={addBook}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
