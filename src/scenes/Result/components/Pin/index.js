import React from "react";
import {Marker} from "react-google-maps";

const icon = {
  path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
  fillColor: "#FF0000",
  fillOpacity: .7,
  strokeWeight: 0,
  scale: .6
};

const icons = {
  default: icon,
  selected: {...icon, strokeColor: "#960000", strokeWeight: 4}
}

const Pin = ({position, icon, onClick}) => {
  return (
    <Marker
      position={position}
      onClick={onClick}
      icon={icons[icon] || icons["default"]}
    />
  );
};

export default Pin;
