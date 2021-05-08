import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar
} from "react-bootstrap";

const SNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ marginLeft: 30, marginRight: 20 }}>
      <Navbar.Brand href="/">Tic Tac Toe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Play</Nav.Link>
          <Nav.Link href="history">History</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SNavbar;
