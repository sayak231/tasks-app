import React, { useState } from "react";

const TaskInputs = ({ setInputTask }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskUser, setTaskUser] = useState("");
  console.log(taskDescription, taskDate, taskTime, taskUser);
  const handleOnDescription = (e) => {
    setTaskDescription(e.target.value);
  };
  const handleOnDate = (e) => {
    setTaskDate(e.target.value);
  };
  const handleOnTime = (e) => {
    setTaskTime(e.target.value);
  };
  const handleOnAssignUser = (e) => {
    setTaskUser(e.target.value);
  };
  const handleOnCancel = () => {
    setInputTask(false);
  };
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
        padding: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 0px",
        }}
      >
        <label
          style={{
            paddingBottom: "5px",
          }}
          htmlFor="desp"
        >
          Task Description
        </label>
        <input type="text" name="desp" onChange={handleOnDescription} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 0px",
          }}
        >
          <label
            style={{
              paddingBottom: "5px",
            }}
            htmlFor="date"
          >
            Date
          </label>
          <input type="date" name="date" onChange={handleOnDate} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 0px",
          }}
        >
          <label
            style={{
              paddingBottom: "5px",
            }}
            htmlFor="time"
          >
            Time
          </label>
          <input type="time" name="time" onChange={handleOnTime} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 0px",
        }}
      >
        <label
          style={{
            paddingBottom: "5px",
          }}
          htmlFor="users"
        >
          Assign User
        </label>
        <select onChange={handleOnAssignUser} name="users">
          <option value="prem">Prem Kumar</option>
          <option value="sayak">Sayak</option>
          <option value="subi">Subi</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 0px",
        }}
      >
        <button onClick={handleOnCancel}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default TaskInputs;
