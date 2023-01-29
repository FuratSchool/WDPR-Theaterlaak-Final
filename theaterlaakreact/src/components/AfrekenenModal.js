import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AfrekenenModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleShow();
    props.handleClick();
  };
  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Afrekenen
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Afrekenen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            srcDoc={props.srcDoc}
            title="html-body"
            style={{ width: "100%", height: "500px" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
