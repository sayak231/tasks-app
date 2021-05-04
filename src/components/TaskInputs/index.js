import React, { useState } from "react";
import TaskForm from "../TaskForm";

const TaskInputs = ({ handleAddTaskCancel, handleAddANewTask }) => {
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
  const [timeValue, setTimeValue] = useState(new Date());
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
  const handleAddTime = (localDate) => {
    let timeStr = localDate.toString().split(" ")[4].split(":");
    timeStr = timeStr.map((i) => Number(i));
    const sec = timeStr[0] * 3600 + timeStr[1] * 60 + timeStr[2];
    setTime(sec);
    setTimeValue(localDate);
    setAddDataObject({
      assigned_user: assigned,
      task_date: date,
      task_time: sec,
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
    <TaskForm
      edit={false}
      handleDescriptions={handleAddDescriptions}
      handleDate={handleAddDate}
      handleTime={handleAddTime}
      timeValue={timeValue}
      fulldate={fulldate}
      handleAssigned={handleAddAssigned}
      handleTaskCancel={handleAddTaskCancel}
      handleSave={handleOnAddWhole}
    />
  );
};

export default TaskInputs;
