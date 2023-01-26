import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Verwijderfunctie from "./Delete/Verwijderfunctie";

function BandSchema() {
  const [succesdata, setsuccesdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5044/api/Groep")
      .then((response) => {
        console.log(response);
        setsuccesdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return succesdata.map((s) => (
    <tr key={s.groepId}>
      <td>{s.groepId}</td>
      <td>{s.groepNaam}</td>
      <td>
        {" "}
        <Button
          variant="outline-primary"
          onClick={() => Verwijderfunctie(s.groepId)}
        >
          Verwijder
        </Button>
      </td>
    </tr>
  )); //reference
}
export default BandSchema;
