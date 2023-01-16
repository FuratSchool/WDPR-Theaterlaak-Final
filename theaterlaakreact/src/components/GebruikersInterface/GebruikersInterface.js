import React from "react";
import theaterside from "../../assets/theaterside_01.png";
import "./GebruikersInterface.css";
import { Button } from "reactstrap";
import UserNavigatie from "./UserNavigatie";
import DonatieButtonLink from "../Donatie/DonatieButtonLink";

function GebruikersInterface() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 text-end">
            <p className="userTitel ">gebruikersnaam</p>
            <UserNavigatie />
            <p className="my-0">Wordt donateur om voorrang te ontvangen bij reserveringen!</p>
            <div className="my-2">
              <DonatieButtonLink />
            </div>
          </div>

          <div className="col-xl-6 mb-5">
            <img className="theaterImage" src={theaterside} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GebruikersInterface;
