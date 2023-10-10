import React from "react";
import styles from "./index.module.css";
import Profile from "../Profile";

const Card = ({ ticket, user }) => {
  const { id, title, tag } = ticket;
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className={styles.subText}>{id}</p>
        <Profile user={user} />
      </div>
      <h2 className={styles.headText}>{title}</h2>
      <div style={{ display: "flex", marginTop: "16px", gap: "8px" }}>
        <div className={styles.label}>
          <img src="/icons/exclamation.svg" alt="exclamation" />
        </div>

        <div className={styles.label}>
          <img src="/icons/circle.svg" />
          <p className={styles.subText}>{tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
