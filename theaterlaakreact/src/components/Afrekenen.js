import React, { useContext, useState } from 'react'
import axios from 'axios'
import { FormGroup } from 'reactstrap';
import {v4 as uuid} from 'uuid'
import Voorstelling, { MyReservering } from './Voorstelling'


export function Afrekenen({TotaalPrijs}) {
  // let prijs = TotaalPrijs;


  const referenceGenerated = uuid();

  const bestelling = {details: details, gebruiker: "", } // voor het linken met gebruiker uiteindelijk
  var details ={
    amount: TotaalPrijs, //kosten <- gekregen van de Ww Parent component
    reference: referenceGenerated, //betaling id <-generate per betaling, per keer dat er op submit wordt geklikt(?)
    url: 'http://localhost:5044/api/betaling', //terugverwijzing aan het eind van de betaling, ontvangt id, reference en succes(bool)
  }
  var options = {
    headers: {"content-type": "application/x-www-form-urlencoded"}
  }
  var betaalsite = "https://fakepay.azurewebsites.net/";
  

  const [streamBody, setBody] = useState("")
function afrekenenFetch(props){
    //post naar onze backend
    //post naar fakepay
    // details.amount = props.TotaalPrijs
    axios.post(betaalsite, details, options)
    .then(response=>
      {
        console.log(response)
        setBody(response.data)
      return response.data
      }).then((response) => {
        if(response.data){
          // window.location.assign(response.data)
          setBody(response.data)
        }
  
      })
    .catch(err=>
      console.log(err))
  }
  
  // document.body.innerHTML = streamBody

  //nog een post request erbij maken die de gegevens naar onze database ook opstuurt, zodat de referentie nummer gekoppeld is bij de ingelogde gebruiker.
  return (
      <>
    <h1>Afrekenen</h1>
    <button onClick={afrekenenFetch}>Betalen</button>

        {/*Post request naar website met amount, reference(id van betaling),
         url(teruggewezen na betaling, naar /success of /cancel)
        website: https://fakepay.azurewebsites.net/ */}
        <div>
      <iframe srcDoc={streamBody} title="html-body" style={{width: '50%', height: '500px'}}/>
    </div>
        

      </>
  )
  
}
  

export default Afrekenen