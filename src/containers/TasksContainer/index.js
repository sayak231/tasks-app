import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserId,
  getTasks,
  postTasks,
  putTasks,
  deleteTasks,
} from "../../redux/actions/tasks-action";
import "font-awesome/css/font-awesome.min.css";
import TaskList from "../../components/TaskList";
import TaskInputs from "../../components/TaskInputs";
import TaskEdit from "../../components/TaskEdit";
import "./style.css";

const TasksContainer = () => {
  const userData = useSelector(
    (state) => state.TasksReducer.getUser.results?.first
  );
  const loadingUserData = useSelector(
    (state) => state.TasksReducer.getUser.loading
  );
  const taskData = useSelector(
    (state) => state.TasksReducer.getTasksList.results
  );
  const loadingGet = useSelector(
    (state) => state.TasksReducer.getTasksList.loading
  );
  const loadingPost = useSelector(
    (state) => state.TasksReducer.postTasksList.loading
  );
  const loadingPut = useSelector(
    (state) => state.TasksReducer.putTasksList.loading
  );
  const loadingDelete = useSelector(
    (state) => state.TasksReducer.deleteTasksList.loading
  );

  const postMessage = useSelector(
    (state) => state.TasksReducer.postTasksList.message
  );
  const putMessage = useSelector(
    (state) => state.TasksReducer.putTasksList.message
  );
  const deleteMessage = useSelector(
    (state) => state.TasksReducer.deleteTasksList.message
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserId());
    dispatch(getTasks());
  }, [dispatch]);

  const [taskList, setTaskList] = useState(null);
  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskUser, setTaskUser] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setTaskList(taskData?.length > 0);
  }, [taskData]);

  useEffect(() => {
    if (postMessage !== undefined) dispatch(getTasks());
  }, [dispatch, postMessage]);

  useEffect(() => {
    if (putMessage !== undefined) dispatch(getTasks());
  }, [dispatch, putMessage]);

  useEffect(() => {
    if (deleteMessage !== undefined) dispatch(getTasks());
  }, [dispatch, deleteMessage]);

  const handleAddTask = () => {
    setAddTask(true);
    setEditTask(false);
    setTaskList(false);
  };

  const handleAddTaskCancel = () => {
    setAddTask(false);
    setEditTask(false);
    setTaskList(taskData?.length > 0);
  };

  const handleEditTask = () => {
    setEditTask(true);
    setAddTask(false);
    setTaskList(false);
  };

  const handleEditTaskCancel = () => {
    setAddTask(false);
    setEditTask(false);
    setTaskList(taskData?.length > 0);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTasks(id));
    handleEditTaskCancel();
  };

  const handleAddANewTask = (obj) => {
    dispatch(postTasks(obj));
    handleEditTaskCancel();
  };

  const handleEditANewTask = (id, obj) => {
    dispatch(putTasks(id, obj));
    handleEditTaskCancel();
  };
  return (
    <div className="tasksContainer">
      <div className="tasksHeaderContainer">
        <span className="tasksHeader">
          <span className="tasksCaption">TASKS</span>
          <span className="taskLength">{taskData?.length}</span>
        </span>
        <button className="plusButton" onClick={handleAddTask}>
          +
        </button>
      </div>
      {!loadingUserData &&
      !loadingGet &&
      !loadingPost &&
      !loadingPut &&
      !loadingDelete ? (
        taskList ? (
          <TaskList
            setTaskDescription={setTaskDescription}
            setTaskDate={setTaskDate}
            setTaskTime={setTaskTime}
            setTaskUser={setTaskUser}
            listData={taskData}
            handleEditTask={handleEditTask}
            setUserId={setUserId}
          />
        ) : null
      ) : (
        <div className="loading">
          <h1>
            <i className="fa fa-spinner fa-spin spinner"></i>
          </h1>
        </div>
      )}

      {addTask ? (
        <TaskInputs
          userData={userData}
          handleAddANewTask={handleAddANewTask}
          handleAddTaskCancel={handleAddTaskCancel}
        />
      ) : null}
      {editTask ? (
        <TaskEdit
          userData={userData}
          taskDescription={taskDescription}
          taskDate={taskDate}
          taskTime={taskTime}
          taskUser={taskUser}
          userId={userId}
          handleEditTaskCancel={handleEditTaskCancel}
          handleDeleteTask={handleDeleteTask}
          handleEditANewTask={handleEditANewTask}
        />
      ) : null}
    </div>
  );
};

export default TasksContainer;
