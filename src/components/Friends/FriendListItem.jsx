import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок
import styles from "./Friends.module.css"; //подключение стилей

function FriendListItem({ friends }) {
  return friends.map((friend) => (
    <li className={styles.item} key={friend.id}>
      <span
        className={friend.isOnline ? styles.statusOn : styles.statusOff}
      ></span>
      <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

FriendListItem.defaultProps = {
  isOnline: false,
};

export default FriendListItem;
