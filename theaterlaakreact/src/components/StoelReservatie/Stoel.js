import {React, useState, useContext} from 'react'
import { ButtonGroup, Button} from 'reactstrap'
import { StoelReservatieContext } from '../stoelReservatieContext';

const Stoel = (props) => {
  const [cSelected, setCSelected] = useState([]);
  
  const scontext = useContext(StoelReservatieContext)

  const checkBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const getIdBtnClick = (selected) => {
    const index = scontext.idStoelen.indexOf(selected);
    if (index < 0) {
      scontext.idStoelen.push(selected);
    } else {
      scontext.idStoelen.splice(index, 1);
    }
    scontext.setIdStoelen([...scontext.idStoelen]);
    
  };


  const handleClick = (e, x) => {
    checkBtnClick(e)
    getIdBtnClick(x)
  }



  const stoelenLijst = props.propOne.stoelen.map((item, index)=> (
  <div className='mx-2 my-2'>
    
    <Button
              color="primary"
              outline
              onClick={() => handleClick(item.stoelNr, item.stoelId)}
              active={cSelected.includes(item.stoelNr,item.StoelId)}
    
    
    >{item.stoelNr}<div className='mx-5'></div></Button>
    
  </div>))

  return (
    <>
    <ButtonGroup>
      <div className='d-flex flex-wrap'>
      {stoelenLijst}
      </div>
      </ButtonGroup>
    <p>Selected: {JSON.stringify(cSelected)}</p>
    
    

    </>
  )
}

export default Stoel
