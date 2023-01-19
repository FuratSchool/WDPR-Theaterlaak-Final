import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FormGroup } from 'reactstrap';
import {v4 as uuid} from 'uuid'

export function Afrekenen() {
  const referenceGenerated = uuid();

  var details ={
    amount: "100", //kosten <- moet met functionaliteit worden bepaalt van de winkelwagen. useState
    reference: referenceGenerated, //betaling id <-generate per betaling, per keer dat er op submit wordt geklikt(?)
    url: 'http://localhost:5044/api/succes', //terugverwijzing aan het eind van de betaling
  }
  var options = {
    headers: {"content-type": "application/x-www-form-urlencoded"}
  }
  var betaalsite = "https://fakepay.azurewebsites.net/";
  

  const [streamBody, setBody] = useState("")
  useEffect(() => {
    axios.post(betaalsite, details, options)
    .then(response=>
      {
        console.log(response)
        setBody(response.data)
      return response.data
      }).then((response) => {
        if(response.data){
          window.location.assign(response.data)
        }
  
      })
    .catch(err=>
      console.log(err))
  }, [])

  //nog een post request erbij maken die de gegevens naar onze database ook opstuurt, zodat de referentie nummer gekoppeld is bij de ingelogde gebruiker.
  document.body.innerHTML = streamBody
  return (
      <>
    <h1>Afrekenen</h1>
        {/*Post request naar website met amount, reference(id van betaling),
         url(teruggewezen na betaling, naar /success of /cancel)
        website: https://fakepay.azurewebsites.net/ */}
        <iframe src={streamBody}></iframe>

        

      </>
  )
  
}
  

export default Afrekenen