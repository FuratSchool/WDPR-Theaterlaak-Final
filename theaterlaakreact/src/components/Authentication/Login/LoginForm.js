import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
export function LoginForm() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();

  function LoginHandler(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5044/api/Authentication/Login/", {
        Email: Email,
        PassWord: PassWord,
      })
      .then(function (response) {
        console.log(response.data.token);
        console.log(response);

        return response;
      })
      .then(async (result) => {
        if (result?.data.token) {
          await signIn({
            token: result.data.token,
            tokenType: "Bearer",
            expiresIn: 60,
            authState: { Email: Email },
          });
          navigate("/userhome");
          alert("gelukt");
        } else {
          alert("mislukt");
        }
      });
  }

  return (
    <form onSubmit={LoginHandler}>
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <label asp-for="Input.Email" className="form-label">
          Email
        </label>
        <span asp-validation-for="Input.Email" className="text-danger"></span>
      </div>
      <div className="form-floating mb-3">
        <input
          asp-for="Input.Password"
          className="form-control"
          autoComplete="current-password"
          aria-required="true"
          placeholder="password"
          onChange={(e) => setPassWord(e.target.value)}
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
          className="w-100 btn btn-lg btn btn-info btn-purple text-white"
        >
          Log in
        </button>
      </div>
    </form>
  );
}
export default LoginForm;
