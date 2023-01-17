import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import data from "./data.json";
import Rang from "./Rang";
import StoelSelectie from "./StoelSelectie";

const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState(data);
  const [gereserveerdestoelen, setGereserveerdeStoelen] = useState([]);
  const [mijnstoelen, mijnStoelen] = useState([]);

  // useEffect(()=>{
  //   gereserveerdestoelen.forEach(element => {
  //     if(stoelen.some(element)){
  //       setStoelen(current => current.filter(element))
  //     }
  //   });
  // }, [stoelen]
  // )

  const rangen = stoelen.map((stoel) => (
    <Rang stoelen={stoelen} onClicksetStoelen={setStoelen}onClickGereseerveerd={setGereserveerdeStoelen} propOne={stoel} />
  ));

  return (
    <>
  
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6">{rangen}</div>
          <div className="col">
            <div className="row sticky-top mt-5">
              Mijn Gereserveerde stoelen:
              <div className="row">
                <div className="col d-inline-flex flex-wrap my-2 gap-2">
                  {gereserveerdestoelen}
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
