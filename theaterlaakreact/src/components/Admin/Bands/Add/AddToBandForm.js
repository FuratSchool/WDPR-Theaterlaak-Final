import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import FetchBands from "../FetchBands";
import GetUserDetails from "../GetUserDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../../../apiConfig';


export function AddToBandForm() {
  const { id } = useParams();
  const [groupTitle, setGroupTitle] = useState("");
  const UserId = GetUserDetails();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    try {
      axios.get(`${API_BASE_URL}/api/Groep/${id}`).then((response) => {
        setGroupTitle(response.data.groepNaam);
      });
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5044/api/ArtiestGroup/`,
        {
          groepId: id,
          UserId: UserId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/admin/band/overzicht");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <div className="mb-3">
          <Label htmlFor="AddToBand">Bandnaam</Label>
          <select className="form-select" name="" aria-label="">
            <option>{groupTitle}</option>
          </select>
        </div>
        <div className="mb-3">
          <Label htmlFor="AddToBand">De ingelogde gebruiker</Label>
          <select
            className="form-select"
            name="Band"
            aria-label="Band"
            disabled
          >
            <option>{GetUserDetails()}</option>
          </select>
        </div>
        <Button className="btn btn-success">Toevoegen</Button>
      </FormGroup>
    </Form>
  );
}

export default AddToBandForm;
