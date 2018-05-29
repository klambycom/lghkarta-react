import React, { Component } from 'react';
import Home from '../Home';

import {ApolloProvider} from "react-apollo";
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './index.css';

const httpLink = new HttpLink({uri: "http://localhost:4000/api/graphql"});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
