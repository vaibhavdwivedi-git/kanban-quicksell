import React from "react";
import Card from "../Card";
import Profile from "../Profile";
import styles from "./index.module.css";
import { sortByPriority, sortByTitle } from "../../services/utils";

const Board = ({ data, users, options }) => {
  const groupKeys = Object.keys(data[options.grouping]);

  const priorities = ["No priority", "Low", "Medium", "High", "Urgent"];

  return (
    <div className={styles.container}>
      {groupKeys.map((groupKey) => {
        let group;
        if (options.sorting == "priority") {
          group = sortByPriority(data[options.grouping][groupKey]);
        } else {
          group = sortByTitle(data[options.grouping][groupKey]);
        }

        const user = users.find((user) => user.id === groupKey);

        return (
          <div className={styles.body}>
            <div className={styles.header}>
              {options.grouping == "user" ? <Profile user={user} /> : <></>}
              <p>
                {options.grouping == "user"
                  ? user.name
                  : options.grouping == "priority"
                  ? priorities[groupKey]
                  : groupKey}
              </p>
              <p className={styles.count}>
                {data[options.grouping][groupKey].length}
              </p>
              <p className={styles.icons} style={{ marginLeft: "auto" }}>
                +
              </p>
              <img src="/icons/settings.svg" />
            </div>
            {group.map((ticket, index) => {
              const user = users.find((user) => user.id === ticket.userId);
              return <Card key={index} ticket={ticket} user={user} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
