import React, { useState } from "react";
import { Button } from "reactstrap";

const Datum = (props) => {
  
  

  return (
    <>
      <Button
        className="pr-5"
        key={props.Key}
        color="primary"
        outline
        onClick={() => props.setDatumSelected(props.datum)}
        active={props.datumSelected === props.datum}
        >
      {props.datum}
      </Button>
    </>
  );
};

export default Datum;
