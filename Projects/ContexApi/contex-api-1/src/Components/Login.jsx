import React, { useState, useContext } from "react";
import UserContext from "../UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSumit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleSumit}>Login</button>
    </>
  );
}

export default Login;
