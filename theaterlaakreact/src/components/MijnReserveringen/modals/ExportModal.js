import React, { useState } from "react";
import "../MijnReserveringen.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ExportModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  return (
    <>
      <Button color ="primary"onClick={toggle}>Exporteer voorstellingen naar agenda</Button>
      <Modal isOpen = {modal}  toggle={toggle}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody>Functie is nog niet geimplementeerd</ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>ok</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ExportModal;
