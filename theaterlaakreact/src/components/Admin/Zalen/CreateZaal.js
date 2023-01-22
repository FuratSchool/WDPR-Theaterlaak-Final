import React, { Component } from "react";
import { SideNav } from "../../SideNav/SideNav";

export class CreateZaal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      Title: "",
      SoortZaal: "",
    };
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  create(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch("http://localhost:5044/api/Zaal", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: this.state.Title,
        SoortZaal: this.state.SoortZaal,
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

  render() {
    return (
      <div class="row">
        <SideNav></SideNav>
        <div class="col-md-9">
          <div class="card mb-3">
            <div class="card-body">
              <h3 class="fw-lighter">Voorstelling toevoegen</h3>
              <form method="post">
                <div class="row mb-3">
                  <div class="col">
                    <label for="Input.Title">Zaal naam</label>
                    <input
                      type="text"
                      name="Title"
                      class="form-control"
                      placeholder="Zaal naam"
                      onChange={(e) =>
                        this.handleChange({ Title: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                {/* <div class="mb-3">
                  <label for="customRange1" class="form-label">
                    Aantal zitplaatsen
                  </label>
                  <div class="row">
                    <div class="col-2 text-end">0</div>
                    <div class="col-8">
                      <input
                        type="range"
                        class="form-range"
                        min="30"
                        max="250"
                        step="0.5"
                        id="customRange3"
                      ></input>
                    </div>
                    <div class="col-2 text-start">250</div>
                  </div>
                </div> */}
                <div class="col-md-12 mb-3">
                  <button
                    type="button"
                    class="btn btn-info text-white"
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
