import React from "react";
import queryString from "query-string";
import {GOOGLE_MAPS_KEY} from "../../../../../../services/settings";

import "./index.css";

const StreetImage = ({latitude, longitude}) => {
  const url = "https://maps.googleapis.com/maps/api/streetview";
  const params = queryString.stringify({
    size: "320x150",
    location: `${latitude},${longitude}`,
    pitch: 5,
    source: "outdoor"
  });

  return (
    <img
      className="StreetImage"
      src={`${url}?${params}&key=${GOOGLE_MAPS_KEY}`}
      alt="Gatuvy av lägenheten"
    />
  );
};

export default StreetImage;
