import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок

function FriendListItem({ friends }) {
  return friends.map((friend) => (
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
      <img className="avatar" src={friend.avatar} alt="" width="48" />
      <p className="name">{friend.name}</p>
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
