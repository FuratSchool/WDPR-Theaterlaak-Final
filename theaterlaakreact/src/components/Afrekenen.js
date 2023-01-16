import React from 'react'
import {Form, Alert, Button, FormGroup, Input, Label} from 'reactstrap'

export function Afrekenen() {
  return (
      <>
    <h1>Afrekenen</h1>
        {/*Post request naar website met amount, reference(id van betaling),
         url(teruggewezen na betaling, naar /success of /cancel)
        website: https://fakepay.azurewebsites.net/ */}
<Form>
  <FormGroup>
    <Label for="rekeningnummer">
    Rekening nummer van koper
    </Label>
    <Input
      id="rekeningnummer"
      name="rekeningnummer"
      placeholder="rekeningnummer"
      type="text"
    />
  </FormGroup>
  <Button onClick={gelukt}>
    Submit
  </Button>
  </Form>
      </>
  )
}

function gelukt(){
alert(
  "Betaling gelukt! U wordt doorverwezen...")
}
export default Afrekenen