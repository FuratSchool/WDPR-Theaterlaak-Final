import React, { useState, useEffect } from 'react'
import './Voorstelling.css'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

//details voorstelling
export function Voorstelling() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count} tickets`;
    });
    return (
        <>
            <h1>Voorstelling titel</h1>

            <div className='flex-container'>
                <div class="card-image">
                    <img src="../images/card-img-1.jpg" class="card-custom card-img-top" alt='voorstelling naam'></img>
                </div>
                <div>
                    <ListGroup>
                        <ListGroupItem>
                            Kies een datum
 <div className='buttons'>
                                <div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        Datum 1
  </Button>
                                </div><div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        Datum 2
  </Button>
                                </div><div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        Datum 3
  </Button>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            Kies een tijdstip
    <div className='buttons'>
                                <div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        tijdstip 1
  </Button>
                                </div><div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        tijdstip 2
  </Button>
                                </div><div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        tijdstip 3
  </Button>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            Kies de rang
    <div className='buttons'>
                                <div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        Rang 1
  </Button>
                                </div><div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        Rang 2
  </Button>
                                </div><div>
                                    <Button
                                        color="primary"
                                        outline
                                        size=""
                                    >
                                        Rang 3
  </Button>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            Aantal tickets
    <div className='buttons'>
                                <button onClick={() => setCount(count - 1)}>
                                    -
      </button>
                                <p className='ticketcount'>{count} tickets</p>
                                <button onClick={() => setCount(count + 1)}>
                                    +
      </button>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button>Voeg tickets toe aan de winkelwagen</Button>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>


            <div class="card-body">
                <h5 class="card-title font-weight-light">Voorstelling</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae nisl nisi. Proin elementum ante velit, et vehicula nisi porttitor vel. Etiam sed tristique nisi.</p>
                <p>*Meer informatie over de voorstelling en opstelling van de rangen van de zaal waarin de voorstelling afspeelt..*</p>
            </div>

        </>
    )
}

export default Voorstelling