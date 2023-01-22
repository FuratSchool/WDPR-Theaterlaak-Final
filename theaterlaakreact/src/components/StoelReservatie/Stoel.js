import React,{useState} from 'react'
import { ListGroupItem, Button} from 'reactstrap'

const Stoel = (props) => {
const [knop, setKnop] = useState(false)

const handleOnClick = (e) =>{
  setKnop(!knop)
  //props.onClickSetGereseerveerd(current =>[...current,<Button color="primary"><div className="mx-2"></div>stoel: {e} {}</Button>])
}
const stoelenLijst = props.propOne.map((item, index) => (<div>{item}</div>))
  return (
    <>
    {stoelenLijst}
    
    

    </>
  )
}

export default Stoel
