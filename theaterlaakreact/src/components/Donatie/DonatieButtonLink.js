import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const DonatieButtonLink = () => {
  return (
    <div>
      <Link to="../Donatie">
        <Button color="primary">Doneren</Button>
      </Link>
    </div>
  );
};

export default DonatieButtonLink;
