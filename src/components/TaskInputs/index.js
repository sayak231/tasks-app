import React, { useState } from "react";
import "./style.css";

const TaskInputs = ({ handleAddTaskCancel, handleAddANewTask }) => {
  const [addDataObject, setAddDataObject] = useState({
    assigned_user: "prem",
    task_date: "",
    task_time: 0,
    is_completed: 0,
    time_zone: 19800,
    task_msg: "Follow Up",
  });
  const [desp, setDesp] = useState("Follow Up");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [assigned, setAssigned] = useState("prem");
  const handleAddDescriptions = (e) => {
    setDesp(e.target.value);
    setAddDataObject({
      assigned_user: assigned,
      task_date: date,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: e.target.value,
    });
  };
  const handleAddDate = (e) => {
    setDate(e.target.value);
    setAddDataObject({
      assigned_user: assigned,
      task_date: e.target.value,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };
  const handleAddTime = (e) => {
    const timeArray = e.target.value.split(":");
    const seconds = timeArray[0] * 3600 + timeArray[1] * 60;
    setTime(seconds);
    setAddDataObject({
      assigned_user: assigned,
      task_date: date,
      task_time: seconds,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };
  const handleAddAssigned = (e) => {
    setAssigned(e.target.value);
    setAddDataObject({
      assigned_user: e.target.value,
      task_date: date,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };

  const handleOnAddWhole = () => {
    handleAddANewTask(addDataObject);
  };
  return (
    <div className="taskInputContainer">
      <div className="taskDescriptionContainer">
        <label htmlFor="desp">Task Description</label>
        <input
          defaultValue="Follow Up"
          id="inputBox"
          className="descriptionBox"
          type="text"
          name="desp"
          onChange={handleAddDescriptions}
        />
      </div>
      <div className="dateTimeContainer">
        <div className="dateContainer">
          <label htmlFor="date">Date</label>
          <input
            id="dateTimeBox"
            placeholder="dd-mm-yyyy"
            type="date"
            name="date"
            onChange={handleAddDate}
          />
        </div>
        <div className="timeContainer">
          <label htmlFor="time">Time</label>
          <input
            id="dateTimeBox"
            type="time"
            name="time"
            onChange={handleAddTime}
          />
        </div>
      </div>
      <div className="userContainer">
        <label htmlFor="users">Assign User</label>
        <select className="selectBox" name="users" onChange={handleAddAssigned}>
          <option value="prem">Prem Kumar</option>
          <option value="sayak">Sayak</option>
          <option value="subi">Subi</option>
        </select>
      </div>
      <div className="ButtonContainer">
        <button className="cancelButton" onClick={handleAddTaskCancel}>
          Cancel
        </button>
        <button className="saveButton" onClick={handleOnAddWhole}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskInputs;
