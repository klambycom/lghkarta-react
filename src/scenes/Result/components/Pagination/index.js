import React from "react";
import "./index.css";

const Pagination = ({index, min, max, onClick}) => {
  return (
    <div className="Pagination">
      <div className="Pagination--text">Visar {index + 1} av {max}</div>
      <div className="Pagination--buttons">
        <button
          disabled={index === min}
          onClick={() => onClick(index - 1)}
        >&#10096;</button>
        <button
          disabled={index === max - 1}
          onClick={() => onClick(index + 1)}
        >&#10097;</button>
      </div>
    </div>
  );
};

export default Pagination;
