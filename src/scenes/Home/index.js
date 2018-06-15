import React, { Component } from 'react';
import image_png from './image.png';
import image_webp from './image.webp';
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
              <picture>
                <source type="image/webp" srcSet={image_webp} />
                <img src={image_png} alt="Karta och Turning torso" />
              </picture>
            </div>
        </div>
      </Page>
    );
  }
}

export default Home;
