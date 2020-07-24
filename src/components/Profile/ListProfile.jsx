import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок

function ListProfile({ stats }) {
  return (
    <ul className="stats">
      {Object.entries(stats).map((stat, idx) => (
        <li key={idx}>
          <span className="label"> {stat[0]} </span>
          <span className="quantity"> {stat[1]} </span>
        </li>
      ))}
    </ul>
  );
}

ListProfile.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default ListProfile;
//console.log()
