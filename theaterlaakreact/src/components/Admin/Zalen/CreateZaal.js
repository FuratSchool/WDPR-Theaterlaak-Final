import React, { Component } from "react";
import { SideNav } from "../../SideNav/SideNav";
import { Link } from "react-router-dom";
import { API_BASE_URL } from '../../../apiConfig';

export class CreateZaal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      CapaciteitEersteRang: "",
      CapaciteitTweedeRang: "",
      CapaciteitDerdeRang: "",
    };
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  create(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch(`${API_BASE_URL}/api/Zaal/CreateZaal`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: this.state.Title,
        CapaciteitEersteRang: this.state.CapaciteitEersteRang,
        CapaciteitTweedeRang: this.state.CapaciteitTweedeRang,
        CapaciteitDerdeRang: this.state.CapaciteitDerdeRang,
      }),
    }).catch((err) => {
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
              <h3 class="fw-lighter">Zaal toevoegen</h3>
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
                <div class="mb-3">
                  <label for="customRange1" class="form-label">
                    Aantal zitplaatsen Voor Rang 1
                  </label>
                  <div class="row">
                    <div class="col-2 text-end">0</div>
                    <div class="col-8">
                      <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="25"
                        defaultValue={0}
                        step="1"
                        id="CapaciteitEersteRang"
                        onChange={(e) =>
                          this.handleChange({
                            CapaciteitEersteRang: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div class="col-2 text-start">25</div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="customRange1" class="form-label">
                    Aantal zitplaatsen Voor Rang 2
                  </label>
                  <div class="row">
                    <div class="col-2 text-end">0</div>
                    <div class="col-8">
                      <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="25"
                        defaultValue={0}
                        step="1"
                        id="CapaciteitTweedeRang"
                        onChange={(e) =>
                          this.handleChange({
                            CapaciteitTweedeRang: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div class="col-2 text-start">25</div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="customRange1" class="form-label">
                    Aantal zitplaatsen Voor Rang 3
                  </label>
                  <div class="row">
                    <div class="col-2 text-end">0</div>
                    <div class="col-8">
                      <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="25"
                        step="1"
                        defaultValue={0}
                        id="CapaciteitDerdeRang"
                        onChange={(e) =>
                          this.handleChange({
                            CapaciteitDerdeRang: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                    <div class="col-2 text-start">25</div>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <button
                    type="button"
                    to="/admin/overzicht"
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
