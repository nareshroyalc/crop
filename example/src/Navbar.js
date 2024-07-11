import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <div>
    
    <Navbar expand="lg" className="customNavbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand custom-nav-link logo">
          crop-yield-predictor
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link  className="nav-link custom-nav-link" id="item">
              Uses
            </Nav.Link> */}
            <Nav.Link href="/CropForm" className="nav-link custom-nav-link" id="item1">
              Results
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default CustomNavbar;
