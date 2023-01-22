import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SideNav } from "../../SideNav/SideNav";
import GetAllVoorstellingen from "./GetAllVoorstellingen";

export class OverzichtVoorstellingen extends Component {
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
                  <Link
                    type="button"
                    to={"/admin/voorstellingen/create"}
                    class="btn-custom btn btn-outline-info mb-3 text-end"
                  >
                    Voeg voorstelling toe
                  </Link>
                </div>
              </div>
              <div class="voorstellingen">
                <GetAllVoorstellingen />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
