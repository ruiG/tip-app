import React, { useState } from "react";
import "./App.css";
import logo from "./images/tipsy-logo.png";

function App() {
  const [page, setPage] = useState(0);

  const selectPage = () => {
    switch (page) {
      case 0:
      default:
        return SplashScreen();
    }
  };

  return <div className="App">{selectPage()}</div>;
}

const SplashScreen = () => {
  return (
    <div className="spashScreen">
      <div className="logo">
        <img src={logo} className="App-logo" alt="Tipsy" />
      </div>

      <button>Start</button>
    </div>
  );
};

export default App;
