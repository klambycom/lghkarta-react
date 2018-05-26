import React, { Component } from 'react';
import Home from '../Home';

import {ApolloProvider} from "react-apollo";
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

import './index.css';

const httpLink = new HttpLink({uri: "http://localhost:4000/api/graphql"});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
