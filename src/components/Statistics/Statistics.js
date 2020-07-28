import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок
import styles from "./Statistics.module.css"; //подключение стилей

function Statistics({ title, children }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}> Upload stats </h2>}
      {children}
    </section>
  );
}

Statistics.defaultProps = {
  title: false,
};

Statistics.propTypes = {
  title: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Statistics;
