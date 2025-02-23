import React, { createContext, useContext } from "react";

export const ThemeContext = createContext();
// const ThemeContext = React.createContext();// another way to create context when you dont import createContext from 'react'

export const Context = () => {
  return useContext(ThemeContext);
};

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
