import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";

import "./index.css";

const Submit = ({count, filter}) => {
  const item_counter = count ? <span>({count} st)</span> : "";

  const params = queryString.stringify(filter, {arrayFormat: "bracket"});
  const location = {
    pathname: "/result",
    search: `?${params}`
  };

  return (
    <Link to={location} className="Submit">
      Se lägenheter {item_counter}
    </Link>
  );
}

export default Submit;
