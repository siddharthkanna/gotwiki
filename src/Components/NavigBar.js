import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

function NavigBar() {
  return (
    <Navbar collapseOnSelect scrolling bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand style={{ fontFamily: "GameOfThrones" }}>
         
            <Nav.Link as={Link} to="/">
              GOTWIKI
            </Nav.Link>
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ fontFamily: "GameOfThrones", fontSize: "11px" }}
        >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/episodes">
              Episodes
            </Nav.Link>
            <Nav.Link as={Link} to="/characters">
              Characters
            </Nav.Link>
            <Nav.Link as={Link} to="/houses">
              Houses
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigBar;
