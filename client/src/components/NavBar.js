import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {


    return (
        <div className="NavBarContainer">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/"href="home" className="NavBarTitle">Courtney Cash</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navBarLinks">
            <Nav.Link to="/Books" href="Books">Books</Nav.Link>
            <Nav.Link to="/projects" href="projects">Projects</Nav.Link>
            <Nav.Link to="/profile" href="profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
}

export default NavBar;