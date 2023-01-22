import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Dropdown } from 'bootstrap'
import { DropdownItem } from 'reactstrap'
function FetchBands() {
    const [succesdata,setsuccesdata] = useState([])
  
    
    useEffect(() => {
      axios.get('http://localhost:5044/api/Groep')
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
    
    },[])
      return (
        <>
        <ul>
          {
        succesdata.map(s=><DropdownItem key={s.id }>{s.bandnaam}</DropdownItem>) //reference 

          }
        </ul>
        </>
      )
    }

export default FetchBands
