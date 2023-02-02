import React, { Component } from "react";
import BandsFormpagina from "./BandFormPagina";
import { SideNav } from "../../../SideNav/SideNav";

export class CreateBand extends Component {
  render() {
    return (
      <div className="row">
        <SideNav></SideNav>
        <div className="col-md-9">
          <BandsFormpagina />
        </div>
      </div>
    );
  }
}

export default CreateBand;
