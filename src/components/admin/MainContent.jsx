// src/components/MainContent.jsx
import React from 'react';
import { Table, Card, Row, Col } from 'react-bootstrap';

const DashboardOverview = () => (
  <>
    <h2>Dashboard Overview</h2>
    <Row className="mb-4">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Animals Registered</Card.Title>
            <Card.Text>1,254</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Events This Month</Card.Title>
            <Card.Text>12</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Inventory Items</Card.Title>
            <Card.Text>4,310</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Card>
      <Card.Body>
        <Card.Title>Analytics Summary</Card.Title>
        <p>Summary of animal intakes, financials, and event metrics.</p>
      </Card.Body>
    </Card>
  </>
);

const AnimalDatabase = () => (
  <>
    <h2>Animal Database</h2>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Species</th>
          <th>Age</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>001</td><td>Bella</td><td>Dog</td><td>4</td><td>Adopted</td></tr>
        <tr><td>002</td><td>Max</td><td>Cat</td><td>2</td><td>Available</td></tr>
        <tr><td>003</td><td>Charlie</td><td>Rabbit</td><td>1</td><td>Fostered</td></tr>
      </tbody>
    </Table>
  </>
);

const AccountDatabase = () => (
  <>
    <h2>Account Database</h2>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1001</td><td>Alice Smith</td><td>alice@example.com</td><td>Admin</td></tr>
        <tr><td>1002</td><td>Bob Johnson</td><td>bob@example.com</td><td>Editor</td></tr>
      </tbody>
    </Table>
  </>
);

const AccountingDatabase = () => (
  <>
    <h2>Accounting Database</h2>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>TX1001</td><td>2025-04-01</td><td>Donation</td><td>$250</td></tr>
        <tr><td>TX1002</td><td>2025-04-03</td><td>Vet Expense</td><td>-$75</td></tr>
      </tbody>
    </Table>
  </>
);

const InventoryDatabase = () => (
  <>
    <h2>Inventory Database</h2>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Item</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Dog Food</td><td>Supplies</td><td>320</td><td>In Stock</td></tr>
        <tr><td>Litter Box</td><td>Equipment</td><td>25</td><td>Low Stock</td></tr>
      </tbody>
    </Table>
  </>
);

const EventCalendar = () => (
  <>
    <h2>Event Calendar</h2>
    <ul>
      <li><strong>April 30:</strong> Adoption Fair</li>
      <li><strong>May 05:</strong> Volunteer Orientation</li>
      <li><strong>May 15:</strong> Fundraiser Gala</li>
    </ul>
  </>
);

const Reports = ({ type }) => (
  <>
    <h2>{type} Reports</h2>
    <p>This section contains analytics for {type.toLowerCase()}.</p>
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Chart Placeholder</Card.Title>
        <div style={{ height: '200px', background: '#e9ecef' }} className="text-center p-5">[arghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh]</div>
      </Card.Body>
    </Card>
  </>
);

const Settings = () => (
  <>
    <h2>Database Settings</h2>
    <p>Manage database preferences, backups, and integrations here.</p>
  </>
);

const Logout = () => (
  <>
    <h2>Logout</h2>
    <p>You have been logged out. Please close the browser or login again.</p>
  </>
);

const MainContent = ({ activeView }) => {
  switch (activeView) {
    case 'dashboard':
      return <DashboardOverview />;
    case 'animal':
      return <AnimalDatabase />;
    case 'account':
      return <AccountDatabase />;
    case 'accounting':
      return <AccountingDatabase />;
    case 'inventory':
      return <InventoryDatabase />;
    case 'calendar':
      return <EventCalendar />;
    case 'analytics':
      return <Reports type="Overview Analytics" />;
    case 'animalReports':
      return <Reports type="Animal" />;
    case 'financialReports':
      return <Reports type="Financial" />;
    case 'inventoryReports':
      return <Reports type="Inventory" />;
    case 'settings':
      return <Settings />;
    case 'logout':
      return <Logout />;
    default:
      return <DashboardOverview />;
  }
};

export default MainContent;
