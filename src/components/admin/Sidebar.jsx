import React, { useState } from 'react';
import {
  Offcanvas,
  Nav,
  Button
} from 'react-bootstrap';
import {
  HouseFill,
  Database,
  PersonLinesFill,
  CalculatorFill,
  BoxSeam,
  CalendarEvent,
  BarChartLine,
  GearWideConnected,
  DoorClosed,
  PlusCircle,
  FileEarmarkText,
  List
} from 'react-bootstrap-icons';

const Sidebar = ({ setActiveView, activeView }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (view) => {
    setActiveView(view);
    handleClose();
  };

  return (
    <>
      {/* Mobile toggle button - can be placed in your Header component */}
      <Button variant="link" className="d-md-none text-white" onClick={handleShow}>
        <List size={20} />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-body-tertiary"
        responsive="md"
        style={{ width: 'auto' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Database Management</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column p-0 overflow-y-auto">
          <Nav className="flex-column flex-grow-1">
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('dashboard')}
                active={activeView === 'dashboard'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <HouseFill size={18} /> Dashboard
              </Nav.Link>
            </Nav.Item>

            {/* Database Categories */}
            <div className="px-3 mt-3 mb-1 fw-bold text-uppercase small">Databases</div>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('animal')}
                active={activeView === 'animal'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <Database size={18} /> Animal Database
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('account')}
                active={activeView === 'account'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <PersonLinesFill size={18} /> Account Database
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('accounting')}
                active={activeView === 'accounting'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <CalculatorFill size={18} /> Accounting Database
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('inventory')}
                active={activeView === 'inventory'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <BoxSeam size={18} /> Inventory Database
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('calendar')}
                active={activeView === 'calendar'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <CalendarEvent size={18} /> Event Calendar
              </Nav.Link>
            </Nav.Item>

            {/* Reports Section */}
            <div className="px-3 mt-3 mb-1 fw-bold text-uppercase small">Reports & Analytics</div>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('analytics')}
                active={activeView === 'analytics'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <BarChartLine size={18} /> Overview Analytics
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('animalReports')}
                active={activeView === 'animalReports'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <FileEarmarkText size={18} /> Animal Reports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('financialReports')}
                active={activeView === 'financialReports'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <FileEarmarkText size={18} /> Financial Reports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleSelect('inventoryReports')}
                active={activeView === 'inventoryReports'}
                className="d-flex align-items-center gap-3 px-3 py-2"
              >
                <FileEarmarkText size={18} /> Inventory Reports
              </Nav.Link>
            </Nav.Item>

            {/* Settings Section */}
            <div className="mt-auto">
              <hr className="my-2" />
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleSelect('settings')}
                  active={activeView === 'settings'}
                  className="d-flex align-items-center gap-3 px-3 py-2"
                >
                  <GearWideConnected size={18} /> Database Settings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleSelect('logout')}
                  active={activeView === 'logout'}
                  className="d-flex align-items-center gap-3 px-3 py-2"
                >
                  <DoorClosed size={18} /> Logout
                </Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
