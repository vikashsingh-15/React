// import React, { useContext } from "react";
// import "./App.css";

// import { ThemeContext } from "./Contex/ThemeProvider";
// import Profile from "./Components/Profile";

// function App() {
//   const context = useContext(ThemeContext);
//   return (
//     <div className="App">
//       <h2>Theme Switcher</h2>
//       <p>Lets break leg</p>
//       <Profile />
//       <p>My theme is {context}</p>
//     </div>
//   );
// }

// export default App;

//// way 2 --> we dont have to useContect in different file we can use it in the same file (theme Provider)
// import React from "react";
// import "./App.css";

// import { Context } from "./Contex/ThemeProvider";
// import Profile from "./Components/Profile";

// function App() {
//   const theme = Context();
//   return (
//     <div className="App">
//       <h2>Theme Switcher</h2>
//       <p>Lets break leg</p>
//       <Profile />
//       <p>My theme is {theme}</p>
//     </div>
//   );
// }
// export default App;

// -----------------THEME TOGLER CODE --------------------

import React from "react";
import "./App.css";

import { Context } from "./Contex/ThemeProvider";
import Profile from "./Components/Profile";

function App() {
  const { toggle, handleToggle } = Context();
  console.log(toggle);
  return (
    <div
      className="App"
      style={{
        background: toggle ? "#333" : "#fff",
        color: toggle ? "#fff" : "#000",
      }}
    >
      {/* first braces because style will have JavaScript and second beaces because it taks object */}
      <h2>Theme Switcher</h2>
      <p>Lets break leg</p>
      <Profile />
      <p>My theme is {toggle ? "Dark" : "Light"}</p>
      <button onClick={handleToggle}>Change Theme</button>
    </div>
  );
}
export default App;
