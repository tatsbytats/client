// src/pages/admin/AdminDashboard.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import MainContent from '../../components/admin/MainContent';
import ThemeToggle from '../../components/admin/ThemeToggle';

const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState('dashboard'); // 👈 main content state

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div data-bs-theme={darkMode ? 'dark' : 'light'}>
      <Header />
      <Container fluid>
        <Row>
          <Col md={3} lg={2} className="sidebar p-0 bg-body-tertiary">
            <Sidebar setActiveView={setActiveView} /> {/* 👈 pass the setter */}
          </Col>
          <Col md={9} lg={10} className="ms-sm-auto px-md-4">
            <MainContent activeView={activeView} /> {/* 👈 pass the value */}
          </Col>
        </Row>
      </Container>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default AdminDashboard;
