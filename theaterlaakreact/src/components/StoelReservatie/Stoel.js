import React,{useState, useEf} from 'react'
import { ButtonGroup, Button} from 'reactstrap'

const Stoel = (props) => {
  const [cSelected, setCSelected] = useState([]);


  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

const stoelenLijst = props.propOne.map((item) => (
  <div className='mx-2'>
<Button
          color="primary"
          outline
          onClick={() => onCheckboxBtnClick(item)}
          active={cSelected.includes(item)}
>{item}<div className='mx-5'></div></Button></div>))
  return (
    <>

    <ButtonGroup className='d-flex flex-wrap gap-3'>{stoelenLijst}</ButtonGroup>

    {JSON.stringify(cSelected)}
    
    </>
  )
}

export default Stoel
