import React, { Component } from "react";
import GetAllVoorstellingen from "../Voorstellingen/GetAllVoorstellingen";

import "../css/style.css";

export class Voorstellingen extends Component {
  static displayName = Voorstellingen.name;
  render() {
    return (
      <React.Fragment>
        <section class="Search-Section mb-3 ">
          <div class="container   ">
            <div class="card calendar d-flex justify-content-center">
              <div class="card-body">
                <div class="col-md-6">test</div>
                <div class="col-md-6"></div>
              </div>
            </div>
          </div>
        </section>
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
