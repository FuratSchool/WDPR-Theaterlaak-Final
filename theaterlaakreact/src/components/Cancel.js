import React, {useState, useEffect} from 'react'
import axios from 'axios'

export function Cancel() {
const [betalingdata,setbetalingdata] = useState([1])

useEffect(() => {
  axios.get('http://localhost:5044/api/Betaling')
.then(response =>{
  console.log(response);
  setbetalingdata(response.data)
})
.catch(error=>{
  console.log(error);
})
.then(response =>{
  response = {setbetalingdata}

})

}, [])

let laatsteElement = betalingdata[betalingdata.length -1]
let referentie = laatsteElement.reference
console.log(laatsteElement);

  return (
    <>
    <h2>Uw betaling is niet gelukt!</h2>
    <p>Betaling referentie:<br></br>  
    {referentie}
    
    </p>

    </>
  )
}

