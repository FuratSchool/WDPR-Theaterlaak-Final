import {React, useContext} from 'react'
import Voorstelling, { MyReservering } from '../Voorstelling'
import Afrekenen
 from '../Afrekenen';

function Ww() {
    const {cart, setCart} = useContext(MyReservering)

    function removeFromCart(reserveringId) {
      setCart(cart.filter(item => item.reserveringId !== reserveringId));
    }

    //reduce is net zoals foreach, dus foreach item, 
    const TotaalPrijs = cart.reduce((acc, item) => acc + item.prijsVoorstelling, 0);

  return (
      <>
<div>
      <h1>Winkelwagen</h1>
      <ul>
        {cart.map(item => (
          <li key={item.reserveringId}>
            Voorstelling: {item.voorstelling} - Uitvoering: {item.uitvoering} - Stoel(en): {item.stoelen.join(', ')} - Prijs: €{item.prijsVoorstelling} -  
            <button onClick={() => removeFromCart(item.reserveringId)} >Verwijder</button>
          </li>
        ))}
      </ul>
      <p>Totaalprijs: {TotaalPrijs}</p>
      <Afrekenen TotaalPrijs={TotaalPrijs}/>
    </div>
      </>
  )
}

export default Ww