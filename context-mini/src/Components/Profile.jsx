import React, { useCallback } from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>KEi ta hala</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
