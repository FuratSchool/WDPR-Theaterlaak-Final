import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <React.Fragment>
                <div class="mb-3">
                    <div class="jumbotron-Height"
                        style={{
                            backgroundImage: `url("./images/jumbotron.jpg")`
                        }}
                    >
                        <div class="mt-4 p-5 text-white">
                            <h1 class="fw-bold text-white">Custom jumbotron</h1>

                            <h2 class="mb-4 text-white">
                                Jumbotron with background image
      </h2>                     </div>
                    </div>
                </div>
                <section class="uitgelichteVoorstellingen mb-3">
                    <h1 class="fw-lighter">Uitgelichte Voorstellingen</h1>
                    <hr class="fw-lighter"></hr>
                    <div class="col-md-12 text-end">
                        <button type="button" class="btn-custom btn btn-outline-info btn-outline-purple mb-3">Bekijk hier alle voorstellingen</button>

                    </div>
                    <div class="row mb-3">
                        <div class="col-md-4">

                            <div class="card card-custom card-border-gradient">
                                <div class="card-image">
                                    <img src="../images/card-img-1.jpg" alt="Voorstelling" class="card-custom card-img-top"></img>
                                </div>
                                <div class="container">
                                    <div class="card-homepage">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <p class="">21</p>
                                            </div>
                                            <div class="col-sm-4">
                                                <p class="">12</p>
                                            </div>
                                            <div class="col-sm-4 darker-card">
                                                <p class="">2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-light">Card title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisl nisi. Proin elementum ante velit, et vehicula nisi porttitor vel. Etiam sed tristique nisi.</p>
                                    <button type="button" class="btn-custom btn btn-info btn-purple  float-end text-white">Meer info</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-custom card-border-gradient">
                                <div class="card-image">
                                    <img src="../images/card-img-2.jpg" alt="Voorstelling" class="card-custom card-img-top"></img>
                                </div>
                                <div class="container ">
                                    <div class="card-homepage">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <p class="">21</p>
                                            </div>
                                            <div class="col-sm-4">
                                                <p class="">12</p>
                                            </div>
                                            <div class="col-sm-4 darker-card">
                                                <p class="">2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisl nisi. Proin elementum ante velit, et vehicula nisi porttitor vel. Etiam sed tristique nisi.</p>
                                    <button type="button" class="btn-custom btn btn-info btn-purple  float-end text-white">Meer info</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-custom card-border-gradient">
                                <div class="card-image">
                                    <img src="../images/card-img-3.jpg" alt="Voorstelling" class="card-custom card-img-top"></img>
                                </div>
                                <div class="container">
                                    <div class="card-homepage">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <p class="">21</p>
                                            </div>
                                            <div class="col-sm-4">
                                                <p class="">12</p>
                                            </div>
                                            <div class="col-sm-4 darker-card">
                                                <p class="">2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisl nisi. Proin elementum ante velit, et vehicula nisi porttitor vel. Etiam sed tristique nisi.</p>
                                    <button type="button" class="btn-custom btn btn-info btn-purple  float-end text-white">Meer info</button>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </React.Fragment >


        );
    }
}
