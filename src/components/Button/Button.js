import React from "react";
import "./Button.scss";

const Button = ({ onClick, label }) => (
  <button className={"button"} onClick={onClick}>
    {label}
  </button>
);

export default Button;
