import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок

function ListStat({ statistics }) {
  return (
    <ul className="stat-list">
      {statistics.map((datastat) => (
        <li className="item" key={datastat.id}>
          <span className="label"> {datastat.label} </span>
          <span className="percentage"> {datastat.percentage} % </span>
        </li>
      ))}
    </ul>
  );
}

ListStat.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ListStat;
