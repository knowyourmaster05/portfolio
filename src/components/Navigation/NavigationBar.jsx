import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar
      fixed="top"  
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="shadow-lg p-3 mb-0 custom-navbar" 
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            color: "#00eeff",
          }}
        >
          Dibyojyoti.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <ul className="navbar-nav ms-auto ">
              <li>
                <a className="navig nav-link m-2" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>
                  <h6 className="navigation-link">Home</h6>
                </a>
              </li>
              <li>
                <a className="navig nav-link m-2" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                  <h6 className="navigation-link">About</h6>
                </a>
              </li>
              <li>
                <a className="navig nav-link m-2" onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>
                  <h6 className="navigation-link">Education</h6>
                </a>
              </li>
              <li>
                <a className="navig nav-link m-2" onClick={() => document.getElementById('skills2').scrollIntoView({ behavior: 'smooth' })}>
                  <h6 className="navigation-link">Skills</h6>
                </a>
              </li>
              <li>
                <a className="navig nav-link m-2"onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  <h6 className="navigation-link">Contact</h6>
                </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
 