import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ items = [] }) =>
  items.map(item => (
    <li className="item" key={item.id}>
      <span className="status">{item.isOnline}</span>
      <img className="avatar" src={item.avatar} alt="" width="48" />
      <p className="name">{item.name}</p>
    </li>
  ));

FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FriendListItem;
