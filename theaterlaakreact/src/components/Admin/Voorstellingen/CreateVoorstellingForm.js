import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateVoorstellingForm() {
  const [Title, setTitle] = useState("");
  const [Genre, setGenre] = useState("");
  const [Description, setDescription] = useState("");

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    // add entity - POST
    fetch("http://localhost:5044/api/voorstelling", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Title: Title,
        Genre: Genre,
        Description: Description,
      }),
    }).then((response) => {
      console.log(response);
      response.ok ? navigate("/") : alert("poging mislukt");
    });
  }
  return (
    <form onSubmit={submitHandler}>
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
            onChange={(e) => setGenre(e.target.value)}
          >
            <option defaultValue="klassiek">Klassiek</option>
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
      {/* <div className=" row mb-3">
                        <div className="col-6">
                            <label htmlFor="Date">Date</label>
                            <select className="form-select" aria-label="Date">
                                <option selected>Date</option>
                                <option value="1">One</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="Date">Image</label>
                            <input className="form-control" type="file" id="formFile"></input>
                        </div>
                    </div>*/}
      {/* <div className="mb-3">
      <label htmlFor="Genre">Zaal</label>
      <select className="form-select" aria-label="Zaal">
        <option defaultValue>Zaal</option>
  
        {items.map((item) => (
          <option key={item.id}>{item.Title}</option>
        ))}
        <option value="1">One</option>
      </select>
        </div> */}
      <div className="col-md-12 mb-3">
        <button type="submit" className="btn btn-info text-white">
          Voeg toe
        </button>
      </div>
    </form>
  );
}
