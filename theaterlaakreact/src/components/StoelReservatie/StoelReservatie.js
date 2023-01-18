import React, { useState, useEffect } from "react";
import { Button, CloseButton } from "reactstrap";
import data from "./data.json";
import Rang from "./Rang";
import Datum from './Datum';

const StoelReservatie = () => {
  
  const [stoelen, setStoelen] = useState(data);
  const [gereserveerdestoelen, setGereserveerdeStoelen] = useState([]);
  const [voorstellingDatum, setVoorstellingDarum] = useState(data);

  const resetStoelLists = () => {
    window.location.reload(false);
    setGereserveerdeStoelen([]);
  };



  const rangen = stoelen.map((stoel) => (
    <Rang
      stoelen={stoelen}
      onClicksetStoelen={setStoelen}
      onClickSetGereseerveerd={setGereserveerdeStoelen}
      onClickgereserveerdestoelen={gereserveerdestoelen}
      propOne={stoel}
    />
  ));


  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6">{rangen}</div>
          <div className="col">
            <div className="row sticky-top mt-5">
              <div><Datum/></div>
              <p>Mijn Gereserveerde stoelen:</p>
              <div className="row justify-content-end">
                <div className="col d-inline-flex flex-wrap my-2 gap-2">
                  {gereserveerdestoelen}

                    <CloseButton className="" onClick={resetStoelLists}/>
             
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
