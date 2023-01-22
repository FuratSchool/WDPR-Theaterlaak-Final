import React from 'react'

const VoorstellingCard = () => {
  return (
    <>

                    <div className="col-md-4">
                            <div className="card card-custom card-border-gradient">
                                <div className="card-image">
                                    <img src="../images/card-img-2.jpg" className="card-custom card-img-top"></img>
                                </div>
                                <div className="container ">
                                    <div className="card-homepage">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p className="">21</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <p className="">12</p>
                                            </div>
                                            <div className="col-sm-4 darker-card">
                                                <p className="">2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisl nisi. Proin elementum ante velit, et vehicula nisi porttitor vel. Etiam sed tristique nisi.</p>
                                    <button type="button" className="btn-custom btn btn-info btn-purple  float-end text-white">Meer info</button>
                                </div>
                            </div>
                        </div>

                
                
      
    </>
  )
}

export default VoorstellingCard
