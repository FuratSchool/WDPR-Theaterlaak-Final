import React, { useState } from "react";
import Rang from "./Rang";
import { Button } from "reactstrap";

const AllRang = (props) => {
  const ranglijst = props.parentToChild.map((r) => (
    <li className="list-group-item px-2">
      
      <Rang
        parentToChild={props.parentToChild}
        rangNummer={r.RangId}
        stoelen={r.Stoelen}
      ></Rang>
    </li>
  ));

  return (
    <>
      <ul className="list-group">
       {ranglijst}
      </ul>
    </>
  );
};

export default AllRang;
