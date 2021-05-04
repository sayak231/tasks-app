import React from "react";
import { TimePicker } from "baseui/timepicker";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";

const engine = new Styletron();

const TaskForm = ({
  edit,
  userData,
  handleDescriptions,
  handleDate,
  handleTime,
  timeValue,
  fulldate,
  handleTaskCancel,
  handleSave,
  taskDescription,
  taskDate,
  handleDeleteTask,
  userId,
}) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="taskInputContainer">
          <div className="taskDescriptionContainer">
            <label htmlFor="desp">Task Description</label>
            <div className="input-wrapper">
              <input
                defaultValue={edit ? taskDescription : "Follow Up"}
                id="inputBox"
                className="descriptionBox"
                type="text"
                name="desp"
                onChange={handleDescriptions}
              />
            </div>
          </div>
          <div className="dateTimeContainer">
            <div className="dateContainer">
              <label htmlFor="date">Date</label>
              <input
                defaultValue={edit ? taskDate : null}
                id="dateTimeBox"
                placeholder="dd-mm-yyyy"
                type="date"
                name="date"
                onChange={handleDate}
              />
            </div>
            <div className="timeContainer">
              <label htmlFor="time">Time</label>
              <TimePicker
                id="dateTimeBox"
                value={timeValue}
                step={1800}
                onChange={(date) => handleTime(date)}
                minTime={new Date(`${fulldate}T03:00:00.000Z`)}
                maxTime={new Date(`${fulldate}T13:00:00.000Z`)}
              />
            </div>
          </div>
          <div className="userContainer">
            <label htmlFor="users">Assign User</label>
            <select className="selectBox" name="users">
              <option value="prem">{userData}</option>
            </select>
          </div>
          <div className="ButtonContainer">
            {edit ? (
              <button
                className="delbutton"
                onClick={() => handleDeleteTask(userId)}
              >
                <i
                  className="fa fa-trash fa-2x trashColor"
                  aria-hidden="true"
                ></i>
              </button>
            ) : null}
            <button className="cancelButton" onClick={handleTaskCancel}>
              Cancel
            </button>
            <button className="saveButton" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default TaskForm;
