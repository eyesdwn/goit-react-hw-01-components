import React from "react";
import user from "../../user.json.js";
import UserDescription from "./UserDescription";
import UserStats from "./UserStats";

const Profile = () => (
  <div className="profile">
    <UserDescription {...user} />
    <UserStats {...user.stats} />
  </div>
);

export default Profile;
