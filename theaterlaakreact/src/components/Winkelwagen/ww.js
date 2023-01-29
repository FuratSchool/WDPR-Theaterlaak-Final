import { React, useContext } from "react";
import Voorstelling, { MyReservering } from "../Voorstelling";
import Afrekenen from "../Afrekenen";

function Ww(props) {
  return (
    <>
      <div>
        <Afrekenen TotaalPrijs={props.propPrijs} />
      </div>
    </>
  );
}

export default Ww;
