import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

//dit wil ik uiteindelijk in de navigatie bar erbij hebben zodat als je op winkelwagen klikt dit opent.
//verder functioneel uitbreiden met dat tickets ook worden toegevoegd in de winkelwagen etc.etc.

export function Winkelwagen(args) {
    const [tickets, setTickets] = useState("Uw winkelwagen is leeg.")

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Winkelwagen
      </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Winkelwagen</ModalHeader>
                <ModalBody>
                    {tickets}
                    
                   
                </ModalBody>
                <ModalFooter>
                <Button color="danger" onClick={toggle}>
                        Verwijder Tickets
          </Button>
                    <Link type="button" class='btn-primary' to={"/afrekenen"} onClick={toggle}>
                        Afrekenen
          </Link>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Winkelwagen;