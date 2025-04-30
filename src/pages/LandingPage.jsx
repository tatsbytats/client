import React, { useState, useEffect } from 'react';
import {
    Navbar,
    Nav,
    Tab,
    Row,
    Col,
    Container,
    Offcanvas,
    Button,
    Image,
    Card,
    ListGroup,
    Accordion
} from 'react-bootstrap';
import {
    List,
    Heart,
    House,
    InfoCircle,
    Calendar,
    Shield,
    Images,
    X,
    Facebook,
    Twitter,
    Instagram,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../assets/styles/custom-buttons.css';
import '../assets/styles/custom-navbar.css';
import '../assets/styles/custom-text-colors.css';
import '../assets/styles/custom-theme.css'
import logo from '../assets/logo.png';

import Footer from '../components/common/Footer';
import RainbowBridge from '../components/common/RainbowBridge';
import Events from '../components/common/Events';
import PetsForAdoption from '../components/common/PetsForAdoption';
import DonationModal from '../components/common/DonationModal';
import AnimalWelfareLaw from '../components/common/AnimalWelfareLaw';
import GalleryTab from '../components/common/Gallery';
import AboutUsTab from '../components/common/AboutUsTab';

const LandingPage = () => {
    const [showDonationModal, setShowDonationModal] = useState(false);

    const [activeTab, setActiveTab] = useState('Gallery');
    const [showSidebar, setShowSidebar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

    const toggleSidebar = () => setShowSidebar(!showSidebar);
    const closeSidebar = () => setShowSidebar(false);
    const toggleSidebarCollapse = () => setSidebarCollapsed(!sidebarCollapsed);

    // Track window resize for responsive adjustments
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Close sidebar automatically when resizing to larger screens
        if (windowWidth >= 992 && showSidebar) {
            setShowSidebar(false);
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth, showSidebar]);

    // Sample data
    const galleryImages = [
        { id: 1, src: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Linny' },
        { id: 2, src: 'https://images.pexels.com/photos/3387169/pexels-photo-3387169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Tuck' },
        { id: 3, src: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Ming-ming' },
        { id: 4, src: 'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Hedgie' },
        { id: 5, src: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Linny' },
        { id: 6, src: 'https://images.pexels.com/photos/3387169/pexels-photo-3387169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Tuck' },
        { id: 7, src: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Ming-ming' },
        { id: 8, src: 'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Hedgie' },
    ];





    // Navigation items data
    const navItems = [
        { key: 'Gallery', icon: <Images />, label: 'Gallery' },
        { key: 'ForAdoption', icon: <House />, label: 'For Adoption' },
        { key: 'ForRescue', icon: <Heart />, label: 'For Rescue' },
        { key: 'RainbowBridge', icon: <Heart />, label: 'Rainbow Bridge' },
        { key: 'Events', icon: <Calendar />, label: 'Events' },
        { key: 'WelfareLaw', icon: <Shield />, label: 'Animal Welfare Law' },
        { key: 'AboutUs', icon: <InfoCircle />, label: 'About Us' },
    ];

    // Handle tab change and close sidebar on mobile
    const handleTabSelect = (tab) => {
        setActiveTab(tab);
        if (windowWidth < 992) {
            closeSidebar();
        }
    };



    // Filter pets based on type and color selections

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Donation Modal */}
            <DonationModal
                show={showDonationModal}
                handleClose={() => setShowDonationModal(false)}
            />
            {/* Navbar */}
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
                            <Button as={Link} to="/login" variant="outline-light" className="px-3 py-2">
                                Login
                            </Button>
                            <Button onClick={() => setShowDonationModal(true)} variant="danger" className="text-white px-3 py-2 d-none d-lg-flex align-items-center">
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

            {/* Mobile Sidebar */}
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

            {/* Main Content */}
            <Container fluid className="flex-grow-1 py-0 px-0">
                <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                    <Row className="g-0">
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


                        {/* Content Area */}
                        <Col
                            xs={12}
                            lg={sidebarCollapsed ? 11 : 9}
                            className="content-area px-3 px-lg-4 pb-4 c-background-cream"
                            style={{ transition: 'margin-left 0.3s ease-in-out' }}
                        >
                            {/* Mobile Tab Header */}
                            <div className="d-lg-none mb-4">
                                <h3 className="text-primary border-bottom pb-2">
                                    {navItems.find(item => item.key === activeTab)?.label}
                                </h3>
                            </div>

                            <Tab.Content>
                                <GalleryTab images={galleryImages} />

                                <PetsForAdoption pets={[1, 2]} />

                                {/* For Rescue Tab */}
                                <Tab.Pane eventKey="ForRescue">
                                    <h2 className="fw-bold mb-4 text-gradient d-none d-lg-block">Animals Needing Rescue</h2>
                                    {/* <Card className="bg-light mb-4 border-0 shadow-sm">
                                        <Card.Body>
                                            <Card.Title className="text-danger">Urgent Cases</Card.Title>
                                            <Card.Text>
                                                These animals urgently need your help. If you can provide
                                                temporary foster care or know someone who can, please contact us immediately.
                                            </Card.Text>
                                            <Row xs={1} sm={2} className="g-2">
                                                <Col>
                                                    <Button variant="warning" className="w-100">
                                                        Learn About Fostering
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-danger" className="w-100">
                                                        Emergency Contact
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <Accordion defaultActiveKey="0" className="mb-4">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How Rescue Process Works</Accordion.Header>
                                            <Accordion.Body>
                                                Our rescue process involves several steps to ensure the animals' safety...
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Foster Requirements</Accordion.Header>
                                            <Accordion.Body>
                                                To become a foster parent, you'll need to meet certain requirements...
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion> */}
                                </Tab.Pane>

                                {/* Rainbow Bridge Tab */}
                                <Tab.Pane eventKey="RainbowBridge">
                                    <RainbowBridge />
                                </Tab.Pane>

                                {/* Events Tab */}
                                <Tab.Pane eventKey="Events">
                                    <Events />
                                </Tab.Pane>

                                {/* Animal Welfare Law Tab */}
                                <AnimalWelfareLaw />

                                {/* About Us Tab */}
                                <AboutUsTab />
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

            <Footer />
        </div>
    );
};

export default LandingPage;