import React from "react";
import "./App.css";

import { Context } from "./Contex/ThemeProvider";
import Profile from "./Components/Profile";

function App() {
  const theme = Context();
  return (
    <div className="App">
      <h2>Theme Switcher</h2>
      <p>Lets break leg</p>
      <Profile />
      <p>My theme is {theme}</p>
    </div>
  );
}

export default App;
