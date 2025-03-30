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
          <Nav.Link as={Link} to="home">Home Care</Nav.Link>
            <Nav.Link as={Link}to="nonvag">Non Veg</Nav.Link>
            <Nav.Link as={Link} to="brand">Branded Food</Nav.Link>
            <Nav.Link as={Link} to="frut">Fruits & Vegetables</Nav.Link>
            <Nav.Link as={Link} to="frozen">Frozen</Nav.Link>
            <Nav.Link as={Link} to="dairy">Dairy & Bakery</Nav.Link>

          </Nav>
        </Container>
        </Navbar>
    </>
  )
}

export default Thirdnav