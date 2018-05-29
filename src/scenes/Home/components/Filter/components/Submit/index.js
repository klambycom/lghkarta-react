import React from "react";
import "./index.css";

const Submit = ({count, onClick}) => {
  const item_counter = count ? <span>({count} st)</span> : "";

  return (
    <button className="Submit" onClick={onClick}>
      Se lägenheter {item_counter}
    </button>
  );
}

export default Submit;
