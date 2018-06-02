import React, {Component} from "react";

import Map from "../../components/Map";
import Pin from "../../components/Pin";
import Apartment from "../../components/Apartment";
import Pagination from "../../components/Pagination";
import Shortcuts from "../../components/Shortcuts";

import formatter from "../../../../services/formatter";

class Loaded extends Component {
  state = {
    index: 0
  };

  setIndex(index, center = false) {
    if (index < 0 || index > this.props.apartments.length - 1) {
      return;
    }

    if (center && this.map) {
      const {lat, lng} = this.props.apartments[index].location;
      const center = new window.google.maps.LatLng(lat, lng);
      this.map.panTo(center);
    }

    this.setState({index});
  }

  visitCurrent() {
    window.open(this.props.apartments[this.state.index].url, "_blank");
  }

  render() {
    const {index} = this.state;
    const {filter, apartments} = this.props;
    const apartment = apartments[this.state.index];

    return (
      <div className="Result">
        <Shortcuts
          bind={[
            {keys: ["j", "right"], help: "Nästa lägenhet", fn: () => this.setIndex(this.state.index + 1, true)},
            {keys: ["k", "left"], help: "Föregående lägenhet", fn: () => this.setIndex(this.state.index - 1, true)},
            {keys: ["g"], help: "Första lägenheten", fn: () => this.setIndex(0, true)},
            {keys: ["G"], help: "Sista lägenheten", fn: () => this.setIndex(apartments.length - 1, true)},
            {keys: ["enter"], help: "Besök annonsen", fn: () => this.visitCurrent()},
          ]}
        />
        <div className="Result--header">
          <div className="Result--logo">Lghkarta.se</div>
          <div className="Result--filter">
            Maxhyra: {formatter.rent(filter.rent)};{" "}
            Antal rum: {formatter.rooms(filter.rooms)};{" "}
            {formatter.types(filter.types || [], "; ")}
          </div>
        </div>
        <div className="Result--apartment">
          <Pagination
            index={index}
            min={0}
            max={apartments.length}
            onClick={i => this.setIndex(i, true)}
          />
          <Apartment data={apartment} />
        </div>
        <Map
          containerElement={<div className="Result--map" />}
          onMapMounted={ref => this.map = ref}
        >
          {apartments.map((x, i) => (
            <Pin
              key={x.id}
              position={x.location}
              onClick={() => this.setIndex(i)}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default Loaded;
