import React, { useState, useEffect} from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";
import Stoel from './Stoel'

const Rang = (props) => {
  const [item, setItem] = useState(props.propOne);
  const [beschikbareStoelen, setBeschikbareStoelen] = useState(props.propOne.Stoelen);

  const stoelenLijst = beschikbareStoelen.map(s =>
    <Stoel
     stoel={s}
     onClickSetGereseerveerd={props.onClickSetGereseerveerd}
     />)
     

  return (
    <>
      <div className="row my-3">
        <div className="col">
          <ListGroupItemHeading color="primary">
            <p>Rij {item.RangId}</p>
          </ListGroupItemHeading>
          <ListGroup>{stoelenLijst}</ListGroup>
        </div>
      </div>
    </>
  );
};

export default Rang;
