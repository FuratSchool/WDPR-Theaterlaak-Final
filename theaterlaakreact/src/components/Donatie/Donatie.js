import React from "react";
import donatieBanner from "../../assets/donatebanner_01.png";
import { Button, Input } from "reactstrap";
import "./Donatie.css";

const Donatie = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <img className="donatie__Banner" src={donatieBanner}></img>
        </div>
        <div className="row justify-content-center py-4 border border-dark">
          <div className="col-lg-4 my-2">
            <Input
              className="donatie__Input"
              placeholder="Voer een bedrag in"
            />
          </div>
          <div className="col-lg-4 my-2">
            <Button className="w-100 donatie__Button" color="primary">
              Doneer
            </Button>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-lg-5 mb-5">
                <h1>De voordelen</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Turpis ut sit eget lacus faucibus. <br></br> <br></br> 
                Pellentesque nulla morbi viverra sagittis. Convallis feugiat amet at eu eu nisl amet suscipit. Sem at maecenas orci erat lectus cursus in et pellentesque.<br></br> <br></br> Turpis egestas dui malesuada lectus mauris amet pulvinar vulputate. Senectus tempor quam enim risus nibh pretium neque id.</p>

            </div>
            <div className="col-lg-5 mb-5">
                <h1>Waar gaat uw geld naartoe?</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Turpis ut sit eget lacus faucibus. Pellentesque nulla morbi viverra sagittis. Convallis feugiat amet at eu eu nisl amet suscipit. Sem at maecenas orci erat lectus cursus in et pellentesque. Turpis egestas dui malesuada lectus mauris amet pulvinar vulputate. Senectus tempor quam enim risus nibh pretium neque id.</p>

</div>
        </div>
      </div>
    </div>
  );
};

export default Donatie;
