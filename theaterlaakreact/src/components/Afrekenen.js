import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, FormGroup, Modal } from "reactstrap";
import { v4 as uuid } from "uuid";
import Voorstelling, { MyReservering } from "./Voorstelling";
import AfrekenenModal from "./AfrekenenModal";
import { API_BASE_URL } from '../apiConfig';

export function Afrekenen(props) {
  const referenceGenerated = uuid();
  
  var details = {
    amount: props.propPrijs, //kosten <- gekregen van de Ww Parent component
    reference: referenceGenerated, //betaling id <-generate per betaling, per keer dat er op submit wordt geklikt(?)
    url: `${API_BASE_URL}/api/betaling`, //terugverwijzing aan het eind van de betaling, ontvangt id, reference en succes(bool)
  };
  var options = {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  };
  var betaalsite = "https://fakepay.azurewebsites.net/";

  const [streamBody, setBody] = useState("");

  useEffect(() => {
    axios
      .post(betaalsite, details, options)
      .then((response) => {
        console.log(response);
        setBody(response.data);
        return response.data;
      })
      .then((response) => {
        if (response.data) {
          // window.location.assign(response.data)
          setBody(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    axios
      .post(betaalsite, details, options)
      .then((response) => {
        console.log(response);
        setBody(response.data);
        return response.data;
      })
      .then((response) => {
        if (response.data) {
          // window.location.assign(response.data)
          setBody(response.data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <br></br>
      {/* <button onClick={afrekenenFetch}>Afrekenen</button> */}
      <AfrekenenModal srcDoc={streamBody} handleClick={handleClick} />
    </>
  );
}

export default Afrekenen;
