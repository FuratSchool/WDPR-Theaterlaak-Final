import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const Datum = () => {
  const [rSelected, setRSelected] = useState([]);
  const alleVoorstellingen= () =>{
    setRSelected()

  }
  return (
    <>
      <Button
        color="primary"
        outline
        onClick={() => alleVoorstellingen()}
        active={rSelected === 1}
        >
      datum xx
      </Button>
    </>
  );
};

export default Datum;
