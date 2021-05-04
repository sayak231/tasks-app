import React from "react";
import "font-awesome/css/font-awesome.min.css";
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
          <i className="fa fa-pencil"></i>
        </button>
        <button className="delcancel taskbutton">
          <i className="fa fa-bell"></i>
        </button>
        <button className="delcancel taskbutton">
          <i className="fa fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
