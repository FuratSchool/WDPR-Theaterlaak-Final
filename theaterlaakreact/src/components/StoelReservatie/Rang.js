import React from "react";
import Stoel from "./Stoel";

const Rang = (props) => {
  return (
    <>
      <div className="row m-0 p-0">
        <Stoel 
        setCSelected={props.setCSelected}
        onCheckboxBtnClick={props.onCheckboxBtnClick}
        propOne={props.propOne} 
        data-cy="stoel"
        />
        
      </div>
    </>
  );
};

export default Rang;
