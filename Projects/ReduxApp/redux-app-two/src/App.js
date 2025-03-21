import "./App.css";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import GetData from "./GetData";

function App() {
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const dispatch = useDispatch();

  const pushData = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;

    if (name && email) {
      // Dispatching the action to store the user data in Redux store
      dispatch(
        login({
          user_name: name,
          user_email: email,
        })
      );
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="App">
      <h1>FORM</h1>
      <span>
        <lable className="label">Name : </lable>
        <input ref={nameRef} type="text" className="input" />
      </span>
      <span>
        <lable className="label">Email : </lable>
        <input ref={emailRef} type="text" className="input" />
      </span>
      <br />
      <button onClick={pushData} className="btn">
        Submit
      </button>
      <GetData />
    </div>
  );
}

export default App;
