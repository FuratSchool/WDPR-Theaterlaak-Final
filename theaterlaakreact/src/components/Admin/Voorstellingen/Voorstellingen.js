import React, { Component } from "react";
import { SideNav } from "../../SideNav/SideNav";

export class OverzichtVoorstelling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      Title: "",
      Genre: "",
      Description: "",
    };
  }

  render() {
    return (
      <div class="row">
        <SideNav></SideNav>
        <div class="col-md-9">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-8">
                  <h3 class="fw-lighter">Uitgelichte Voorstellingen</h3>
                </div>
                <div class="col-md-4 text-end">
                  <button
                    type="button"
                    class="btn-custom btn btn-outline-info mb-3 text-end"
                  >
                    Voeg voorstelling toe
                  </button>
                </div>
              </div>
              <div class="voorstellingen">
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Voorstelling titel</div>
                      Beschrijving
                    </div>
                    <span class="badge bg-success rounded-pill">Live</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
