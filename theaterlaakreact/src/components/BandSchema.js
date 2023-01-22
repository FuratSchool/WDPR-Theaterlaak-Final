import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Verwijderfunctie from "./Verwijderfunctie";

function BandSchema() {
  const [succesdata, setsuccesdata] = useState([]);

  // const deleteMethod = {
  //   method: 'DELETE', // Method itself
  //   headers: {
  //    'Content-type': 'application/json; charset=UTF-8' // Indicates the content
  //   },
  //   // No need to have body, because we don't send nothing to the server.
  //  }
  //  // Make the HTTP Delete call using fetch api
  //  fetch('http://localhost:5044/api/Groep' + id, deleteMethod)
  //  .then(response => response.json())
  //  .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
  //  .catch(err => console.log(err))

  useEffect(() => {
    axios
      .get("http://localhost:5044/api/Groep")
      .then((response) => {
        console.log(response);
        setsuccesdata(response.data);
        console.log(response.GroepId);
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
