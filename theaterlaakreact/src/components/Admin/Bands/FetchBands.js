import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "bootstrap";
import { DropdownItem } from "reactstrap";
import { API_BASE_URL } from '../../../apiConfig';


function FetchBands() {
  const [succesdata, setsuccesdata] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/Groep`)
      .then((response) => {
        console.log(response);
        setsuccesdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        response = { setsuccesdata };
      });
  }, []);
  return (
    <>
      {
        succesdata.map((s) => (
          <option key={s.groepId}>{s.groepNaam}</option>
        )) //reference
      }
    </>
  );
}

export default FetchBands;
