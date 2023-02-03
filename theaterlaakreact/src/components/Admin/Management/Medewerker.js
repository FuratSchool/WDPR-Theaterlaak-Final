import React, { Component } from "react";
import { SideNav } from "../../SideNav/SideNav";
import AddArtiestRole from "./AddArtiestRole";

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <SideNav></SideNav>
          <div className="col-md-9">
            <h3 className="fw-lighter">Add ArtiestRole to User</h3>
            <hr></hr>
            <AddArtiestRole></AddArtiestRole>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
