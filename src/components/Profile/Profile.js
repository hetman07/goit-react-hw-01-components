import React from "react";
import PropTypes from "prop-types"; //npm пакет для отлавливания ошибок
import styles from "./Profile.module.css"; //подключение стилей

function Profile({ name, tag, location, avatar, children }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name"> {name} </p> <p className="tag"> @{tag} </p>{" "}
        <p className="location"> {location} </p>{" "}
      </div>{" "}
      {children}{" "}
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Profile;
