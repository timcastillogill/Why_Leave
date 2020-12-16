import React from 'react';
import './NavBar.css';
import * as ReactBootStrap from 'react-bootstrap';

export default function NavBar() {
  return (
    <div className="nav-bar" fixed="top">
       <ReactBootStrap.Navbar >
        <ReactBootStrap.Navbar.Brand href="#home">Why Leave?</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link float="left" href="#home">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#about">About</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#support">Support</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar>
    </div>
  );
}