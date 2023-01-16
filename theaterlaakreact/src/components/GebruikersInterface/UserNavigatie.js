import React from 'react';
import "./GebruikersInterface.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function UserNavigatie() {

  return (
    <div>
      <ul className="userNavigatie">
            <li Key="1">
              <Link to="../MijnReserveringen" className='click'>Mijn Reserveringen</Link>
            </li>
            <li Key="2">
              <Link to="#" className='click'>Account Beheren</Link>
            </li>
            <li Key="3">
              <Link to="#" className='click'>Mijn Band</Link>
            </li>
          </ul>
    </div>
  )
}

export default UserNavigatie
