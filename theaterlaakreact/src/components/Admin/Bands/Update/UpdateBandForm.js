import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import FetchBands from "../FetchBands";
import GetUserDetails from "../GetUserDetails";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from '../../../../apiConfig';




export function UpdateBandForm() {
  const { id } = useParams();
  const [groupTitle, setGroupTitle] = useState("");
  const [groupWebsite, setGroupWebsite] = useState("");
  const [groupLogoLink, setGroupLogoLink] = useState("");
  const [groepLeden, setGroupLeden] = useState([]);
  const navigate = useNavigate();

  async function DeleteArtiestById(id) {
    try {
      const res = await axios.delete(
        `${API_BASE_URL}/api/ArtiestGroup/${id}`
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  async function GetGroupbyId() {
    try {
      axios.get(`${API_BASE_URL}/api/Groep/${id}`).then((response) => {
        setGroupTitle(response.data.groepNaam);
        setGroupWebsite(response.data.bandWebsite);
        setGroupLogoLink(response.data.logoLink);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function GetArtistGroup() {
    try {
      axios
        .get(`${API_BASE_URL}/api/ArtiestGroup/${id}`)
        .then((response) => {
          setGroupLeden(response.data);
        });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    GetGroupbyId();
    GetArtistGroup();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/ArtiestGroup/${id}`,
        {
          GroepNaam: groupTitle,
        }
      );
      navigate("/admin/band/overzicht");

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup className="mb-3">
        <Label for="UpdateBandNaam">Bandnaam</Label>
        <Input
          type="BandNaam"
          value={groupTitle}
          name="BandNaam"
          id="BandNaam"
          placeholder="Naam van de band"
          onChange={(e) => setGroupTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <Label for="UpdateBandNaam">Bandwebsite</Label>
        <Input
          type="Bandwebsite"
          value={groupWebsite}
          name="Bandwebsite"
          id="Bandwebsite"
          placeholder="Website van de band"
          onChange={(e) => setGroupWebsite(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <Label for="UpdateBandNaam">Group Logo Link</Label>
        <Input
          type="groupLogoLink"
          name="groupLogoLink"
          value={groupLogoLink}
          id="groupLogoLink"
          placeholder="Logo van de band"
          onChange={(e) => setGroupLogoLink(e.target.value)}
        />
      </FormGroup>
      <h3>BandLeden</h3>
      {groepLeden.map(({ artiest }) => (
        <div className="card  mb-3" key={artiest.id}>
          <div className="card-header">ArtiestNaam: {artiest.voornaam}</div>
          <div className="card-body">
            <p className="card-text">Last name: {artiest.achternaam}</p>
            <p>Email: {artiest.email}</p>

            <Button
              className="btn btn-danger"
              onClick={() => DeleteArtiestById(artiest.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
      <Button className="btn btn-success" onClick={(e) => handleSubmit(e)}>
        Updaten
      </Button>
    </Form>
  );
}

export default UpdateBandForm;
