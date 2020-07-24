import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок

function FriendList({ children }) {
  return <ul className="friend-list">{children}</ul>;
}

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FriendList;
