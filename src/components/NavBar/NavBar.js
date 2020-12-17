import React from 'react';
import './NavBar.css';
import * as ReactBootStrap from 'react-bootstrap';

export default function NavBar() {
  return (
    <div className="nav-bar">
       <ReactBootStrap.Navbar >
        <ReactBootStrap.Navbar.Brand href="/">Why Leave?</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="ml-auto">
              <ReactBootStrap.Nav.Link float="left" href="/">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/support">Support</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar>
    </div>
  );
}
