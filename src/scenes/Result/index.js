import React from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";

import Loaded from "./scenes/Loaded";

import create_filter from "./services/create_filter";

import "./index.css";

const Result = ({location}) => {
  let filter = create_filter(location.search);

  return (
    <Query query={FILTER_QUERY} variables={filter}>
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return <Loaded filter={filter} apartments={data.filter.items} />;
      }}
    </Query>
  );
}

const FILTER_QUERY = gql`
  query FilterQuery($rent: Int!, $rooms: [Int]!, $max_rooms: Int!, $types: [String]!) {
    filter(maxRent: $rent, rooms: $rooms, maxRooms: $max_rooms, types: $types) {
      items {
        id
        url
        availableDate
        lastDate
        type
        address {
          formatted
        }
        location {
          lat
          lng
        }
        facts {
          area
          rent
          rooms
          balcony
          internet
          tv
          landlord
          bathtub
        }
      }
    }
  }
`;

export default Result;
