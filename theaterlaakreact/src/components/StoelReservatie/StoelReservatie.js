import React, { useState, useEffect, createContext, useContext } from "react";
import Rang from "./Rang";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./bg.css";
import { StoelReservatieContext } from "../stoelReservatieContext";

const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState([]);
  const [idStoelen, setIdStoelen] = useState([]);
  const [toCart, setToCart] = useState([]);

  let { voorstellingId } = useParams();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5044/selectiestoelen/" + voorstellingId
        );

        var rangen = [];
        for (let i = 0; i < res.data.length; i++) {
          let stoel = res.data[i];
          let rang = rangen.find(function (rang) {
            return rang.rangNr === stoel.rangNr;
          });
          if (!rang) {
            rang = {
              rangNr: stoel.rangNr,
              stoelen: [],
            };
            rangen.push(rang);
          }
          rang.stoelen.push(stoel);
        }

        setStoelen(rangen);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    sendGetRequest();
  }, []);

  console.log(stoelen);

  const stoelenLijst = stoelen.map((item, index) => (
    <div className="row">
      {item.rangNr}
      <Rang propOne={item} />
    </div>
  ));

  return (
    <>
      <StoelReservatieContext.Provider value={{idStoelen, setIdStoelen, toCart, setToCart}}>
        {stoelenLijst}
        <p>id stoelen: {JSON.stringify(idStoelen)}</p>
      </StoelReservatieContext.Provider>
    </>
  );
};

export default StoelReservatie;
