import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h1>Oops! Waarschijnlijk ben je verdwaald.</h1>
          <p>Klik hier om naar de homepagina te gaan:</p>
          <Link className="btn btn-purple text-white" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
