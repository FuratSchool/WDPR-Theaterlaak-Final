import React, { Component } from "react";
import { SideNav } from "../../SideNav/SideNav";
import AddMedewerkerRole from "./AddMedewerkerRole";

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
            <h3 className="fw-lighter">Add MedewerkerRole to User</h3>
            <hr></hr>
            <AddMedewerkerRole></AddMedewerkerRole>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
