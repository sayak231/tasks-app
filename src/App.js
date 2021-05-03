import "./App.css";
import TasksContainer from "./containers/TasksContainer";

function App() {
  return (
    <div className="appContainer">
      <nav className="leftBar" />
      <div className="content">
        <TasksContainer />
      </div>
    </div>
  );
}

export default App;
