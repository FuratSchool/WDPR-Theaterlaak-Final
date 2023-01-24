import React, { useState, useEffect, createContext, useContext } from "react";
import Rang from "./Rang";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoelReservatieContext } from "../stoelReservatieContext";
import { Button } from "reactstrap";

const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState([]);
  const [idStoelen, setIdStoelen] = useState([]);
  const [voorstellinginfo, setVoorstellinginfo] = useState([]);

  let { voorstellingId } = useParams();

  useEffect(() => {
    const FetchBeschikbareStoelen = async () => {
      //get alle stoelen
      try {
        const response = await axios.get(
          "http://localhost:5044/beschikbarestoelen/" + voorstellingId
        );

        var rangen = [];
        for (let i = 0; i < response.data.length; i++) {
          let stoel = response.data[i];
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

    const FetchVoorstellinginfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5044/voorstellinginfo/" + voorstellingId
        );
        console.log(response.data);
        setVoorstellinginfo(String(response.data.map((item) => item.titel)));
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    FetchVoorstellinginfo();
    FetchBeschikbareStoelen();
  }, []);

  const stoelenLijst = stoelen.map((item, index) => (
    <div key={index}>
      <div className="h2">Rij nummer {item.rangNr}</div>
      <Rang propOne={item} />
    </div>
  ));

  return (
    <>
      <StoelReservatieContext.Provider value={{ idStoelen, setIdStoelen }}>
        <div className="row m-0 p-0">
          <div className="col-sm-6 m-0 p-0">{stoelenLijst}</div>
          <div className="col-sm-6  m-0 p-0">
            <div className="sticky-top mt-0">
              <h1>{voorstellinginfo}</h1>
              <img
                src="../images/card-img-1.jpg"
                className="card-custom card-img-top"
                alt="voorstelling naam"
              ></img>
              <Button className="mt-2 col-12" color="success">
                Bestelling afronden
              </Button>
              <Button className="mt-2 mb-5 col-6" color="warning">
                Bestelling naar winkelwagen
              </Button>
            </div>
          </div>
        {JSON.stringify(idStoelen)}
        </div>
      </StoelReservatieContext.Provider>
    </>
  );
};

export default StoelReservatie;
