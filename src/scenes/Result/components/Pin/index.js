import React from "react";
import {Marker} from "react-google-maps";

const Pin = ({position, onClick}) => {
  return (
    <Marker position={position} onClick={onClick}>
    </Marker>
  );
};

export default Pin;
