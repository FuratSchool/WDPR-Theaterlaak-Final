import React, { Component } from "react";
import { Link } from "react-router-dom";
import useNavigeer from "../../Navigeer";
import RegisterForm from "./RegisterForm";

export class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <h2>Create a new account.</h2>
        <hr />
        <div className="col-md-6">
          <RegisterForm></RegisterForm>
        </div>
        <div className="col-md-6">
          <h3>Heb je al een account?</h3>
          <Link
            to={"/login"}
            className="btn btn-info btn-purple text-white text-white"
          >
            Klik hier om in te loggen
          </Link>
        </div>
      </div>
    );
  }
}
