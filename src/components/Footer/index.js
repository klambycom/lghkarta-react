import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

import image from "./footer.png";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer" style={{backgroundImage: `url(${image})`}}>
        <div className="Footer--about">
          <h2>Om Lghkarta.se</h2>
          <p>Tjänsten är helt gratis och länkar bara ut till annonserna hos Boplatssyd. Det är hos dem du gör intresseanmälan och du behöver därför stå i deras bostadskö. Jag har tänkt lägga till fler sidor någon gång i framtiden.</p>
          <p>Jag skapade denna webbplats eftersom jag själv letar efter lägenhet och ville se lägenheterna på en karta.</p>
        </div>
        <div className="Footer-links">
          <span>&#127850; <Link to="/privacy">Kakor och sekretessinställningar</Link></span>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
