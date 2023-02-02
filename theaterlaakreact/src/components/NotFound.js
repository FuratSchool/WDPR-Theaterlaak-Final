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
          <Button className="btn btn-purple" to="/">
            Home
          </Button>
        </div>
      </div>
    );
  }
}

export default NotFound;
