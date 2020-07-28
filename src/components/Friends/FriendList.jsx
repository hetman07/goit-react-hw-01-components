import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок
import styles from "./Friends.module.css"; //подключение стилей

function FriendList({ children }) {
  return <ul className={styles.friendList}>{children}</ul>;
}

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FriendList;
