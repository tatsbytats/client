import React, { useState, useEffect, useRef } from 'react';
import {
  Offcanvas,
  Nav,
  Button
} from 'react-bootstrap';
import {
  House,
  Database,
  Person,
  Calculator,
  Box,
  Calendar2,
  BarChart,
  Gear,
  BoxArrowRight,
  List
} from 'react-bootstrap-icons';

const Sidebar = ({ setActiveView, activeView }) => {
  const [show, setShow] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside (for mobile/tablet)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (show && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Check if the click is not on the toggle button
        const toggleButton = document.querySelector('.sidebar-toggle-button');
        if (!toggleButton?.contains(event.target)) {
          setShow(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (view) => {
    setActiveView(view);
    // Close sidebar automatically on mobile after selection
    if (window.innerWidth < 768) {
      handleClose();
    }
  };

  // Group navbar items for better organization
  const navItems = [
    {
      section: "Main",
      items: [
        { id: 'dashboard', icon: <House size={16} />, label: 'Dashboard' }
      ]
    },
    {
      section: "Databases",
      items: [
        { id: 'animal', icon: <Database size={16} />, label: 'Animals' },
        { id: 'account', icon: <Person size={16} />, label: 'Accounts' },
        { id: 'accounting', icon: <Calculator size={16} />, label: 'Accounting' },
        { id: 'inventory', icon: <Box size={16} />, label: 'Inventory' },
        { id: 'calendar', icon: <Calendar2 size={16} />, label: 'Calendar' }
      ]
    },
    {
      section: "Reports",
      items: [
        { id: 'analytics', icon: <BarChart size={16} />, label: 'Analytics' },
        { id: 'animalReports', icon: <Database size={16} />, label: 'Animal Reports' },
        { id: 'financialReports', icon: <Calculator size={16} />, label: 'Financial Reports' },
        { id: 'inventoryReports', icon: <Box size={16} />, label: 'Inventory Reports' }
      ]
    }
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <Button 
        variant="link" 
        className="sidebar-toggle-button d-md-none p-1 text-secondary border-0 shadow-none" 
        onClick={handleShow}
        aria-label="Toggle sidebar"
      >
        <List size={24} />
      </Button>

      <Offcanvas
        ref={sidebarRef}
        show={show}
        onHide={handleClose}
        backdrop={false} // We handle backdrop ourselves for better control
        scroll={true}
        className="bg-white shadow-sm"
        responsive="md"
        style={{ maxWidth: '250px' }}
      >
        <Offcanvas.Header className="border-bottom py-2">
          <h5 className="mb-0 fw-semibold">Database System</h5>
          <Button 
            variant="link" 
            className="ms-auto p-0 text-secondary d-md-none border-0 shadow-none" 
            onClick={handleClose}
            aria-label="Close sidebar"
          >
            &times;
          </Button>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="p-0 d-flex flex-column" style={{ overflowY: 'auto' }}>
          <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
            {/* Navigation Items */}
            {navItems.map((section, index) => (
              <div key={index} className="mb-1">
                <div className="text-secondary text-uppercase px-3 py-2 small fw-semibold">
                  {section.section}
                </div>
                <Nav className="flex-column">
                  {section.items.map(item => (
                    <Nav.Item key={item.id}>
                      <Nav.Link
                        onClick={() => handleSelect(item.id)}
                        active={activeView === item.id}
                        className={`d-flex align-items-center px-3 py-2 ${
                          activeView === item.id 
                            ? 'bg-primary bg-opacity-10 text-primary fw-medium'
                            : 'text-secondary hover-bg-light'
                        }`}
                      >
                        <span className="me-3">{item.icon}</span>
                        <span className="small">{item.label}</span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            ))}
          </div>

          {/* Settings & Logout - fixed at the bottom */}
          <div className="border-top">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleSelect('settings')}
                  active={activeView === 'settings'}
                  className={`d-flex align-items-center px-3 py-2 ${
                    activeView === 'settings' 
                      ? 'bg-primary bg-opacity-10 text-primary fw-medium'
                      : 'text-secondary hover-bg-light'
                  }`}
                >
                  <span className="me-3"><Gear size={16} /></span>
                  <span className="small">Settings</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleSelect('logout')}
                  className="d-flex align-items-center px-3 py-2 text-secondary hover-bg-light"
                >
                  <span className="me-3"><BoxArrowRight size={16} /></span>
                  <span className="small">Logout</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;