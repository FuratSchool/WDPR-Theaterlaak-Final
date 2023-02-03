import React, { useState, useEffect } from "react";
import axios from "axios";
import { DropdownItem } from "reactstrap";
import { API_BASE_URL } from '../../../apiConfig';
function FetchZalen() {
  const [succesdata, setsuccesdata] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/Zaal`)
      .then((response) => {
        console.log(response.data);
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
      {succesdata.map((s) => (
        <option key={s.zaalId} id={s.zaalId}>
          {s.zaalId}
        </option>
      ))}
    </>
  );
}

export default FetchZalen;
