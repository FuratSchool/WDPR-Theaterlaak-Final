import React, { useState, useEffect } from "react";
import { Button, CloseButton, ButtonGroup } from "reactstrap";
import Rang from "./Rang";
import Datum from "./Datum";
import data from "./data.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import Stoel from "./Stoel"
const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState([]);
  const [gereserveerdestoelen, setGereserveerdeStoelen] = useState([]);

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
  <div className="row">{item.rangNr}<Stoel propOne={item.stoelNr}/></div>))

  const resetStoelLists = () => {
    window.location.reload(false);
    setGereserveerdeStoelen([]);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6">
            
            {rangenLijst}
            </div>
          <div className="col">
            <div className="row sticky-top mt-5">
              <p>Mijn Gereserveerde stoelen:</p>
              <div className="row justify-content-end">
                <div className="col d-inline-flex flex-wrap my-2 gap-2">
                  xxxxxx
                  <CloseButton className="" onClick={resetStoelLists} />
                </div>

                <Button color="success">Afronden</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoelReservatie;
