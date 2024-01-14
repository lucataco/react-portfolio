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
      <div className="footer" style={{ fontSize: 14, color: "gray" }}>
        {/* <p style={{ fontStyle: "italic" }}>me@lucataco.com</p> */}
        <p>
          &copy; 2024{" "}
          <a href="https://catacolabs.com" target="_blank">
            CatacoLabs
          </a>
        </p>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
