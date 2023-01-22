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
import BandSchema from './BandSchema';


export class Bandpagina1 extends Component {
 


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
        <p className='titel4'>Jouw Bands/Groep</p>
        <div className="tabellen">
          <div className='tafel1'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Band</th>

                </tr>
              </thead>
              <tbody>
          <BandSchema/>
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
