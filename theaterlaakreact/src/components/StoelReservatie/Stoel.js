import {React, useState, useEffect} from 'react'
import { ButtonGroup, Button} from 'reactstrap'

const Stoel = (props) => {
  const [cSelected, setCSelected] = useState([]);
  const [toCart, setToCart] = useState([]);




  

  const checkBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const cartBtnClick = (selected) => {
    const index = toCart.indexOf(selected);
    if (index < 0) {
      toCart.push(selected);
    } else {
      toCart.splice(index, 1);
    }
    setToCart([...toCart]);
  };

  const handleClick = (e, x) => {
    checkBtnClick(e)
    cartBtnClick(x)

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
    <p>cart: {JSON.stringify(toCart)}</p>
    

    </>
  )
}

export default Stoel
