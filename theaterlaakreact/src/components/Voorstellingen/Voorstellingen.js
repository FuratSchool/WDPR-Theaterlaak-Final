import React, { Component } from "react";
import GetAllVoorstellingen from "../Voorstellingen/GetAllVoorstellingen";

import "../css/style.css";

export class Voorstellingen extends Component {
  static displayName = Voorstellingen.name;
  render() {
    return (
      <React.Fragment>

        <section class="Alle-voorstellingen mb-3">
          <h1 class="fw-lighter">Alle Voorstellingen</h1>
          <hr class="fw-lighter"></hr>
          <div class="row mb-3">
            <GetAllVoorstellingen />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
