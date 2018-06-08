import React from "react";
import FilterLink from "../FilterLink";

import "./index.css";

const Submit = ({count, filter}) => {
  const item_counter = count ? <span>({count} st)</span> : "";

  return (
    <FilterLink filter={filter} className="Submit">
      Se lägenheter {item_counter}
    </FilterLink>
  );
}

export default Submit;
