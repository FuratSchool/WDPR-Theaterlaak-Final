import React, { useState, useEffect } from "react";
import { ListGroupItem, Button } from "reactstrap";

const Stoel = (props) => {

  var lijstEen = props.propOne;
  


  const eenLijst = lijstEen.map((item, index) => <div key={index}>x</div>);

  return (
    <>
      <button>xx</button>
      {eenLijst}
    </>
  );
};

export default Stoel;
