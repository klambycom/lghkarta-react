import React from "react";
import FilterLink from "../FilterLink";
import formatter from "../../../../../../services/formatter";

import icon from "./icon.svg";
import "./index.css";

const History = ({items}) => {
  if (items.length === 0) { return null; }

  return (
    <div className="History">
      <h3>Dina tidigare sökningar</h3>
      {items.map((x, i) => (
        <span className="History--row" key={i}>
          <img src={icon} alt="" />{" "}
          <FilterLink filter={x}>
            Maxhyra: {formatter.rent(x.rent)}; Antal rum: {formatter.rooms(x.rooms)}; {formatter.types(x.types || [], "; ")}
          </FilterLink>
        </span>
      ))}
    </div>
  );
}

export default History;
