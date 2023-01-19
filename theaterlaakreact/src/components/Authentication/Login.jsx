import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      PassWord: "",
    };
  }

  LoginHandler(e) {
    e.preventDefault();
    fetch("http://localhost:5044/api/User/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: this.state.Email,
        PassWord: this.state.PassWord,
      }),
    })
      .then((response) =>
        response.ok ? response.json() : alert("inloggen mislukt")
      )
      .then((data) => {
        console.log(data);
        if (data) {
          alert("ingelogd als " + data.userName);
        } else {
          alert("inloggen mislukt");
        }
      });
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  render() {
    return (
      <div className="col-md-12">
        <section>
          <form onSubmit={(e) => this.LoginHandler(e)}>
            <h2>Gebruik een account om in te loggen.</h2>
            <hr />
            <div
              asp-validation-summary="ModelOnly"
              className="text-danger"
              role="alert"
            ></div>
            <div className="form-floating mb-3">
              <input
                asp-for="Input.Email"
                className="form-control"
                autoComplete="username"
                aria-required="true"
                placeholder="name@example.com"
                onChange={(e) => this.handleChange({ Email: e.target.value })}
              />
              <label asp-for="Input.Email" className="form-label">
                Email
              </label>
              <span
                asp-validation-for="Input.Email"
                className="text-danger"
              ></span>
            </div>
            <div className="form-floating mb-3">
              <input
                asp-for="Input.Password"
                className="form-control"
                autoComplete="current-password"
                aria-required="true"
                placeholder="password"
                onChange={(e) =>
                  this.handleChange({ PassWord: e.target.value })
                }
              />
              <label asp-for="Input.Password" className="form-label">
                Password
              </label>
              <span
                asp-validation-for="Input.Password"
                className="text-danger"
              ></span>
            </div>
            <div>
              <button
                id="submit"
                type="submit"
                className="w-100 btn btn-lg btn-primary"
              >
                Log in
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
