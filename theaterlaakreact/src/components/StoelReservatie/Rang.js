import React, { useState } from "react";
import { Button } from "reactstrap";
import AllStoel from "./AllStoel";

const Rang = (props) => {
  return (
    <>
      <Button color="primary w-100"> Rij: {props.rangNummer}</Button>
      <AllStoel stoelen={props.stoelen} />
    </>
  );
};

export default Rang;
