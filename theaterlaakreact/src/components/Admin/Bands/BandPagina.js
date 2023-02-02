import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BandSchema from "./BandSchema";
import { SideNav } from "../../SideNav/SideNav";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export class Bandpagina extends Component {
  render() {
    return (
      <div className="row">
        <SideNav></SideNav>
        <div className="col-md-9">
          <h3 className="fw-lighter">Voeg een band toe</h3>
          <hr></hr>
          <Link
            className="btn btn-info text-white mb-3"
            to={"/admin/band/create"}
          >
            Band toevoegen
          </Link>
          <h3 className="fw-lighter">Artiest toevoegen aan band</h3>
          <hr></hr>
          <p className="titel4">Alle bands</p>
          <div className="tabellen">
            <div className="tafel1">
              <BandSchema />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
