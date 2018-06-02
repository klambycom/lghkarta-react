import React from "react";
import "./index.css";

const Visit = ({url}) => {
  return (
    <a href={url} target="_blank" className="Visit">
      <p className="Visit--text">Besök annonsen</p>
      <small className="Visit--url">{url}</small>
    </a>
  );
};

export default Visit;
