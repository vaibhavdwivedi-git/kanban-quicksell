import React from "react";
import styles from "./index.module.css";

const Profile = ({ user, ...otherProps }) => {
  return (
    <>
      <div className={styles.container} {...otherProps}>
        <p style={{ marginLeft: "12px" }}>
          {user.name.charAt(0).toUpperCase()}
        </p>
        <div
          className={styles.status}
          style={
            user.available
              ? { backgroundColor: "#2B973B" }
              : { backgroundColor: "#DEE0E3" }
          }
        ></div>
      </div>
    </>
  );
};

export default Profile;
