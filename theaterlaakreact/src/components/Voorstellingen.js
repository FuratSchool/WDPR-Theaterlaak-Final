import React, { useState, useEffect } from "react";
import VoorstellingCard from "./VoorstellingCard";
import axios from "axios";


export const Voorstellingen = () => {
  const [voorstellingen, setVoorstellingen] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5044/api/Voorstelling")
      .then(function (response) {
        // handle success
        setVoorstellingen(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[]);

  const voorstellingLijst = voorstellingen.map((item, index)=>(<div key={index}>{item.titel}</div>))

  return (
    <>
    {voorstellingLijst}
      <h1 className="fw-lighter">Alle Voorstellingen</h1>
      <hr className="fw-lighter"></hr>
      <div className="col-12">
        <div className="row">
          <VoorstellingCard />
          <VoorstellingCard />
          <VoorstellingCard />
        </div>
      </div>
    </>
  );
};
