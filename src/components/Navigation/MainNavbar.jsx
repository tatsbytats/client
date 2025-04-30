import React from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import { List, Heart } from 'react-bootstrap-icons';
import logo from '../../assets/logo.png';

const MainNavbar = ({ toggleSidebar, toggleSidebarCollapse }) => {
    return (
        <Navbar variant="dark" expand="lg" className="px-3 px-lg-4 shadow-sm navbar-custom sticky-top">
            <Container fluid className="gap-3">
                {/* Sidebar toggle buttons - properly spaced */}
                <div className="d-flex align-items-center">
                    {/* Mobile toggle (hidden on desktop) */}
                    <Button
                        variant="outline-light"
                        onClick={toggleSidebar}
                        className="me-3 d-lg-none c-buttons p-2"
                        aria-label="Toggle navigation"
                    >
                        <List size={20} />
                    </Button>

                    {/* Desktop toggle (hidden on mobile) */}
                    <Button
                        variant="outline-light"
                        onClick={toggleSidebarCollapse}
                        className="d-none d-lg-flex c-buttons p-2 me-0"
                        aria-label="Toggle sidebar"
                    >
                        <List size={20} />
                    </Button>
                </div>

                {/* Brand - kept tight */}
                <Navbar.Brand href="#" className="d-flex align-items-center me-4">
                    <Image
                        src={logo}
                        roundedCircle
                        className="me-2"
                        width="40"
                        height="40"
                        alt="TAARA Logo"
                    />
                    <span className="fw-bold">TAARA</span>
                </Navbar.Brand>

                {/* Spacer to push nav items to right */}
                <div className="flex-grow-1 d-none d-lg-block"></div>

                {/* Navigation items */}
                <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                    <Nav className="align-items-center gap-3">
                        <Button variant="outline-light" className="px-3 py-2">
                            Login
                        </Button>
                        <Button variant="danger" className="text-white px-3 py-2 d-none d-lg-flex align-items-center">
                            <Heart className="me-2" size={18} />
                            Donate
                        </Button>
                    </Nav>
                </Navbar.Collapse>

                {/* Mobile menu toggle (hidden on desktop) */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 px-2 ms-auto">
                    <List size={24} />
                </Navbar.Toggle>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;