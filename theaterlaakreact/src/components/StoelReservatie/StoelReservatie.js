import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import data from './data.json';
import AllRang from './AllRang';
import GeselecteerdeStoelen from './GeselecteerdeStoelen';


const StoelReservatie = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6"> <AllRang parentToChild={data} /></div>
          <div className="col"><GeselecteerdeStoelen /></div>
        </div>
      </div>
    </>
  )
}

export default StoelReservatie
