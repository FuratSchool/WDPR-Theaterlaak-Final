import React,{useState} from 'react'
import {Button, Input} from 'reactstrap'
import GereserveerdeStoelen from './GereserveerdeStoelen'


const Stoel = (props) => {
  const [isDisabled, setDisabled] = useState(false);

  const handleClick = () =>{
    setDisabled(true);
    //remove from stoelenLijst
    //move to gereserveerdeStoelenLijst
  }
  return (
    <>
      <div className="d-inline-flex m-1">
      <Button
        color='light' 
        className='border-dark'
        onClick={handleClick}
        disabled={isDisabled}
        >
      {props.stoel.StoelNr}<div className='mx-2'></div></Button>
      </div>
      
    
    </>
  )
  
}

export default Stoel
