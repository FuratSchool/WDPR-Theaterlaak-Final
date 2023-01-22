import React,{useState} from 'react'
import { ListGroupItem, Button} from 'reactstrap'

const Stoel = (props) => {
const [knop, setKnop] = useState(false)

const handleOnClick = (e) =>{
  setKnop(!knop)
  props.onClickSetGereseerveerd(current =>[...current,<Button color="primary"><div className="mx-2"></div>stoel: {e} {}</Button>])
}

  return (
    <>
    <ListGroupItem
    disabled={knop}
    onClick={()=>handleOnClick(props.stoel.StoelId)}
    action
    >
    <p>stoel: {props.stoel.StoelId}</p>
    </ListGroupItem>
    </>
  )
}

export default Stoel
