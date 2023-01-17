import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import GeselecteerdeStoelen from "./GereserveerdeStoelen";

import Stoel from "./Stoel";

const AllStoel = (props) => {
  const [stoelen, setStoelen] = useState(props.stoelen);

  const lijstStoelen = stoelen.map((stoel) => <Stoel stoel={stoel} />);

  return (
    <>
      <div className="form-group">{lijstStoelen}</div>
    </>
  );
};

export default AllStoel;
