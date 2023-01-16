import React, { Component } from 'react';
import { SideNav } from '../../SideNav/SideNav';

export class Plannen extends Component {


    render() {

        return (
            <div class="row">
                <SideNav></SideNav>
                <div class="col-md-9">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h3 class="fw-lighter">Overzicht seizoens planning</h3>

                            <section class="Seizoen">
                                <p>Seizoens nummer:</p>
                                <p>Datum seizoen start</p>

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
                            <section class="comment-section">
                                <br></br>
                                <h3>Comment sectie</h3>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 ">
                                        <img class="box-img" src="../images/card-img-1.jpg" alt="..."></img>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 ">
                                        <img class="box-img" src="../images/card-img-1.jpg" alt="..."></img>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 ">
                                        <img class="box-img" src="../images/card-img-1.jpg" alt="..."></img>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 ">
                                        <img class="box-img" src="../images/card-img-1.jpg" alt="..."></img>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
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

