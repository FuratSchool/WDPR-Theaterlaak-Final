import React, { useState, useEffect } from "react";
import { Button, CloseButton, ButtonGroup } from "reactstrap";
import axios from "axios";
import Rang from "./Rang";
import Stoel from "./Stoel";

const StoelReservatie = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5044/selectiestoelen/1")
      .then(function (res) {
        // handle success
        setData(res.data);
        console.log(res);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <Stoel 
      propOne={data}

      
      />
    </div>
  );
};

export default StoelReservatie;
