import React from "react";
import "./index.css";

const MultiSelect = (props) => {
  const options = props.options.map(x => {
    x.selected = props.selected.includes(x.value);
    return x;
  });

  return (
    <div className="MultiSelect">
      {props.label}
      <div className="MultiSelect--buttons">
        {options.map((x, i) => (
          <button
            className={x.selected ? "selected" : ""}
            value={x.value}
            onClick={() => {
              options[i].selected = !options[i].selected;
              props.onChange(options.filter(y => y.selected).map(y => y.value));
            }}
            key={x.value}
          >{x.text}</button>
        ))}
      </div>
    </div>
  );
}

export default MultiSelect;
