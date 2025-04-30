import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Heart } from 'react-bootstrap-icons';

const Footer = () => (
  <footer className="bg-dark text-white py-5 mt-auto">
    <Container>
      <Row className="g-4">
        <Col lg={4}>
          <h5>Paws & Hearts</h5>
          <p className="text-muted">
            Dedicated to animal welfare since 2010. A 501(c)(3) non-profit organization.
          </p>
          <div className="social-icons">
            <Button variant="outline-light" size="sm" className="me-2">
              <Facebook />
            </Button>
            <Button variant="outline-light" size="sm" className="me-2">
              <Instagram />
            </Button>
            <Button variant="outline-light" size="sm" className="me-2">
              <Twitter />
            </Button>
          </div>
        </Col>

        <Col xs={6} md={4} lg={3}>
          <h5>Quick Links</h5>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white px-0">Home</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Donate</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Volunteer</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Success Stories</Nav.Link>
          </Nav>
        </Col>

        <Col xs={6} md={4} lg={3}>
          <h5>Resources</h5>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white px-0">Pet Care Tips</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Adoption Process</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Spay/Neuter Info</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Emergency Contacts</Nav.Link>
          </Nav>
        </Col>

        <Col xs={6} md={4} lg={2}>
          <h5>Legal</h5>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white px-0">Privacy Policy</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Terms of Use</Nav.Link>
            <Nav.Link href="#" className="text-white px-0">Financial Reports</Nav.Link>
          </Nav>
        </Col>
      </Row>

      <hr className="mt-4 mb-3" />

      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <p className="mb-0 text-muted">
            &copy; {new Date().getFullYear()} Paws & Hearts. All rights reserved.
          </p>
        </Col>
        <Col md={6} className="text-md-end">
          <p className="mb-0 text-muted">
            Made with <Heart className="text-danger" /> for animals
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
