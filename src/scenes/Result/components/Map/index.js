import React from "react";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import {GOOGLE_MAPS_JS, GOOGLE_MAPS_KEY, MAP_CENTER, MAP_ZOOM_LEVEL} from "../../../../services/settings";

const GMap = withScriptjs(withGoogleMap(({children}) => {
  return (
    <GoogleMap defaultZoom={MAP_ZOOM_LEVEL} defaultCenter={MAP_CENTER} options={{gestureHandling: "cooperative"}}>
      {children}
    </GoogleMap>
  );
}));

const Map = ({containerElement, children}) => {
  return (
    <GMap
      googleMapURL={`${GOOGLE_MAPS_JS}&key=${GOOGLE_MAPS_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={containerElement}
      mapElement={<div style={{ height: `100%` }} />}
      children={children}
    />
  );
};

export default Map;
