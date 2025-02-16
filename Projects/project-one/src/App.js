// import "./App.css";
// import React from "react";
// import Ecomm from "./pro/ecomm";
// import ToDoList from "./pro/ToDoList";
// import ToDoList2 from "./pro/ToDOList2";
// import Options from "./pro/options";
// import LengthChecker from "./pro/lengthChecker";
// import FormClass from "./pro/FormClass";
// import FormFunction from "./pro/FormFunction";
// import BallRefClass from "./pro/BallRef";

// function App() {
//   return (
//     <>
//       {/* <Ecomm /> */}
//       {/* <ToDoList /> */}

//       {/* <ToDoList2 /> */}

//       {/* <Options /> */}

//       {/* <LengthChecker /> */}
//       {/* <FormClass /> */}

//       {/* <FormFunction /> */}

//       {/* <BallRefClass /> */}
//     </>
//   );
// }

// export default App;

//////////////////////////CONTEXT API//////////////////////////

import React from "react";
import "./App.css";
import Login from "./pro/ContexAPii/Components/Login";
import Profile from "./pro/ContexAPii/Components/Profile";
import UserContextProvider from "./pro/ContexAPii/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>ContextAPi</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
