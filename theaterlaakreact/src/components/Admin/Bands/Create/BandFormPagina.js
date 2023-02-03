import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GetUserDetails from "../GetUserDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../../../apiConfig';




export function BandsFormpagina() {
  const Artiesten = GetUserDetails();
  const [GroepNaam, setGroepNaam] = useState();
  const [BandWebsite, setBandWebsite] = useState();
  const [LogoLink, setLogoLink] = useState();
  const navigate = useNavigate();

  function CreateGroup(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch(`${API_BASE_URL}/api/Groep`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        GroepNaam: GroepNaam,
        BandWebsite: BandWebsite,
        LogoLink: LogoLink,
        UserId: Artiesten,
      }),
    })
      .then((response) => {
        console.log(response);
        console.log(Artiesten);
        navigate("/admin/band/overzicht");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Form onSubmit={(e) => CreateGroup(e)}>
      <Form.Group className="mb-3">
        <Form.Label>Naam</Form.Label>
        <Form.Control
          type="text"
          placeholder="Vul de bandnaam in"
          onChange={(e) => setGroepNaam(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Logo</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setLogoLink(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          placeholder="Vul website in"
          onChange={(e) => setBandWebsite(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Maak
      </Button>
    </Form>
  );
}

export default BandsFormpagina;
