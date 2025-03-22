import React from "react";
import { Link } from "react-router-dom";

export default function Option() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/option1">optio1</Link>

      <Link to="/option2">option2</Link>

      <Link to="/option3">option3</Link>
    </div>
  );
}
