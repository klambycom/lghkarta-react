import React from "react";
import "./index.css";

const Label = (props) => {
  return (
    <div className="Label">
      <span>{props.text}</span>
      <span className="Label--selection">{props.extra}</span>
    </div>
  );
}

export default Label;
