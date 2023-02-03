import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../apiConfig';

export function Succes() {
const [succesdata,setsuccesdata] = useState([1])

useEffect(() => {
  axios.get(`${API_BASE_URL}/api/Betaling`)
.then(response =>{
  console.log(response);
  setsuccesdata(response.data)
})
.catch(error=>{
  console.log(error);
})
.then(response =>{
  response = {setsuccesdata}

})

}, [])

let laatsteElement = succesdata[succesdata.length -1]
let referentie = laatsteElement.reference
console.log(laatsteElement);
  
return (
    <>
    <h1>Uw betaling is gelukt!</h1>
    <h2>Uw referentie nummer is:</h2>
      {referentie}
    </>
  )
}

// {succesdata.map(s=><li key={s.id}>{s.reference}</li>) //reference   }