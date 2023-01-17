import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import data from './data.json';
import AllRang from './AllRang';
import GereserveerdeStoelen from './GereserveerdeStoelen';


const StoelReservatie = () => {
  const [stoelenLijst] = useState(data)
  const [gereserveerdestoelenLijst, setGereserveerdeStoelenLijst] = useState([])
  const [mijnstoelenLijst, mijnStoelenLijst] = useState([])

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6"> <AllRang parentToChild={stoelenLijst} /></div>
          <div className="col">
            <p>Mijn Gereserveerde stoelen:</p>
            <Button color="success">Afronden</Button>
            </div>
        </div>
        
      </div>
      
    </>
  )
}

export default StoelReservatie
