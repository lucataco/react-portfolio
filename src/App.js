import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <div className="main-info">
        <Profile />
      </div>
      <div className="footer" style={{ fontSize: 11, color: "gray" }}>
        &copy; 2022 @ Luis Catacora
      </div>
      <Analytics />
    </div>
  );
}

export default App;
