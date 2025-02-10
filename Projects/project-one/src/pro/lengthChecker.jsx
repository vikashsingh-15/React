import React from "react";

export default function LengthChecker() {
  const [password, setpassword] = React.useState(0);

  return (
    <>
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <h1> Length = {password.length}</h1>
    </>
  );
}
