import React, { Component, Fragment } from "react";
import "./SideMenu.css";
import Nav from "react-bootstrap/Nav";

export class SideNav extends Component {
  static displayName = SideNav.name;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="SideNav">
          <div className="card mb-3">
            <div className="card-body">
              <Nav className="nav custom-nav flex-column">
                <Nav.Link
                  className="nav-item"
                  id="Voorstellingen"
                  aria-current="page"
                  href="/admin/voorstellingen"
                >
                  Voorstellingen
                </Nav.Link>

                <Nav.Link
                  className="nav-item"
                  id="Zalen"
                  href="/admin/zalen/create"
                >
                  Zalen
                </Nav.Link>
                <Nav.Link
                  className="nav-item"
                  id="Bands"
                  href="/admin/band/overzicht"
                >
                  Bands
                </Nav.Link>
                <Nav.Link
                  className="nav-item"
                  id="Admin Management"
                  href="/admin/management/AdminManagement"
                >
                  Admin Management
                </Nav.Link>
                <Nav.Link
                  className="nav-item"
                  id="Admin Management"
                  href="/admin/management/MedewerkerManagement"
                >
                  Medewerker Management
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
