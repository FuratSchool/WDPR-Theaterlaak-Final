import React, { useState, useEffect } from "react";
import { Button, CloseButton, ButtonGroup } from "reactstrap";
import Rang from "./Rang";
import Datum from "./Datum";
import data from "./data.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import Stoel from "./Stoel";
import "./bg.css";
const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState([]);

  

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

  console.log(stoelen)

  const stoelenLijst = stoelen.map((item, index) => (
    <div className="row">
      {item.rangNr}
      <Rang 
      propOne={item}
      
      />


    </div>
  ));

  return <>{stoelenLijst}</>;
};

export default StoelReservatie;

