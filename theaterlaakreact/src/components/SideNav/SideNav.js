import React, { Component, Fragment } from "react";
import "./SideMenu.css";

export class SideNav extends Component {
  static displayName = SideNav.name;

  constructor(props) {
    super(props);

    this.state = {
      userName: null,
    };
  }

  render() {
    const { isAuthenticated, userName } = this.state;

    return (
      <div className="col-md-3">
        <div className="SideNav">
          <div className="card mb-3">
            <div className="card-body">
              <ul className="nav custom-nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="Voorstellingen"
                    aria-current="page"
                    href="/"
                  >
                    Voorstellingen
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="Zalen" href="">
                    Zalen
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="Planningen" href="">
                    Planningen
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
