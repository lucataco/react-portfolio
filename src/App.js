import React, { useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-196736856-1");
    ReactGa.pageview("/");
  }, []);

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
