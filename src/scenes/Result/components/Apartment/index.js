import React from "react";

import StreetImage from "./components/StreetImage";
import Visit from "./components/Visit";

import formatter from "../../../../services/formatter";

import "./index.css";

const Apartment = ({data}) => {
  const {url, location, type, availableDate, lastDate, address, facts} = data;

  return (
    <div className="Apartment">
      <header className="Apartment--header">
        <span>{formatter.type(type)}</span>
        <h2>{address.formatted}</h2>
      </header>
      <StreetImage latitude={location.lat} longitude={location.lng} />
      <ul className="Apartment--dates">
        <li>Tillgänglig från {availableDate}</li>
        <li>Ansök senast {lastDate}</li>
      </ul>
      <ul className="Apartment--facts">
        <li>{facts.area} m2</li>
        <li>{facts.rent} kr/mån</li>
        <li>{facts.rooms} rum</li>
        <li>{facts.balcony}</li>
        <li>{facts.bathtub}</li>
        <li>{facts.landlord}</li>
        <li>Internet från {facts.internet}</li>
        <li>TV från {facts.tv}</li>
      </ul>
      <Visit url={url} />
    </div>
  );
};

export default Apartment;
