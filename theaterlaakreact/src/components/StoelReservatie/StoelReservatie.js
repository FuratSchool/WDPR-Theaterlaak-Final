import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import data from "./data.json";
import Rang from "./Rang";
import "./StoelReservatie.css";

const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState(data);
  const [gereserveerdestoelen, setGereserveerdeStoelen] = useState([]);
  const [mijnstoelen, mijnStoelen] = useState([]);

  const rangen = stoelen.map((s) => <Rang propOne={s} />);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6">{rangen}</div>
          <div className="col">
            <div className="row sticky-top mt-5">
              <p>Mijn Gereserveerde stoelen:</p>
              <Button color="success">Afronden</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoelReservatie;
