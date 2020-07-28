import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок
import styles from "./Statistics.module.css"; //подключение стилей

//функция случайных цветов
function get_rand_color() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

function ListStat({ statistics }) {
  return (
    <ul className={styles.statList}>
      {statistics.map((datastat) => (
        <li
          className={styles.item}
          key={datastat.id}
          style={{ background: get_rand_color() }}
        >
          <span className={styles.label}> {datastat.label} </span>
          <span className={styles.percentage}> {datastat.percentage}% </span>
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
