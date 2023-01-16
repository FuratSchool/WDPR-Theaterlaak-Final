import React, { Component } from "react";
import { SideNav } from "../../SideNav/SideNav";

export class CreateVoorstelling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      Title: "",
      Genre: "",
      Description: "test",
    };
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  create(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch("http://localhost:5044/api/voorstelling", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: this.state.Title,
        Genre: this.state.Genre,
        Description: this.state.Description,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect() {}

  render() {
    return (
      <div className="row">
        <SideNav></SideNav>
        <div className="col-md-9">
          <div className="card mb-3">
            <div className="card-body">
              <h3 className="fw-lighter">Voorstelling toevoegen</h3>
              <form onSubmit={this.createClick}>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="Input.Title">Title</label>
                    <input
                      type="text"
                      name="Title"
                      value={this.state.Title}
                      htmlFor="Title"
                      className="form-control"
                      placeholder="Title"
                      onChange={(e) =>
                        this.handleChange({ Title: e.target.value })
                      }
                    ></input>
                  </div>
                  <div className="col">
                    <label htmlFor="Genre">Genre</label>
                    <select
                      className="form-select"
                      name="Genre"
                      aria-label="Genre"
                      onChange={(e) =>
                        this.handleChange({ Genre: e.target.value })
                      }
                    >
                      <option value="Klassiek">Klassiek</option>
                      <option value="Dans">Dans</option>
                      <option value="Musical">Musical</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Voorstellings Descriptie</label>
                  <textarea
                    className="form-control"
                    name="Description"
                    placeholder="Plaats hier meer informatie over een voorstelling"
                    id="Description"
                    onChange={(e) =>
                      this.handleChange({ Description: e.target.value })
                    }
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
                <div className="mb-3">
                  <label htmlFor="Genre">Zaal</label>
                  <select className="form-select" aria-label="Zaal">
                    <option selected>Zaal</option>

                    {/* {items.map((item) => (
                      <option key={item.id}>{item.Title}</option>
                    ))} */}
                    <option value="1">One</option>
                  </select>
                </div>
                <div className="col-md-12 mb-3">
                  <button
                    type="button"
                    className="btn btn-info text-white"
                    onClick={(e) => this.create(e)}
                  >
                    Voeg toe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
