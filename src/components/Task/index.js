import React from "react";
import "./style.css";

const Task = ({
  user_icon,
  task_msg,
  task_date,
  task_time,
  assigned_user,
  user_id,
  handleEditTask,
  setTaskDescription,
  setTaskDate,
  setTaskTime,
  setTaskUser,
  setUserId,
}) => {
  const handleEdit = () => {
    handleEditTask();
    setTaskDescription(task_msg);
    setTaskDate(task_date);
    setTaskTime(task_time);
    setTaskUser(assigned_user);
    setUserId(user_id);
  };
  return (
    <div className="oneTaskContainer">
      <img height="50" width="50" src={user_icon} alt="avatar" />
      <div className="messageDateContainer">
        <span className="taskMessage">{task_msg}</span>
        <span className="taskDate">
          {task_date.split("-").reverse().join("/")}
        </span>
      </div>
      <div className="taskButtonContainer">
        <button className="editbutton taskbutton" onClick={handleEdit}>
          Edit
        </button>
        <button className="delcancel taskbutton">Not</button>
        <button className="delcancel taskbutton">SS</button>
      </div>
    </div>
  );
};

export default Task;
