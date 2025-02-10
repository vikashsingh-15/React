import { useState } from "react";
import React from "react";

const FormFunction = () => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of the form and does not refresh the page
    // alert("Form submitted with input value =" + password);
    alert("Form submitted with input value = " + e.target[0].value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={password} onChange={handleChange} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default FormFunction;
