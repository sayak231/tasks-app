import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <nav
        style={{ width: "10%", height: "100%", backgroundColor: "blueviolet" }}
      />
      <div
        style={{
          width: "90%",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Tasks />
      </div>
    </div>
  );
}

export default App;
