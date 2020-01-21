import React from "react";
import PropTypes from "prop-types";

const StatList = ({ items = [] }) => (
  <ul className="stat-list">
    {items.map(item => (
      <li key={item.id} className="item">
        <span className="label"> {item.label}</span>
        <span className="percentage"> {item.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};
export default StatList;
