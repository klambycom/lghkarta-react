import React from "react";
import "./index.css";

const Range = (props) => {
  return (
    <div className="Range">
      {props.label}
      <div>
        <input
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          onInput={(e) => props.onChange(+e.target.value)}
          onChange={(e) => props.onChange(+e.target.value)}
        />
      </div>
    </div>
  );
}

export default Range;
