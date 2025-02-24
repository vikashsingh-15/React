// import React, { createContext } from "react";

// export const ThemeContext = createContext();
// // const ThemeContext = React.createContext();// another way to create context when you dont import createContext from 'react'

// function ThemeProvider({ children }) {
//   return (
//     <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
//   );
// }

// export default ThemeProvider;

// --------way 2 --> here useContext is used in the same file (theme Provider)--------------------

// import React, { createContext, useContext } from "react";

// export const ThemeContext = createContext();

// export const Context = () => {
//   return useContext(ThemeContext);
// };

// function ThemeProvider({ children }) {
//   return (
//     <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
//   );
// }

// export default ThemeProvider;

// -----------------THEME TOGLER CODE --------------------

import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(false);

// export const Context = () => {
//   return useContext(ThemeContext);
// };
// or

export const Context = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
