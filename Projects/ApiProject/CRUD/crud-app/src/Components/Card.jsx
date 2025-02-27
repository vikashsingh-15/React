import "./card.css";
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function Card({ title, author, published, genre, description }) {
  return (
    <div className="custom-card">
      <div className="card-body">
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
          <Button variant="primary" className="me-3 px-4" size="md">
            Edit
          </Button>
          <Button variant="danger" className="px-3" size="md">
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

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
