import React, {useState} from "react";
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading} from "reactstrap";
import Stoel from "./Stoel.Js";

const Rang = (props) => {
const [item, setItem] = useState(props.propOne);
const [beschikbareStoelen, setBeschikbareStoelen] = useState(props.propOne.Stoelen)

const handleClick= () => {
    
}

const stoelenLijst = beschikbareStoelen.map(s => <ListGroupItem key={s.StoelId} action><div className="m-3">Stoelnummer {s.StoelId}</div>  </ListGroupItem>)



  return (
    <>  
    <div className="row my-3">
        <ListGroupItemHeading color="primary"> Rij {item.RangId}</ListGroupItemHeading>
        <ListGroup>{stoelenLijst}</ListGroup>
        </div>

    
    

    
    </>
  );
};

export default Rang;
