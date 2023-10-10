import "./App.css";
import React, { useState, useEffect } from "react";

import { groupData, fetchUser } from "./services/utils";

import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [options, setOptions] = useState(() => {
    const savedOptions = JSON.parse(localStorage.getItem("options"));
    return savedOptions || { grouping: "status", ordering: "priority" };
  });

  const [groups, setGroups] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  useEffect(() => {
    const setData = async () => {
      const grp = await groupData();
      const usr = await fetchUser();
      setGroups(grp);
      setUsers(usr);
    };
    setData();
  }, []);

  const handleChange = (updatedOptions) => {
    console.log(updatedOptions);
    setOptions((prevOptions) => ({
      ...prevOptions,
      ...updatedOptions,
    }));
  };

  return (
    <div>
      <Header options={options} setOptions={handleChange} />
      {JSON.stringify(groups) !== "{}" && (
        <Board options={options} data={groups} users={users} />
      )}
    </div>
  );
}

export default App;
