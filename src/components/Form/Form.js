import React, { useState } from "react";

function Form() {
  const [activeForm, setActiveForm] = useState(false);

  const handleStart = () => {
    setActiveForm(true);
  };

  return <div className="form"></div>;
}

export default Form;
