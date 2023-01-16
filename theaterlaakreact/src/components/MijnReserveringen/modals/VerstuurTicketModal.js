import React, { useState } from "react";
import "../MijnReserveringen.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const VerstuurTicketModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="" onClick={toggle}>
        <Button color="primary">Verstuur ticket</Button>
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
              <div className="col-lg-3">
                <Input
                  id="stoelNummer"
                  name="Kies het stoelnummer"
                  type="select"
                >
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                </Input>
              </div>

              <div className="col-lg-8">
                <Input className="" placeholder="Gebruikers-ID ontvanger" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="col">
              <div className="" onClick={toggle}>
                <Button color="primary">versturen</Button>
              </div>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
};

export default VerstuurTicketModal;
