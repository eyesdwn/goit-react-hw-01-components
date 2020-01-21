import React from "react";
import FriendListItem from "./FriendListItem";
import friends from "../../friends.json.js";

const FriendList = () => (
  <ul className="friend-list">
    <FriendListItem items={friends} />
  </ul>
);

export default FriendList;
