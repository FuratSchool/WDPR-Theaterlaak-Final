import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export function RegisterForm() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [Voornaam, setVoornaam] = useState("");
  const [Achternaam, setAchternaam] = useState("");
  const [UserName, setUserName] = useState("");

  const navigate = useNavigate();
  function Register(e) {
    e.preventDefault();

    fetch("http://localhost:5044/api/Authentication/Register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: Email,
        PassWord: PassWord,
        UserName: UserName,
        Voornaam: Voornaam,
        Achternaam: Achternaam,
      }),
    })
      .then((response) => {
        navigate("/login");
      })

      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form id="registerForm" className="mb-3" onSubmit={(e) => Register(e)}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          name="Voornaam"
          htmlFor="Voornaam"
          placeholder="Voornaam"
          onChange={(e) => setVoornaam(e.target.value)}
        />
        <label htmlFor="UserName">Voornaam</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          name="Achternaam"
          htmlFor="Achternaam"
          placeholder="Achternaam"
          onChange={(e) => setAchternaam(e.target.value)}
        />
        <label htmlFor="UserName">Achternaam</label>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          name="UserName"
          htmlFor="UserName"
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          htmlFor="Password"
          className="form-control"
          placeholder="password"
          onChange={(e) => setPassWord(e.target.value)}
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
        className="w-100 btn btn-lg btn-info btn-purple text-white"
      >
        Register
      </button>
    </form>
  );
}
export default RegisterForm;
