import React from "react";

const Tasks = () => {
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
        <button style={{ width: "10%" }}>+</button>
      </div>
    </div>
  );
};

export default Tasks;
