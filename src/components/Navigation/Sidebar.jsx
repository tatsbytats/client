import React from 'react';
import { Col, Card, Nav } from 'react-bootstrap';

const Sidebar = ({ sidebarCollapsed, activeTab, setActiveTab, navItems }) => {
    return (
        <Col
            lg={sidebarCollapsed ? 1 : 3}
            className="d-none d-lg-block sidebar-desktop c-background text-white"
            style={{
                position: 'sticky',
                top: '76px',
                height: 'auto',
                overflowY: 'auto',
                transition: 'width 0.3s ease-in-out',
                zIndex: 1000
            }}
        >
            <Card className="border-0 shadow-sm h-100 bg-transparent text-white" style={{ borderRadius: '0' }}>
                <Card.Body className="p-0 d-flex flex-column">
                    <Nav variant="pills" className="flex-column flex-grow-1">
                        {navItems.map((item) => (
                            <Nav.Item key={item.key}>
                                <Nav.Link
                                    active={activeTab === item.key}
                                    onClick={() => setActiveTab(item.key)}
                                    className="rounded-0 border-bottom py-3 text-white"
                                    style={{
                                        backgroundColor: activeTab === item.key ? '#D16D89' : 'transparent',
                                        paddingLeft: sidebarCollapsed ? '0' : '1.5rem',
                                        paddingRight: sidebarCollapsed ? '0' : '1.5rem',
                                        textAlign: sidebarCollapsed ? 'center' : 'left'
                                    }}
                                >
                                    <span className={sidebarCollapsed ? '' : 'me-2'}>
                                        {React.cloneElement(item.icon, {
                                            size: sidebarCollapsed ? 20 : 16,
                                            color: 'white' // explicitly set icon color
                                        })}
                                    </span>
                                    {!sidebarCollapsed && item.label}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Sidebar;