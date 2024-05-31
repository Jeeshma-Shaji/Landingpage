import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     
    <Navbar expand="lg" className="bg-body-tertiary  ">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="https://www.starbucks.in/assets/icon/logo.png"
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-between">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" >Order</Nav.Link>
            <Nav.Link href="#home" >gift</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header
