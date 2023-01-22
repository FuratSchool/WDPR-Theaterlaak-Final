import React, { useState, createContext} from 'react'
import './Voorstelling.css'
import { Button, ListGroup, ListGroupItem, ButtonGroup } from 'reactstrap'
import Winkelwagen from './Winkelwagen/Winkelwagen';
import { voorstellingVoorbeeldArray, getVoorstelling } from './ZaalContext';
import Ww from './Winkelwagen/ww'

export const MyReservering = createContext({cart:[]});
var prijs = 10;

//details voorstelling + bestellen, later de functionaliteit van Ayrton invoegen 
export function Voorstelling({props}) {
    //winkelwagen functinaliteit
    const [cart, setCart] = useState([]);
    let nextId;
    function addToCart(){
        setCart( [ 
            ...cart, 
            {
            reserveringId: nextId = cart.length + 1,
            voorstelling: "Avatar",  
            uitvoering: rSelected,
            stoelen : cSelected,
            prijsVoorstelling : cSelected.length * prijs, }
        ]);
        console.log(cart)
        alert("Reservering toegevoegd!")
    };


    
    
    //radiobox
    const [rSelected, setRSelected] = useState(null);
    //checkbox
    const [cSelected, setCSelected] = useState([]);
    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
          cSelected.push(selected);
        } else {
          cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
      };
        //ticket heeft
        // let Totaalprijs = cSelected.length * 10

    return (
        <>
        <MyReservering.Provider value={{cart, setCart}}>
        {/* <Ww cart ={cart}/> */}
        <div>
        </div>
            <h1>Avatar</h1>

            <div className='flex-container'>
                <div class="card-image">
                    <img src="../images/card-img-1.jpg" class="card-custom card-img-top" alt='voorstelling naam'></img>
                </div>
                <div>
                    <ListGroup>
                        <ListGroupItem>
                            <h5>Kies een datum:</h5>
      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Datum 1
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Datum 2
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          Datum 3
        </Button>
      </ButtonGroup>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h5>Kies de stoel(en)</h5>
      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(1)}
          active={cSelected.includes(1)}
        >
          Stoel 1
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(2)}
          active={cSelected.includes(2)}
        >
          Stoel 2
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(3)}
          active={cSelected.includes(3)}
        >
          Stoel 3
        </Button>
      </ButtonGroup>
    
                        </ListGroupItem>
                        <ListGroupItem>
                        <ul>
                            <li>Geselecteerde datum: {rSelected}</li> 
                            {/* ticket.datum = rSelected 
                                item.stoelen = cSelected (kijken of het parsed! ) */}
                            <li>Stoel(en): {JSON.stringify(cSelected)}</li>
                        </ul>
                        {/* <Ww datum={rSelected}/>
                        <Ww stoel={JSON.stringify(cSelected)}/> */}
                        {/* props meesturen naar Ww */}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                            <Button onClick={addToCart}>Voeg tickets toe aan de winkelwagen</Button>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>

            <div class="card-body">
                <h2 class="card-title font-weight-light">Avatar</h2>
                <h3>€10.- euro</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisl nisi. Proin elementum ante velit, et vehicula nisi porttitor vel. Etiam sed tristique nisi.</p>
                <p>*Meer informatie over de voorstelling en opstelling van de rangen van de zaal waarin de voorstelling afspeelt..*</p>
            </div>
            <Ww/>
            </MyReservering.Provider>
        </>
    )
}

export default Voorstelling