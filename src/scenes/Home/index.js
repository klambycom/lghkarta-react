import React, { Component } from 'react';
import image from './image.png';
import './index.css';

import Filter from "./components/Filter";
import Page from "../../components/Page";

class Home extends Component {
  render() {
    return (
      <Page className="Home">
        <div className="Home--container">
            <div className="Home--filter">
              <header className="Home--header">
                <h1>Hitta lediga lägenheter i Malmö</h1>
              </header>
              <Filter />
            </div>
            <div className="Home--image">
              <img src={image} alt="Karta och Turning torso" />
            </div>
        </div>
      </Page>
    );
  }
}

export default Home;
