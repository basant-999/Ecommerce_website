import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

const Thirdnav = () => {
  return (
    <>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">All Categories</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="home">Home </Nav.Link>
            <Nav.Link as={Link}to="nonvag">Non Veg</Nav.Link>
            <Nav.Link as={Link} to="veg">Veg</Nav.Link>
            <Nav.Link as={Link} to="fruitveges">Fruits & Vegetables</Nav.Link>
            <Nav.Link as={Link} to="personalcare">Personal care</Nav.Link>
            <Nav.Link as={Link} to="dairybac">Dairy & Bakery</Nav.Link>

          </Nav>
        </Container>
        </Navbar>
    </>
  )
}

export default Thirdnav