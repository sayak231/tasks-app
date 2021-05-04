import React, { useState } from "react";
import TaskForm from "../TaskForm";

const TaskEdit = ({
  userData,
  taskDescription,
  taskDate,
  taskTime,
  taskUser,
  userId,
  handleEditTaskCancel,
  handleDeleteTask,
  handleEditANewTask,
}) => {
  let newDate = new Date();
  let fulldate = [
    newDate.getFullYear() < 10
      ? [0, newDate.getFullYear()].join("")
      : newDate.getFullYear(),
    newDate.getMonth() + 1 < 10
      ? [0, newDate.getMonth() + 1].join("")
      : newDate.getMonth(),
    newDate.getDate() < 10
      ? [0, newDate.getDate()].join("")
      : newDate.getDate(),
  ].join("-");
  const [editDataObject, setEditDataObject] = useState({
    assigned_user: userData,
    task_date: taskDate,
    task_time: taskTime,
    is_completed: 0,
    time_zone: 19800,
    task_msg: taskDescription,
  });
  const [desp, setDesp] = useState(taskDescription);
  const [time, setTime] = useState(taskTime);
  const [timeValue, setTimeValue] = useState(new Date());
  const [date, setDate] = useState(taskDate);
  const handleEditDescriptions = (e) => {
    setDesp(e.target.value);
    setEditDataObject({
      assigned_user: userData,
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
      assigned_user: userData,
      task_date: e.target.value,
      task_time: time,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };
  const handleEditTime = (localDate) => {
    let timeStr = localDate.toString().split(" ")[4].split(":");
    timeStr = timeStr.map((i) => Number(i));
    const sec = timeStr[0] * 3600 + timeStr[1] * 60 + timeStr[2];
    setTime(sec);
    setTimeValue(localDate);
    setEditDataObject({
      assigned_user: userData,
      task_date: date,
      task_time: sec,
      is_completed: 0,
      time_zone: 19800,
      task_msg: desp,
    });
  };

  const handleEdit = () => {
    handleEditANewTask(userId, editDataObject);
  };
  return (
    <TaskForm
      edit={true}
      userData={userData}
      handleDescriptions={handleEditDescriptions}
      handleDate={handleEditDate}
      handleTime={handleEditTime}
      timeValue={timeValue}
      fulldate={fulldate}
      handleTaskCancel={handleEditTaskCancel}
      handleSave={handleEdit}
      taskDescription={taskDescription}
      taskDate={taskDate}
      taskUser={taskUser}
      handleDeleteTask={handleDeleteTask}
      userId={userId}
    />
  );
};

export default TaskEdit;
