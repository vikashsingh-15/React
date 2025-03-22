import React from "react";
import Card from "./Card";
import "./home.css";
// import Options from "./options";

export default function Home() {
  return (
    <div className="home-body">
      Home Page
      <div className="home-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <Options /> */}
    </div>
  );
}

////way  2 nested routes

// import React from "react";
// import Card from "./Card";
// import Options from "./options";
// import { Outlet } from "react-router-dom";
// import "./home.css";

// export default function Home() {
//   return (
//     <div className="home-body">
//       <h2>Home Page</h2>
//       <div className="home-card">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <Options /> {/* This will always be visible */}
//       {/* Outlet will display Option1, Option2, or Option3 below the home page */}
//       <Outlet />
//     </div>
//   );
// }
