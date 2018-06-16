import React, { Component } from 'react';

import {ApolloProvider} from "react-apollo";
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import asyncComponent from "../../components/AsyncComponent";

import Home from "../Home";
const AsyncResult = asyncComponent(() => import("../Result"));
const AsyncPrivacy = asyncComponent(() => import("../Privacy"));

const httpLink = new HttpLink({uri: "https://lghkarta.se/api/graphql"});

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
            <Route exact path="/result" component={AsyncResult} />
            <Route exact path="/privacy" component={AsyncPrivacy} />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
