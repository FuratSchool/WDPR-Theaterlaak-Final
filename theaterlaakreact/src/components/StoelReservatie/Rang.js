import React, { useState } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";
import Stoel from "./Stoel.Js";

const Rang = (props) => {
  const [item, setItem] = useState(props.propOne);
  const [beschikbareStoelen, setBeschikbareStoelen] = useState(props.propOne.Stoelen);
  const [gesStoelen, setGesStoelen] = useState([]);

  const handleClick = (e) => {
    props.onClickGereseerveerd(current =>[...current,<Button color="primary"><div className="mx-2"></div>{e}</Button>])
  };

  const stoelenLijst = beschikbareStoelen.map((s) => (
    <ListGroupItem
      className=""
      onClick={()=>handleClick(s.StoelId)}
      key={s.StoelId}
      action
    >
      <div className="m-3">Stoelnummer {s.StoelId}</div>{" "}
    </ListGroupItem>
  ));

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
