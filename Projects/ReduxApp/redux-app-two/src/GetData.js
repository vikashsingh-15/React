import React from "react";
import "./GetData.css";
import { useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";

function GetData() {
  // Using useSelector to access the Redux store state
  // const user = useSelector((state) => state.user.user);
  const user = useSelector(selectUser); //in user slice we have created a selector function to get the user data from the store, we can  use that function here directly.

  const dispatch = useDispatch(); // Using useDispatch to dispatch actions to the Redux store

  const logOut = () => {
    // Dispatching the logout action to clear user data from the Redux store
    dispatch(logout());
  };

  return (
    <div className="custom-getData">
      {!user ? (
        <h1>Please fill in the form to see the data.</h1>
      ) : (
        <div className="data">
          <h1>Data from Redux Store</h1>
          <p>Name: {user.user_name}</p>
          <p>Email: {user.user_email}</p>

          <button onClick={logOut}>LogOut</button>
        </div>
      )}
    </div>
  );
}

export default GetData;
