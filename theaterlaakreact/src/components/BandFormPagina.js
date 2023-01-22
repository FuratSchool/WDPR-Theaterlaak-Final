import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class BandFormPagina extends Component{
    constructor(props) {
        super(props);
    

        // GroepId
        // GroepNaam 
        // BandWebsite
        // LogoLink
        // Artiesten
        // Voorstellingen 

        this.state = {
          GroepID: "",
          bandnaam: "",
          website: "",
          Logo: "",
          Users: "",
    
        };
      }
    
    
      handleChange(changeObject) {
        this.setState(changeObject);
      }
     
      
    
    
      CreateGroup(e) {
        // add entity - POST
        e.preventDefault();
        // creates entity
        fetch("http://localhost:5044/api/Groep", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bandnaam: this.state.bandnaam,
            website: this.state.website,
            Logo: this.state.Logo,
            
            
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    render(){
        return(
            <div className='forms1'>
            <Form onSubmit={(e) => this.CreateGroup(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Naam</Form.Label>
                <Form.Control type="text" placeholder="Vul de bandnaam in" onChange={(e) => this.handleChange({ bandnaam: e.target.value })} />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Logo</Form.Label>
                <Form.Control type="file" onChange={(e) => this.handleChange({ Logo: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formWebsite">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="Vul website in" onChange={(e) => this.handleChange({ website: e.target.value })} />
              </Form.Group>
              <Button variant="primary" type="submit" >
                Maak
              </Button>
            </Form>
          </div>
        )
    }
}