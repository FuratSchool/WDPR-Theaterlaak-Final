import React, { useState } from "react";
import { ListGroup, ListGroupItemHeading } from "reactstrap";
import Stoel from "./Stoel";

const Rang = (props) => {
  return (
    <>
      <div className="row m-0 gap-2">
        
        <Stoel 
        setCSelected={props.setCSelected}
        onCheckboxBtnClick={props.onCheckboxBtnClick}
        propOne={props.propOne} />
      </div>
    </>
  );
};

export default Rang;
