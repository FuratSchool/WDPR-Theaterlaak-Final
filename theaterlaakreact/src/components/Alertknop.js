import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Alert from 'react-bootstrap/Alert';


function Alertknop() {
  return (
    <div className="Alertknop">
  <Alert variant="primary" style={{ width: "42rem" }}>
        <Alert.Heading>
          This is a primary alert which has blue background
        </Alert.Heading>
      </Alert>
    </div>
  );
}