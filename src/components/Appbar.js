import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Cart from './Cart';



const Appbar = () => {
  return (
    <Navbar  bg='info' expand="lg">
        <Container>
            <Navbar.Brand href="#home" ><h2 className='text-danger'>
                <span><i className='bi bi-yelp'></i>PIZZA SHOP</span>
                </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                    <Nav.Link href="#home" className='fw-bold'>HOME</Nav.Link>
                    <Nav.Link href="#menu" className='fw-bold'>MENU</Nav.Link>
                    <Nav.Link href="#service" className='fw-bold'>SERVICE</Nav.Link>
                    <Nav.Link href="#contact" className='fw-bold'>CONTACT</Nav.Link>
                    <Nav.Link href="#about" className='fw-bold'>ABOUT</Nav.Link>
                    <Cart/>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Appbar