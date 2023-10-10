import React, { useEffect, useState } from "react";

import styles from "./index.module.css";

const Header = ({ options, setOptions }) => {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(false);
    }, 500);
  }, [options]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.button} onClick={() => setShowModal(!showModal)}>
          <img
            src="icons/slider.png"
            style={{ width: "18px", height: "20px", marginRight: "12px" }}
            alt="Slider Icon"
          />
          <p>Display</p>
          <img src="icons/chevron-down.svg" alt="Chevron Icon" />
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.parameter}>
            <p>Grouping</p>
            <select
              name="grouping"
              className={styles.select}
              value={options.grouping}
              onChange={handleChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className={styles.parameter}>
            <p>Ordering</p>
            <select
              name="ordering"
              className={styles.select}
              value={options.ordering}
              onChange={handleChange}
            >
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
