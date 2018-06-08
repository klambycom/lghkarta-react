import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";

const FilterLink = ({filter, className, children}) => {
  const params = queryString.stringify(filter, {arrayFormat: "bracket"});
  const location = {
    pathname: "/result",
    search: `?${params}`
  };

  return (
    <Link to={location} className={className}>
      {children}
    </Link>
  );
}

export default FilterLink;
