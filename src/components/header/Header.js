import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import  Button  from "react-bootstrap/Button";
import  Container  from 'react-bootstrap/Container';
import  Nav  from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom/";
import  Navbar  from "react-bootstrap/Navbar";



const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand = 'lg'>
        <Container fluid>
            <Navbar.Brand href="/" style = {{'color': 'gold'}}>
                <FontAwesomeIcon icon = {faVideoSlash} />
                Movies
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style = {{maxHeight: '100px'}} navbarScroll>
                    <Nav.Link as={NavLink} to = "/" >Home</Nav.Link>
                    <Nav.Link as={NavLink} to = "/movies" >Watch Later</Nav.Link>
                </Nav>
                <Button variant="outline-info" className='me-2 '>Login</Button>

                <Button variant="outline-info">Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;