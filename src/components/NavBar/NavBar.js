import React from 'react';
import './NavBar.css';
import * as ReactBootStrap from 'react-bootstrap';

export default function NavBar() {
  return (
    <div className="nav-bar">
       <ReactBootStrap.Navbar bg="light" variant="light">
        <ReactBootStrap.Navbar.Brand href="#home">Why Leave?</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">About</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Support</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar>
    </div>
  );
}