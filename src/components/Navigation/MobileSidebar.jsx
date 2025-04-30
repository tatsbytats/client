import React from 'react';
import { Offcanvas, Nav, Button } from 'react-bootstrap';
import { Heart, X } from 'react-bootstrap-icons';

const MobileSidebar = ({ showSidebar, closeSidebar, activeTab, handleTabSelect, navItems }) => {
    return (
        <Offcanvas
            show={showSidebar}
            onHide={closeSidebar}
            placement="start"
            className="sidebar-mobile w-75"
            backdrop={true}
        >
            <Offcanvas.Header className="bg-dark text-white">
                <Offcanvas.Title>Menu</Offcanvas.Title>
                <Button variant="link" className="text-white p-0" onClick={closeSidebar}>
                    <X size={24} />
                </Button>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0 d-flex flex-column">
                <Nav variant="pills" className="flex-column flex-grow-1">
                    {navItems.map((item) => (
                        <Nav.Item key={item.key}>
                            <Nav.Link
                                active={activeTab === item.key}
                                onClick={() => handleTabSelect(item.key)}
                                className="rounded-0 border-bottom py-3 px-4"
                            >
                                <span className="me-2">{item.icon}</span>
                                {item.label}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>

                {/* Donate button in mobile sidebar */}
                <div className="p-3 mt-auto">
                    <Button variant="danger" className="w-100">
                        <Heart className="me-1" /> Donate Now
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default MobileSidebar;