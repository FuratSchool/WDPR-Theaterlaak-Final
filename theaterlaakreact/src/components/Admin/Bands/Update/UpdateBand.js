import React, { Component } from "react";
import PropTypes from "prop-types";
import { SideNav } from "../../../SideNav/SideNav";
import { AddToBand } from "./UpdateBand";
import UpdateBandForm from "./UpdateBandForm";

export class UpdateBand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row mb-3">
        <SideNav></SideNav>
        <div className="col-md-9">
          <h3 className="fw-lighter">Band Updaten</h3>
          <hr></hr>
          <UpdateBandForm></UpdateBandForm>
        </div>
      </div>
    );
  }
}
export default UpdateBand;
