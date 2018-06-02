import React from "react";
import {Marker} from "react-google-maps";

const Pin = ({position, onClick}) => {
  return (
    <Marker
      position={position}
      onClick={onClick}
    />
  );
};

export default Pin;
