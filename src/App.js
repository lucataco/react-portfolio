import React from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="main-info">
        <Profile />
      </div>
      <div className="footer" style={{ fontSize: 11, color: "gray" }}>
        &copy; 2022 @ Luis Catacora
      </div>
    </div>
  );
}

export default App;
