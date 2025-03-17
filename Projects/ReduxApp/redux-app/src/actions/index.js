export const Increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const Decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const loggedIn = (status) => {
  return {
    type: "SET_LOGGED_IN",
    payload: status,
  };
};
