import React, { Component } from "react";
import { SideNav } from "../../.././SideNav/SideNav";
import { CreateVoorstellingForm } from "./CreateVoorstellingForm";

export class CreateVoorstelling extends Component {
  render() {
    return (
      <div className="row">
        <SideNav></SideNav>
        <div className="col-md-9">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="fw-lighter">Voorstelling toevoegen</h3>
              <CreateVoorstellingForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
