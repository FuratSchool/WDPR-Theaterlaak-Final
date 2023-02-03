import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../../apiConfig';

export function RegisterForm() {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [PasswordConformatie, setPasswordConformatie] = useState("");

  const [UserName, setUserName] = useState("");
  const [Voornaam, setVoornaam] = useState("");
  const [Achternaam, setAchternaam] = useState("");
   // *"state" weergeeft de foutmeldingen
   // *"form " verander form-control, valid of invalid
  const [emailState, setEmailState] = useState(null);
  const [emailForm, setEmailForm] = useState("form-control");
  const [passwordState, setPasswordState] = useState(null);
  const [passwordForm, setPasswordForm] = useState("form-control");

  const [voornaamState, setVoornaamState] = useState(null);
  const [voornaamForm, setVoornaamForm] = useState("form-control"); 
  const [achternaamState, setAchternaamState] = useState(null);
  const [achternaamForm, setAchternaamForm] = useState("form-control");
  const [userNameState, setUserNameState] = useState(null);
  const [userNameForm, setUserNameForm] = useState("form-control");

  const navigate = useNavigate();

  function Register(e) {
    fetch(`${API_BASE_URL}/api/Authentication/Register`, {
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
    }).then((res) =>{
      if(res.status === 400){
        alert('Er bestaat al een gebruiker met dit emailadres of gebruikersnaam')
      }
      else{
        navigate("/login")
      }
    }).catch((err) => {  
      console.log(err);
    });
  }

  var validateVoornaam = (e) =>{
    if (e === ""){
      setVoornaamState("Voer een voornaam in")
      setVoornaamForm("form-control is-invalid")
      return false;
      
    }
    else{
      setVoornaamState(null)
      setVoornaamForm("form-control is-valid")
      return true;
    }
  }

  var validateAchternaam = (e) =>{
    if (e === ""){
      setAchternaamState("Voer een achternaam in")
      setAchternaamForm("form-control is-invalid")
      return false;
      
    }
    else{
      setAchternaamState(null)
      setAchternaamForm("form-control is-valid")
      return true;
    }
  }

  var validateUserName = (e) =>{
    if (e === ""){
      setUserNameState("Voer een username in")
      setUserNameForm("form-control is-invalid")
      return false;
      
    }
    else{
      setUserNameState(null)
      setUserNameForm("form-control is-valid")
      return true;
    }
  }



  var validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      setEmailState("Ongeldige Email-adress");
      setEmailForm("form-control is-invalid");
      if (Email === "") {
        setEmailState("Email is niet ingevuld");
      }
      return false;
    } else {
      setEmailState(null);
      setEmailForm("form-control is-valid");
      return true;
    }
  };

  var validatePasswordKarakter = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{7,}$/;
    if (!password.match(passwordRegex)) {
      return false;
    } else {
      return true;
    }
  };

  var validatePasswordConformatie = (password) => {
    if (!password.match(PassWord)) {
      return false;
    } else {
      if (password !== "") {
        return true;
      }
    }
  };

  var validatePasswordAll = () => {
    if (
      validatePasswordConformatie(PasswordConformatie) &&
      validatePasswordKarakter(PassWord)
    ) {
      setPasswordState(null);
      setPasswordForm("form-control is-valid");
      return true;
    }

    if (!validatePasswordConformatie(PasswordConformatie)) {
      setPasswordState("Wachtwoorden komen niet overeen");
    }

    if (!validatePasswordKarakter(PassWord)) {
      setPasswordState(
        "Ongeldig wachtwoord, wachtwoord bevat minimaal 1 hoofdletter, 1 kleine letter, een getal, een leesteken en heeft een minimale lengte van 7 karakters"
      );
    }

    if (
      !validatePasswordConformatie(PasswordConformatie) &&
      !validatePasswordKarakter(PassWord)
    ) {
      setPasswordState(
        "Wachtwoorden komen niet overeen en ongeldig wachtwoord, wachtwoord bevat minimaal 1 hoofdletter, 1 kleine letter, een getal, een leesteken en heeft een minimale lengte van 7 karakters"
      );
    }

    if (PassWord === "") {
      setPasswordState("Wachtwoord is niet ingevuld");
    }

    setPasswordForm("form-control is-invalid");
    return false;
  };

  const toonErrorMsg = (msg) => {
    if (msg !== null) {
      return String(msg);
    } else {
      return null;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateVoornaam(Voornaam)
    validateAchternaam(Achternaam)
    validateUserName(UserName)
    validateEmail(Email);
    validatePasswordAll();

    if (validatePasswordAll() && validateEmail(Email) && validateVoornaam(Voornaam) && validateAchternaam(Achternaam) && validateUserName(UserName) ) {
      Register(e);
     
    }
  };

  return (
    <>
      <div className="Form">
        <form id="registerForm" className="mb-3" data-cy="cyForm">

          <div className="form-floating mb-3">
            <input
              className={voornaamForm}
              type="text"
              name="Voornaam"
              placeholder="Voornaam"
              data-cy="cyVoornaam"
              onChange={(e) => setVoornaam(e.target.value)}
            />
            <label htmlFor="UserName">Voornaam</label>
          </div>

          <p className="text-danger">{toonErrorMsg(voornaamState)}</p>

          <div className="form-floating mb-3">
            <input
            
            className={achternaamForm}
              type="text"
              name="Achternaam"
              placeholder="Achternaam"
              data-cy="cyAchternaam"
              onChange={(e) => setAchternaam(e.target.value)}
            />
            <label htmlFor="UserName">Achternaam</label>
          </div>

          <p className="text-danger">{toonErrorMsg(achternaamState)}</p>

          <div className="form-floating mb-3">
        <input
          className={userNameForm}
          type="text"
          name="UserName"
          htmlFor="UserName"
          placeholder="UserName"
          data-cy="cyUserName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="UserName">UserName</label>
      </div>

      <p className="text-danger">{toonErrorMsg(userNameState)}</p>

          <div className="form-floating mb-3">
            <input
              className={emailForm}
              type="text"
              name="Email"
              htmlFor="Email"
              placeholder="Email"
              data-cy="cyEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Email">Email</label>
          </div>
          <p className="text-danger">{toonErrorMsg(emailState)}</p>
          <div className="form-floating mb-3">
            <input
              className={passwordForm}
              type="password"
              htmlFor="Password"
              placeholder="password"
              data-cy="cyPassword"
              onChange={(e) => setPassWord(e.target.value)}
            />
            <label htmlFor="Password">Password</label>
            <span htmlFor="Password" className="text-danger"></span>
          </div>

          <p className="text-danger">{toonErrorMsg(passwordState)}</p>

          <div className="form-floating mb-3">
            <input
              className={passwordForm}
              type="password"
              htmlFor="ConfirmPassword"
              autoComplete="new-password"
              aria-required="true"
              placeholder="password"
              data-cy="cyConfirmPassword"
              onChange={(e) => setPasswordConformatie(e.target.value)}
            />
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <span htmlFor="ConfirmPassword" className="text-danger"></span>
          </div>

          <button
            onClick={onSubmit}
            className="w-100 btn btn-lg btn-info btn-purple text-white"
            data-cy="cySubmitForm"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
export default RegisterForm;
