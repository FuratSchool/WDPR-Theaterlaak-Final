import React, { useState, useEffect } from "react";
import { Button, CloseButton, ButtonGroup } from "reactstrap";
import Rang from "./Rang";
import Datum from "./Datum";
import data from "./data.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import Stoel from "./Stoel"
import './bg.css'
const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState([]);
  const [selectedLijst,setSelectedLijst] = useState([])
  

  let { voorstellingId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5044/selectiestoelen/" + voorstellingId)
      .then(function (response) {
        // handle success

        console.log(response);
        setStoelen(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const rangenLijst = stoelen.map((item, index) =>(
  <div className=""><h2> Rij {item.rangNr}</h2><Stoel propOne={item.stoelNr} propTwo={item}  setSelectedLijst={setSelectedLijst}/></div>))



  return (
    <>

        <div className="row flex-wrap">
          <div className="col-lg-12">
            {rangenLijst}
            </div>
          <div className="">
            <div className="row">
              <p>Mijn Geselecteerde stoelen:</p>
              {JSON.stringify(selectedLijst)}
       
                <Button color="success">Afronden</Button>

            </div>
          </div>
        </div>

    </>
  );
};

export default StoelReservatie;
