import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
// import Details from "./details";
// import { Routes, Route } from "react-router-dom";

export default function Card() {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>This is a simple card component with some content.</p>
      <Link to="/details">
        {/* // This will be the link to the details page.
        // linkes  will be accessible here because all tree of DOM is wrapped  in  router  thus anywhere we can craete links*/}
        <button>Click Me</button>
      </Link>

      {/* <Routes>
        <Route path="/details" element={<Details />} />
      </Routes> */}
      {/* // This is the part that is causing issues.*/}
    </div>
  );
}

// <App> is already wrapped in <BrowserRouter>, so technically, routing inside Card should work. However, the issue is with how React Router works. Let me explain why placing <Routes> inside Card is causing problems.

// Why is <Routes> inside Card not working?
// Routes in Card is only rendered when Card is mounted.

// When your app first loads at /, only Card is rendered.
// The <Routes> inside Card only exists when Card is visible.
// But Routes inside Card only defines /details inside Card, meaning it is never actually used when the URL changes.
// When you click "Click Me", React Router updates the URL, but Card is still rendered

// Since Card does not re-render dynamically based on the URL, the internal <Routes> doesn't get triggered.
// The parent router (App.js) doesn't know about /details because Card is still the only rendered component.
