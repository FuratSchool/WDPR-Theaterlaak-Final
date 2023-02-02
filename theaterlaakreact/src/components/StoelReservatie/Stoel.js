import { React, useState, useContext, useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";
import { StoelReservatieContext } from "../stoelReservatieContext";

const Stoel = (props) => {
  const [cSelected, setCSelected] = useState([]);
  const [tekstMijnGeselecteerdStoelen, setTekstMijnGeselecteerdeStoelen] =
    useState("");

  const scontext = useContext(StoelReservatieContext);

  useEffect(() => {
    const tekstMijnGeselecteerdStoelen = () => {
      if (cSelected.length > 0) {
        setTekstMijnGeselecteerdeStoelen("Mijn geselecteerde stoelen:");
      } else {
        setTekstMijnGeselecteerdeStoelen("");
      }
    };
    tekstMijnGeselecteerdStoelen();
  });

  const checkBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const getIdBtnClick = (selected) => {
    const index = scontext.idStoelen.indexOf(selected);
    if (index < 0) {
      scontext.idStoelen.push(selected);
    } else {
      scontext.idStoelen.splice(index, 1);
    }
    scontext.setIdStoelen([...scontext.idStoelen]);
  };

  const handleClick = (e, x) => {
    checkBtnClick(e);
    getIdBtnClick(x);
  };

  const stoelenLijst = props.propOne.stoelen.map((item) => (
    <div key={item.stoelId} className="me-2 mt-2 ">
      <Button
        key={item.stoelId}
        color="primary"
        outline
        onClick={() => handleClick(item.stoelNr, item.stoelId)}
        active={cSelected.includes(item.stoelNr, item.StoelId)}
        data-cy={"stoel" + item.stoelId}
      >
        {item.stoelNr}
        <div className="mx-5"></div>
      </Button>
    </div>
  ));

  const addZeroToNumber = (e) => {
    if (e < 10) {
      return "0";
    } else return "";
  };

  const selectedStoelenPill = cSelected.map((item, index) => (
    <>
      <Button key={index} disabled className="col-sm-2 p-0 mt-2 me-2">
        {"Stoel " + addZeroToNumber(item) + item}
      </Button>
    </>
  ));

  return (
    <>
      <ButtonGroup className="row m-0 p-0 ">
        <div className="d-flex flex-wrap p-0">{stoelenLijst}</div>
      </ButtonGroup>

      <div className="row p-0 mx-0 my-3">
        <p className="my-1 mx-0 p-0" data-cy="cyTekstSelectedStoelen">{tekstMijnGeselecteerdStoelen}</p>
        <div className="p-0">{selectedStoelenPill}</div>
      </div>
    </>
  );
};

export default Stoel;
