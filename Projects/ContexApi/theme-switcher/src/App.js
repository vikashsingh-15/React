import React, { useContext } from "react";
import "./App.css";

import { ThemeContext } from "./Contex/ThemeProvider";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <h2>Theme Switcher</h2>
      <p>Lets break leg</p>
      <p>My theme is {context}</p>
    </div>
  );
}

export default App;
