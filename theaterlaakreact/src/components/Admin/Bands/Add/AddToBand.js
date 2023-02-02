import React, { Component } from "react";
import PropTypes from "prop-types";
import { SideNav } from "../../../SideNav/SideNav";
import AddToBandForm from "./AddToBandForm";

export class AddToBand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <SideNav></SideNav>
        <div className="col-md-9">
          <h3 className="fw-lighter">Artiest toevoegen aan band</h3>
          <hr></hr>
          <AddToBandForm></AddToBandForm>
        </div>
      </div>
    );
  }
}
export default AddToBand;
