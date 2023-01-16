import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//dit wil ik uiteindelijk in de navigatie bar erbij hebben zodat als je op winkelwagen klikt dit opent.
//verder functioneel uitbreiden met dat tickets ook worden toegevoegd in de winkelwagen etc.etc.

export function Winkelwagen(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Winkelwagen
      </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <p>Tickets in je winkelwagen:</p>
                    <p>Hans Zimmerman</p>
                    <p>€0</p>
                    <Button color="danger" onClick={toggle}>
                        Verwijder ticket
          </Button>{' '}
                    <br />
                    <h1>totaalprijs: €0</h1>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Afrekenen
          </Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Winkelwagen;