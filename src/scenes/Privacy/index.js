import React, {Component} from "react";
import Page from "../../components/Page";

class Privacy extends Component {
  render() {
    return (
      <Page>
        <div>
          <h1>Personuppgiftspolicy</h1>
          <p>Ingen information om dig sparas på servern. Webbplatsen använder cookies för att komma ihåg dina inställningar och optimera din upplevelse, cookies används inte för att analysera trafiken på webbplatsen.</p>

          <h2>GDPR</h2>
          <p>Vi sparar ingen information som kan identifiera dig. Vi skickar ingen information om dig till någon annan tjänst men vi använder Google Maps för kartan. Så om du är inloggad hos Google kan de antagligen identifiera dig. <a href="https://privacy.google.com/take-control.html">Här hittar du Googles sekretessinställningar.</a></p>

          <h2>Cookies</h2>
          <p>Cookies används för att göra Lghkarta.se bättre och enklare att använda. De sparas bara på din dator och används inte för att identifiera dig.</p>
          <p>Denna information sparas på din dator:</p>
          <ul>
            <li>[ ] De senaste sökningarna TODO</li>
            <li>[ ] Visade lägenheter TODO</li>
          </ul>
        </div>
      </Page>
    );
  }
}

export default Privacy;
