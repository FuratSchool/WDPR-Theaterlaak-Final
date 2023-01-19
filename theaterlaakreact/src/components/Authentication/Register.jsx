import React, { Component } from "react";
export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      PassWord: "",
      UserName: "",
    };
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  Register(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch("http://localhost:5044/api/User/Register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: this.state.Email,
        PassWord: this.state.PassWord,
        UserName: this.state.UserName,
      }),
    })
      .then((response) => {
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="col-md-12">
        <form
          id="registerForm"
          className="mb-3"
          onSubmit={(e) => this.Register(e)}
        >
          <h2>Create a new account.</h2>
          <hr />
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              name="UserName"
              htmlFor="UserName"
              placeholder="UserName"
              onChange={(e) => this.handleChange({ UserName: e.target.value })}
            />
            <label htmlFor="UserName">UserName</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              name="Email"
              htmlFor="Email"
              placeholder="Email"
              onChange={(e) => this.handleChange({ Email: e.target.value })}
            />
            <label htmlFor="Email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              htmlFor="Password"
              className="form-control"
              placeholder="password"
              onChange={(e) => this.handleChange({ PassWord: e.target.value })}
            />
            <label htmlFor="Password">Password</label>
            <span htmlFor="Password" className="text-danger"></span>
          </div>
          <div className="form-floating mb-3">
            <input
              htmlFor="ConfirmPassword"
              className="form-control"
              autoComplete="new-password"
              aria-required="true"
              placeholder="password"
            />
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <span htmlFor="ConfirmPassword" className="text-danger"></span>
          </div>
          <button
            id="registerSubmit"
            type="submit"
            className="w-100 btn btn-lg btn-primary"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}
