import React, { Component } from "react";
import './Bandpagina.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import FetchBands from './FetchBands';


export class Bandpagina1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      bandnaam: "",
      website: "",
      Logo: "",

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



  render() {
    return (
      <div>
        <div className="bandselect">
          <p className='info1'>Selecteer de Band/Groep waar jij je wilt inschrijven.</p>
          <DropdownButton className="dropdown1" id="dropdown-basic-button" title="Bands/Groepen">
            <FetchBands/>
          </DropdownButton>
          <div className='knop4'><Button variant="outline-primary">Selecteer</Button></div>
        </div>
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
            <Button variant="primary" type="submit">
              Maak
            </Button>
          </Form>
        </div>
        <p className='titel4'>Jouw Bands/Groep</p>
        <div className="tabellen">
          <div className='tafel1'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Abba</th>
                  <th>Naam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td> <Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td><Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td><Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='tafel2'>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Rolling Stones</th>
                  <th>Naam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td> <Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td><Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td><Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className='tafel2'>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>The Beatles</th>
                  <th>Naam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td> <Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td><Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td><Button variant="outline-primary">Verwijder</Button>{' '}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>


    );

  }
}
