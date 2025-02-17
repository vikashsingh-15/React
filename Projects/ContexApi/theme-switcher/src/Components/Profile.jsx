import React, { useState, useRef, useEffect } from "react";

const FormFunction = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default behavior of the form and does not refresh the page
    alert("Form submitted with input value =" + name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus(); // focuses on the input field
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={name} onChange={handleChange} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default FormFunction;

// import React, { useState } from "react";

// const FormFunction = () => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted with input value =" + name);
//   };

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={handleChange}
//       />
//       <input type="submit" value="submit" />
//     </form>
//   );
// };

// export default FormFunction;
