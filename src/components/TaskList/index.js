import React from "react";
import Task from "../Task";

const TaskList = ({
  setTaskDescription,
  setTaskDate,
  setTaskTime,
  setTaskUser,
  listData,
  handleEditTask,
  setUserId,
}) => {
  return (
    <>
      {listData?.map((item) => (
        <Task
          key={item.id}
          user_icon={item.user_icon}
          task_msg={item.task_msg}
          task_date={item.task_date}
          task_time={item.task_time}
          assigned_user={item.assigned_user}
          user_id={item.id}
          handleEditTask={handleEditTask}
          setTaskDescription={setTaskDescription}
          setTaskDate={setTaskDate}
          setTaskTime={setTaskTime}
          setTaskUser={setTaskUser}
          setUserId={setUserId}
        />
      ))}
    </>
  );
};

export default TaskList;
