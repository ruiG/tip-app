import React, { useState } from "react";
import Form from "../components/Form";
import "./App.css";
import logo from "../images/tipsy-logo.png";

function App() {
  const [activeForm, setActiveForm] = useState(false);

  const handleStart = () => {
    setActiveForm(true);
  };

  return (
    <div className="splashScreen">
      <div className="logo">
        <img src={logo} className="App-logo" alt="Tipsy" />
      </div>

      {activeForm ? <Form /> : <button onClick={handleStart}>Start</button>}
    </div>
  );
}

export default App;
