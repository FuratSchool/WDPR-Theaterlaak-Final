import React,{useState} from "react";
import { Button } from "reactstrap";
import GeselecteerdeStoelen from "./GeselecteerdeStoelen";

import Stoel from "./Stoel";

const AllStoel = (props) => {

  const lijstStoelen = props.stoelen.map((stoel) => 
  <Stoel stoel={stoel}
   />
  )

  return (
    
    <>
      {lijstStoelen}
    </>
  );
};

export default AllStoel;
