import React, { useState } from "react";
import "../MijnReserveringen.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReserveringCard from "../ReserveringCard";
import VerstuurTicketModal from "./VerstuurTicketModal";

const ReserveringCardModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle}>
        <ReserveringCard />
      </div>

      <Modal isOpen={modal}>
        <div className="container">
          <ModalHeader toggle={toggle}>
            <h1>Voorstellingnaam</h1>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <p className="d-inline-flex m-0 fw-bold">Gekozen stoelen</p>
            </div>
            <div className="row">
              <p className="d-inline-flex m-0">22, 23, 24</p>
            </div>
            <div className="row mt-3">
              <p className="d-inline-flex m-0">Reguliere ticket € 20,00</p>
              <p className="d-inline-flex m-0">Reguliere ticket € 20,00</p>
              <p className="d-inline-flex m-0">Kinder Ticket € 12,00</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="col">
              <p className="modal__totaal text-uppercase m-0">totaal</p>
              <p className="modal__prijs m-0">€52,00</p>
            </div>

            <div className="col">
              <div className="" >
                <VerstuurTicketModal/>
              </div>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
};

export default ReserveringCardModal;
