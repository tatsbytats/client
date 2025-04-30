// src/components/Header.jsx
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand className="text-white fw-bold">Admin Dashboard</Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Item className="me-3">
            <span className="text-white">Welcome, Admin</span>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-light" size="sm" className="">
              <PersonCircle className="me-1" />
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
