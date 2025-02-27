import axios from "axios";
import "./card.css";
import React, { useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";

export default function Card({
  id,
  title,
  author,
  published,
  genre,
  description,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedAuthor, setEditedAuthor] = useState(author);
  const [editedPublished, setEditedPublished] = useState(published);
  const [editedGenre, setEditedGenre] = useState(genre);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const book = {
      title: editedTitle,
      author: editedAuthor,
      publishedYear: editedPublished,
      genre: editedGenre,
      description: editedDescription,
    };
    const url = `http://localhost:3000/books/${id}`;
    await axios
      .put(url, book)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsEditing(false);
    alert("Book Updated");
    window.location.reload();
  };

  const handleDelete = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios.delete(url).then((res) => {
      console.log("deleted", res);
      window.location.reload();
    });
    alert("Book Deleted");
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="custom-card">
      <div className="card-body">
        {isEditing ? (
          <Form className="custom-form">
            <Form.Control
              className="mb-2"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <Form.Control
              className="mb-2"
              type="text"
              value={editedAuthor}
              onChange={(e) => setEditedAuthor(e.target.value)}
            />
            <Form.Control
              className="mb-2"
              type="text"
              value={editedPublished}
              onChange={(e) => setEditedPublished(e.target.value)}
            />
            <Form.Control
              className="mb-2"
              type="text"
              value={editedGenre}
              onChange={(e) => setEditedGenre(e.target.value)}
            />
            <Form.Control
              className="mb-2"
              as="textarea"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <ButtonGroup className="custom-btn-group">
              <Button variant="success" className="me-2" onClick={handleSave}>
                Save
              </Button>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        ) : (
          <>
            <h1 className="card-title">{title}</h1>

            <h3 className="card-subtitle mb-2 text-muted text-start">
              Author: {author}
            </h3>

            <h4 className="card-subtitle mb-2 text-muted text-start">
              Published Year: {published}
            </h4>

            <h4 className="card-subtitle mb-2 text-muted text-start">
              Genre: {genre}{" "}
            </h4>

            <p className="custon-card-desc">Description: {description}</p>

            <ButtonGroup className="custom-btn-group">
              <Button
                variant="primary"
                className="me-3 px-4"
                size="md"
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="px-3"
                size="md"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </ButtonGroup>
          </>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------READING---------------------------------------------

// import "./card.css";
// import React from "react";
// import { Button } from "react-bootstrap";

// export default function Card(props) {
//   return (
//     <div className="custom-card">
//       <div className="card-body">
//         <h1 className="card-title">{props.title}</h1>
//         <h3 className="card-subtitle mb-2 text-muted text-start">
//           Author: {props.author}
//         </h3>
//         <h4 className="card-subtitle mb-2 text-muted text-start">
//           Published Year: {props.published}
//         </h4>
//         <h4 className="card-subtitle mb-2 text-muted text-start">
//           Genre: {props.genre}
//         </h4>
//         <p className="custon-card-desc">Description: {props.description}</p>
//         <Button variant="primary" className="me-3 px-4" size="md">
//           Edit
//         </Button>
//         <Button variant="danger" className="px-3" size="md">
//           Delete
//         </Button>
//       </div>
//     </div>
//   );
// }

//--------------------------------------------------------DELETE FUNCTION------------------------------------------------//

//  const handleDelete = () => {
//    alert("Delete button clicked");
//    const url = `http://localhost:3000/books/${id}`;
//    axios
//      .delete(url)
//      .then((res) => {
//        console.log(res);
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//    window.location.reload();
//    //catch part is not compulsory
//  };

//--------------------------------------Other way to Edit FUNCTION----------------------------------------------//

// import axios from "axios";
// import "./card.css";
// import React, { useState } from "react";
// import { Button, ButtonGroup, Form } from "react-bootstrap";

// export default function Card({ id, title, author, published, genre, description }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedBook, setEditedBook] = useState({ title, author, published, genre, description });

//   const handleEdit = () => setIsEditing(true);

//   const handleChange = (e) => {
//     setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     try {
//       await axios.put(`http://localhost:3000/books/${id}`, editedBook);
//       alert("Book updated successfully!");
//       window.location.reload();
//     } catch (error) {
//       console.error("Error updating book:", error);
//       alert("Failed to update book.");
//     }
//   };

//   return (
//     <div className="custom-card">
//       <div className="card-body">
//         {isEditing ? (
//           <>
//             <Form.Control name="title" value={editedBook.title} onChange={handleChange} className="mb-2" />
//             <Form.Control name="author" value={editedBook.author} onChange={handleChange} className="mb-2" />
//             <Form.Control name="published" value={editedBook.published} onChange={handleChange} className="mb-2" />
//             <Form.Control name="genre" value={editedBook.genre} onChange={handleChange} className="mb-2" />
//             <Form.Control as="textarea" name="description" value={editedBook.description} onChange={handleChange} className="mb-2" />

//             <Button variant="success" className="me-2" onClick={handleSave}>Save</Button>
//             <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
//           </>
//         ) : (
//           <>
//             <h1>{title}</h1>
//             <h3>Author: {author}</h3>
//             <h4>Published: {published}</h4>
//             <h4>Genre: {genre}</h4>
//             <p>{description}</p>

//             <ButtonGroup>
//               <Button variant="primary" className="me-3" onClick={handleEdit}>Edit</Button>
//             </ButtonGroup>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
