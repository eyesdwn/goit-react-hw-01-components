import React from "react";
import PropTypes from "prop-types";

const UserDescription = ({ name, tag, location, avatar }) => (
  <div className="description">
    <img src={avatar} alt="user avatar" className="avatar" />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
);

UserDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default UserDescription;
