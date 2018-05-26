import React, {Component} from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import formatter from "../../../../services/formatter";

import Label from "./components/Label";
import Range from "./components/Range";
import MultiSelect from "./components/MultiSelect";

import {MAX_RENT, MIN_RENT, STEP_RENT, ROOM_VALUES, TYPES} from "../../../../services/settings";

import "./index.css";

class Filter extends Component {
  state = {
    rent: MAX_RENT,
    rooms: [],
    types: ["apartment", "new_construction"],
  };

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    const {rent, rooms, types} = this.state;

    return (
      <div className="Filter">
        <Range
          label={<Label text="Maxhyra" extra={formatter.rent(rent)} />}
          min={MIN_RENT}
          max={MAX_RENT}
          step={STEP_RENT}
          value={rent}
          onChange={rent => this.setState({rent})}
        />
        <MultiSelect
          label={<Label text="Antal rum" extra={formatter.rooms(rooms)} />}
          options={ROOM_VALUES}
          selected={rooms}
          onChange={rooms => this.setState({rooms})}
        />
        <MultiSelect
          label={<Label text="Lägenhetstyp" extra={formatter.types(this.state.types)} />}
          options={Object.keys(TYPES).map(value => ({value, text: TYPES[value]}))}
          selected={types}
          onChange={types => this.setState({types})}
        />
        <Query query={FILTER_QUERY} variables={{rent, rooms, types}}>
          {({loading, error, data}) => {
            if (loading) return "Loading... TODO This should still be a button!";
            if (error) return `Error! ${error.message}`;

            return (
              <button className="Filter--submit" onClick={() => this.handleSubmit()}>
                Se lägenheter <span>({data.filter.nrOfItems} st)</span>
              </button>
            );
          }}
        </Query>
      </div>
    );
  }
}

const FILTER_QUERY = gql`
  query FilterQuery($rent: Int!, $rooms: [Int]!, $types: [String]!) {
    filter(maxRent: $rent, rooms: $rooms, types: $types) {
      nrOfItems
    }
  }
`;

export default Filter;
