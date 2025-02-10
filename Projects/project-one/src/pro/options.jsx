import React from "react";
import { useState } from "react";

const Options = () => {
  const [selectedOption, setSelectedOption] = React.useState("1");

  return (
    <>
      <h1>Options</h1>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>

        {/* or */}

        {/* <option x="1">Option 1</option>
        <option x="2">Option 2</option>
        <option x="3">Option 3</option>
        <option x="4">Option 4</option> */}
      </select>

      <p>Selected Option: {selectedOption}</p>
    </>
  );
};

export default Options;
