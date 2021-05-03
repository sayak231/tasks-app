import React, { useState } from "react";

const TaskEdit = ({
  taskDescription,
  taskDate,
  taskTime,
  taskUser,
  userId,
  handleEditTaskCancel,
  handleDeleteTask,
  handleEditANewTask,
}) => {
  const [editDataObject, setEditDataObject] = useState({
    assigned_user: taskUser,
    task_date: taskDate,
    task_time: taskTime,
    is_completed: 0,
    time_zone: 19800,
    task_msg: taskDescription,
  });
  const [desp, setDesp] = useState(taskDescription);
  const [time, setTime] = useState(taskTime);
  const [date, setDate] = useState(taskDate);
  const [assigned, setAssigned] = useState(taskUser);
  const handleEditDescriptions = (e) => {
    setDesp(e.target.value);
    setEditDataObject({
      assigned_user: assigned,
      task_date: date,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: e.target.value,
    });
  };
  const handleEditDate = (e) => {
    setDate(e.target.value);
    setEditDataObject({
      assigned_user: assigned,
      task_date: e.target.value,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };
  const handleEditTime = (e) => {
    const timeArray = e.target.value.split(":");
    const seconds = timeArray[0] * 3600 + timeArray[1] * 60;
    setTime(seconds);
    setEditDataObject({
      assigned_user: assigned,
      task_date: date,
      task_time: seconds,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };
  const handleEditAssigned = (e) => {
    setAssigned(e.target.value);
    setEditDataObject({
      assigned_user: e.target.value,
      task_date: date,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };

  const handleEdit = () => {
    handleEditANewTask(userId, editDataObject);
  };
  return (
    <div className="taskInputContainer">
      <div className="taskDescriptionContainer">
        <label htmlFor="desp">Task Description</label>
        <input
          id="inputBox"
          defaultValue={taskDescription}
          type="text"
          name="desp"
          onChange={handleEditDescriptions}
        />
      </div>
      <div className="dateTimeContainer">
        <div className="dateContainer">
          <label htmlFor="date">Date</label>
          <input
            id="dateTimeBox"
            defaultValue={taskDate}
            placeholder="dd-mm-yyyy"
            type="date"
            name="date"
            onChange={handleEditDate}
          />
        </div>
        <div className="timeContainer">
          <label htmlFor="time">Time</label>
          <input
            id="dateTimeBox"
            type="time"
            name="time"
            onChange={handleEditTime}
          />
        </div>
      </div>
      <div className="userContainer">
        <label htmlFor="users">Assign User</label>
        <select
          className="selectBox"
          defaultValue={taskUser}
          name="users"
          onChange={handleEditAssigned}
        >
          <option value="prem">Prem Kumar</option>
          <option value="sayak">Sayak</option>
          <option value="subi">Subi</option>
        </select>
      </div>
      <div className="ButtonContainer">
        <button onClick={() => handleDeleteTask(userId)}>Delete</button>
        <button className="cancelButton" onClick={handleEditTaskCancel}>
          Cancel
        </button>
        <button className="saveButton" onClick={handleEdit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskEdit;
