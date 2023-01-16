import React, { Component } from 'react';
import { SideNav } from '../../SideNav/SideNav';

export class CreatePlanning extends Component {

    render() {

        return (
            <div class="row">
                <SideNav></SideNav>
                <div class="col-md-9">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h3 class="fw-lighter">Planning toevoegen</h3>
                            <form method="post">
                                <div class="row mb-3">
                                    <div class="col-6   ">
                                        <label for="Title">SeizoensTitel</label>
                                        <input type="text" for="Name" class="form-control" placeholder="SeizoensTitel"></input>
                                    </div>
                                    <div class="col-6">
                                        <div class="from-group">
                                            <div class="input-group">
                                                <span class="input-group-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                                                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"></path>
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                                                    </svg>
                                                </span>
                                                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="basic-addon1"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <label for="Genre">Selectie voorstellingen</label>
                                        <select class="form-select" aria-label="Selectie">
                                            <option selected>voorstelling 1</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3">

                                    <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">An item</li>
                                        <li class="list-group-item">A second item</li>
                                        <li class="list-group-item">A third item</li>
                                        <li class="list-group-item">An item</li>
                                        <li class="list-group-item">A second item</li>
                                        <li class="list-group-item">A third item</li>
                                    </ul>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <button type="button" class="btn btn-info text-white">Voeg toe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

