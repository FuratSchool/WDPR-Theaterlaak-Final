import React,{useState} from 'react'
import { ListGroupItem, Button} from 'reactstrap'

const Stoel = (props) => {
const [knop, setKnop] = useState(false)

const handleOnClick = (e) =>{
  setKnop(!knop)
  props.onClickSetGereseerveerd(current =>[...current,<Button color="primary"><div className="mx-2"></div>{e}</Button>])
}

  return (
    <>
    <ListGroupItem
    disabled={knop}
    onClick={()=>handleOnClick(props.stoel.StoelId)}
    action
    >
    {props.stoel.StoelId}
    </ListGroupItem>
    
    </>
  )
}

export default Stoel
