import React, { useContext } from "react";
import UserContext from "../UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <h1>Please login to see your profile</h1>;
  }
  return (
    <>
      <h1>Profile</h1>
      <h2>{user.userName}</h2>
      <h2>{user.password}</h2>
    </>
  );
}

export default Profile;
