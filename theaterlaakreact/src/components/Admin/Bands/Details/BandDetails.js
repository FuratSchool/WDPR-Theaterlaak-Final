import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import FetchBands from "../FetchBands";
import GetUserDetails from "../GetUserDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

export function BandDetails() {
  const { id } = useParams();
  const [groupTitle, setGroupTitle] = useState("");
  const [groupWebsite, setGroupWebsite] = useState("");
  const [groupLogo, setGroupLogoLink] = useState("");

  const [successData, setSuccessData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5044/api/Groep/${id}`)
      .then((response) => {
        setSuccessData(response.data);
        setGroupTitle(response.data.groepNaam);
        setGroupWebsite(response.data.bandWebsite);
        setGroupLogoLink(response.data.logoLink);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div class="card mb-3" style={{ maxwidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="../../../images/card-img-1.jpg"
            alt="Voorstelling"
            class="card-custom card-img-top"
          ></img>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Groep Titel: {groupTitle}</h5>
            <h5 class="card-title">Groep Website: {groupWebsite}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
