import React,{useState} from 'react'
import {Button} from 'reactstrap'


const Stoel = (props) => {

  return (
    <>
      <div className=" d-inline-flex m-1">
      <Button 
        color='light' 
        className='m-2 border-dark'
        >
      <div className='mx-3'></div>{props.stoel.StoelNr}

      </Button></div>
        
    </>
  )
}

export default Stoel
