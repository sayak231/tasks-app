import React, { useState, useEffect } from "react";
import TaskInputs from "../TaskInputs";
import TaskList from "../TaskList";

import { connect } from "react-redux";
import { getTasks } from "../../redux/actions/tasks-action";

const Tasks = (props) => {
  const [inputTask, setInputTask] = useState(false);

  useEffect(() => {
    props.getTasksAction();
  }, []);

  const handleOnAdd = () => {
    setInputTask(true);
  };

  console.log("data is", props.data, props.message);
  return (
    <div
      style={{
        height: "auto",
        width: "35%",
        marginLeft: "2vw",
        backgroundColor: "blue",
      }}
    >
      <div
        style={{
          height: "6vh",
          width: "100%",
          display: "flex",
          backgroundColor: "grey",
        }}
      >
        <span style={{ width: "90%" }}>Tasks 0</span>
        <button onClick={handleOnAdd} style={{ width: "10%" }}>
          +
        </button>
      </div>
      {inputTask ? <TaskInputs setInputTask={setInputTask} /> : <TaskList />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.TasksReducer.getTasksList.results,
  message: state.TasksReducer.getTasksList.message,
});

const mapDispatchToProps = (dispatch) => ({
  getTasksAction: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
