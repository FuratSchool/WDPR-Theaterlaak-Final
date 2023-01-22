import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
export class Login extends Component {
  render() {
    return (
      <div className="row">
        <h2>Gebruik een account om in te loggen.</h2>
        <hr />
        <div className="col-md-6">
          <LoginForm />
        </div>
        <div className="col-md-6">
          <h3>Heb je nog geen account?</h3>
          <Link to={"/Register"} className="btn btn-info btn-purple text-white">
            Klik hier om je registreren!
          </Link>
        </div>
      </div>
    );
  }
}
