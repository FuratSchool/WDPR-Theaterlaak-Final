import React from "react";
import "./MijnReserveringen.css";
import { Button } from "reactstrap";
import ReserveringCard from "./ReserveringCard";
import ExportModal from "./modals/ExportModal";
import ReserveringCardModal from "./modals/ReserveringCardModal";
import { Link } from "react-router-dom";
import DonatieButtonLink from "../Donatie/DonatieButtonLink";

function MijnReserveringen() {
  return (
    <div>
      <div className="container">
        <p className="fs-1">Mijn Reserveringen</p>

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ">
          <div className="col">
            <p>Wordt donateur om voorrang te ontvangen bij reserveringen!</p>
          </div>

          <div className="col">
            <DonatieButtonLink/>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 g-4 mt-0 mb-3">
          <ReserveringCardModal />
          <ReserveringCardModal />
          <ReserveringCardModal />
        </div>

        <div className="col">
          <div className="d-flex justify-content-center my-5">
            <ExportModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MijnReserveringen;
