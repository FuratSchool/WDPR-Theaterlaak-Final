import React, { Component } from 'react';
import { SideNav } from '../../SideNav/SideNav';

export class PlanningsOverzicht extends Component {


    render() {

        return (
            <div class="row">
                <SideNav />
                <div class="col-md-9">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h3 class="fw-lighter">Plannings overzicht</h3>
                                </div>
                                <div class="col-md-4 text-end">
                                    <button type="button" class="btn-custom btn btn-outline-info mb-3 text-end">Seizoen</button>
                                </div>
                            </div>
                            <section class="Seizoen">
                                <div class="row mb-3">
                                    <div class="col">
                                        <p>Seizoens nummer:</p>
                                    </div>
                                    <div class="col ">
                                        <a href="#" class="link-secondary float-end">Seizoen bekijken</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="card border-secondary mb-3">
                                            <div class="card-header">Header</div>
                                            <div class="card-body text-secondary">
                                                <h5 class="card-title">Secondary card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="link-secondary">Bekijken</a>
                                                <a href="#" class="link-secondary">Aanpassen</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="card border-secondary mb-3">
                                            <div class="card-header">Header</div>
                                            <div class="card-body text-secondary">
                                                <h5 class="card-title">Secondary card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="link-secondary">Bekijken</a>
                                                <a href="#" class="link-secondary">Aanpassen</a>                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="card border-secondary mb-3">
                                            <div class="card-header">Header</div>
                                            <div class="card-body text-secondary">
                                                <h5 class="card-title">Secondary card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="link-secondary">Bekijken</a>
                                                <a href="#" class="link-secondary">Aanpassen</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="card border-secondary mb-3">
                                            <div class="card-header">Header</div>
                                            <div class="card-body text-secondary">
                                                <h5 class="card-title">Secondary card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="link-secondary">Bekijken</a>
                                                <a href="#" class="link-secondary">Aanpassen</a>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

