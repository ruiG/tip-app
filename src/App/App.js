import React, { useState } from "react";
import Form from "../components/Form";
import "./App.scss";
import logo from "../images/tipsy-logo.png";

function App() {
  const [activeForm, setActiveForm] = useState(false);

  const handleStart = () => {
    setActiveForm(true);
  };

  return (
    <div className="tipsy">
      <div className="tipsy__logo">
        <img src={logo} className="tipsy__logo__img" alt="Tipsy" />
      </div>

      {activeForm ? <Form /> : <button onClick={handleStart}>Start</button>}
    </div>
  );
}

export default App;
