import React, { useState, useEffect } from "react";
import { Button, CloseButton, ButtonGroup } from "reactstrap";
import Rang from "./Rang";
import Datum from "./Datum";
import data from "./data.json"
import axios from "axios";

const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState(data);
  const [gereserveerdestoelen, setGereserveerdeStoelen] = useState([]);
  const [voorstellingDatum, setVoorstellingDarum] = useState([1, 2, 3]);
  const [datumSelected, setDatumSelected] = useState(null);



  const resetStoelLists = () => {
    window.location.reload(false);
    setGereserveerdeStoelen([]);
  };

  const rangen = stoelen.map((stoel, index) => (
    <Rang
      key={index}
      stoelen={stoelen}
      onClicksetStoelen={setStoelen}
      onClickSetGereseerveerd={setGereserveerdeStoelen}
      onClickgereserveerdestoelen={gereserveerdestoelen}
      propOne={stoel}
    />
  ));

  const datums = voorstellingDatum.map((item, index) => (
    <Datum
      key={index}
      datum={item}
      datumSelected={datumSelected}
      setDatumSelected={setDatumSelected}
    />
  ));

  return (
    <>
      <button>get data</button>

      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6">{rangen}</div>
          <div className="col">
            <div className="row sticky-top mt-5">
              <ButtonGroup>{datums}</ButtonGroup>
              <p>Mijn Gereserveerde stoelen:</p>
              <div className="row justify-content-end">
                <div className="col d-inline-flex flex-wrap my-2 gap-2">
                  {gereserveerdestoelen}

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
