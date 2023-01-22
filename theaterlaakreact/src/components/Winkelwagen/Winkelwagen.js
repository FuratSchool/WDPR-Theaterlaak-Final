import React, { useState } from 'react';
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Reserveren } from './Reserveren';
import Ww from './ww';

//dit wil ik uiteindelijk in de navigatie bar erbij hebben zodat als je op winkelwagen klikt dit opent.
//verder functioneel uitbreiden met dat tickets ook worden toegevoegd in de winkelwagen etc.etc.

export const Winkelwagen = (args, {cart}) => {
    const [reservaties, setReservaties] = useState([])
    function handleAddreservatie(reservatie){
        setReservaties([...reservaties, reservatie]);
    };
    return (
        <>
            <h1>Uw Winkelwagen</h1>
          <Ww/>
        </>
    );
  }

export default Winkelwagen;