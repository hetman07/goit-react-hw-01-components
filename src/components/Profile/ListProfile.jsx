import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок
import styles from "./Profile.module.css"; //подключение стилей

function ListProfile({ stats }) {
  return (
    <ul className={styles.stats}>
      {Object.entries(stats).map((stat, idx) => (
        <li className={styles.listStats} key={idx}>
          <span className={styles.label}> {stat[0]} </span>
          <span className={styles.quantity}> {stat[1]} </span>
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
