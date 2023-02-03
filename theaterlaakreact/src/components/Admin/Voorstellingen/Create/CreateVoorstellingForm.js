import FetchZalen from "../FetchZalen";
import FetchBand from "./FetchBand";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, FormGroup, Label, ButtonDropdown } from "reactstrap";
import { API_BASE_URL } from '../../../../apiConfig';

export function CreateVoorstellingForm() {
  const [Title, setTitle] = useState("");
  const [Genre, setGenre] = useState("");
  const [Description, setDescription] = useState("");
  const [Date, setDate] = useState("");
  const [Zaal, setZaal] = useState("");
  const [Groep, setGroep] = useState("");
  const [Tijd, setTijd] = useState("");
  const [Prijs, setPrijs] = useState("");

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    // add entity - POST
    fetch(`${API_BASE_URL}/api/voorstelling`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Title: Title,
        Genre: Genre,
        Description: Description,
        Datum: Date,
        ZaalId: Zaal,
        GroepId: Groep,
        Tijd: Tijd,
        Prijs: Prijs,
      }),
    }).then((response) => {
      console.log(response);
      response.ok ? navigate("/admin/voorstellingen") : alert("poging mislukt");
    });
  }
  return (
    <Form onSubmit={submitHandler}>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="Input.Title">Title</label>
          <input
            type="text"
            name="Title"
            htmlFor="Title"
            className="form-control"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="Genre">Genre</label>
          <select
            className="form-select"
            name="Genre"
            aria-label="Genre"
            defaultValue={"Klassiek"}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="Klassiek">Klassiek</option>
            <option value="Dans">Dans</option>
            <option value="Musical">Musical</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="Description">Description</label>
        <textarea
          className="form-control"
          name="Description"
          placeholder="Plaats hier meer informatie over een voorstelling"
          id="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="Prijs">Prijs</label>
        <input
          type="number"
          className="form-control"
          name="Prijs"
          placeholder="Prijs"
          id="Prijs"
          onChange={(e) => setPrijs(e.target.value)}
        ></input>
      </div>
      <div className="row mb-3">
        <div className="col">
          <FormGroup controlid="dob">
            <Label>Date</Label>
            <Input
              type="date"
              name="startDate"
              placeholder="startDate"
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
        </div>
      </div>
      <div className="col-4">
        <FormGroup controlid="Tijd">
          <Label>end Date</Label>
          <Input
            type="time"
            name="Tijd"
            placeholder="Tijd"
            onChange={(e) => setTijd(e.target.value)}
          />
        </FormGroup>
      </div>
      <div className="mb-3">
        <label htmlFor="Zaal">Zaal</label>
        <select
          className="form-select"
          name="Zaal"
          aria-label="Zaal"
          onChange={(e) => setZaal(e.target.value)}
        >
          <FetchZalen></FetchZalen>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="Groep">Groep</label>
        <select
          className="form-select"
          name="Groep"
          aria-label="Groep"
          onChange={(e) => setGroep(e.target.value)}
        >
          <FetchBand></FetchBand>
        </select>
      </div>

      <div className="col-md-12 mb-3">
        <button type="submit" className="btn btn-info text-white">
          Voeg toe
        </button>
      </div>
    </Form>
  );
}
