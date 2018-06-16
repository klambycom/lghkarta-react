import React, {Component} from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import formatter from "../../../../services/formatter";
import history from "../../../../services/history";

import Label from "./components/Label";
import Range from "./components/Range";
import MultiSelect from "./components/MultiSelect";
import Submit from "./components/Submit";
import History from "./components/History";

import {MAX_RENT, MIN_RENT, STEP_RENT, ROOM_VALUES, TYPES, MAX_ROOMS} from "../../../../services/settings";

import "./index.css";

class Filter extends Component {
  state = {
    rent: MAX_RENT,
    rooms: [],
    types: ["apartment", "new_construction"],
    filter_history: [],
  };

  componentDidMount() {
    this.setState({filter_history: history.all()});
  }

  render() {
    const {rent, rooms, types, filter_history} = this.state;
    const filter = {rent, rooms, types};

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
        <Query query={FILTER_QUERY} variables={{...filter, max_rooms: MAX_ROOMS}}>
          {({loading, error, data}) => {
            if (loading) return <Submit filter={filter} />;
            if (error) return `Error! ${error.message}`;

            return <Submit count={data.filter.nrOfItems} filter={filter} />;
          }}
        </Query>
        <History items={filter_history} />
      </div>
    );
  }
}

const FILTER_QUERY = gql`
  query FilterQuery($rent: Int!, $rooms: [Int]!, $max_rooms: Int!, $types: [String]!) {
    filter(maxRent: $rent, rooms: $rooms, maxRooms: $max_rooms, types: $types) {
      nrOfItems
    }
  }
`;

export default Filter;
