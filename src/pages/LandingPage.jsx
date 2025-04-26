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
    Carousel,
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
import '../styles/custom-buttons.css';
import '../styles/custom-navbar.css';
import '../styles/custom-text-colors.css';
import logo from '../assets/logo.png';

const LandingPage = () => {
    const [activeTab, setActiveTab] = useState('Gallery');
    const [showSidebar, setShowSidebar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
    ];

    const adoptionPets = [
        { id: 1, name: 'Max', type: 'Dog', age: '2 years', breed: 'Labrador', img: 'https://source.unsplash.com/random/200x200/?labrador' },
        { id: 2, name: 'Luna', type: 'Cat', age: '1 year', breed: 'Siamese', img: 'https://source.unsplash.com/random/200x200/?siamese' },
        { id: 3, name: 'Bella', type: 'Dog', age: '3 years', breed: 'Beagle', img: 'https://source.unsplash.com/random/200x200/?beagle' },
    ];

    const events = [
        { id: 1, title: 'Adoption Day', date: 'June 10th', time: '10am-4pm', location: 'Community Center' },
        { id: 2, title: 'Fundraiser Gala', date: 'July 15th', time: '7pm-11pm', location: 'Grand Hotel' },
        { id: 3, title: 'Volunteer Training', date: 'August 5th', time: '9am-12pm', location: 'Shelter' },
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

    const [typeFilter, setTypeFilter] = useState('All');
    const [colorFilter, setColorFilter] = useState('All');

    // Filter pets based on type and color selections
    const filteredPets = adoptionPets.filter(pet => {
        // Check if pet matches the type filter
        const matchesType = typeFilter === 'All' || pet.type === typeFilter;

        // Check if pet matches the color filter
        const matchesColor = colorFilter === 'All' || pet.color === colorFilter;

        // Return true only if both filters match
        return matchesType && matchesColor;
    });

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <Navbar variant="dark" expand="lg" className="px-3 shadow-sm navbar-custom sticky-top">
                <Container fluid>
                    {/* Mobile sidebar toggle - only show on mobile */}
                    <Button
                        variant="outline-light"
                        onClick={toggleSidebar}
                        className="me-2 d-lg-none c-buttons"
                        aria-label="Toggle navigation"
                    >
                        <List size={20} />
                    </Button>

                    {/* Desktop sidebar collapse toggle - only show on desktop */}
                    <Button
                        variant="outline-light"
                        onClick={toggleSidebarCollapse}
                        className="me-auto d-none d-lg-flex c-buttons align-items-center"
                        aria-label="Toggle sidebar"
                        style={{ width: '36px', height: '36px', padding: '0', justifyContent: 'center' }}
                    >
                        <List size={20} />
                    </Button>

                    <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center">
                        <Image
                            src={logo}
                            roundedCircle
                            className="me-2"
                            width="40"
                            height="40"
                            alt="TAARA Logo"
                        />
                        TAARA
                    </Navbar.Brand>

                    {/* Desktop navigation items */}
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Button variant="outline-light" className="me-2">Login</Button>
                            <Button variant="danger" className="text-white d-none d-lg-flex">
                                <Heart className="me-1" /> Donate
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
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
            <Container fluid className="flex-grow-1 py-4 px-0">
                <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                    <Row className="g-0">
                        {/* Desktop Sidebar - sticky and properly positioned */}
                        <Col
                            lg={sidebarCollapsed ? 1 : 3}
                            className="d-none d-lg-block sidebar-desktop"
                            style={{
                                position: 'sticky',
                                top: '76px',
                                height: 'calc(100vh - 76px)',
                                overflowY: 'auto',
                                transition: 'width 0.3s ease-in-out',
                                zIndex: 1000
                            }}
                        >
                            <Card className="border-0 shadow-sm h-100" style={{ borderRadius: '0' }}>
                                <Card.Body className="p-0 d-flex flex-column">
                                    <Nav variant="pills" className="flex-column flex-grow-1">
                                        {navItems.map((item) => (
                                            <Nav.Item key={item.key}>
                                                <Nav.Link
                                                    active={activeTab === item.key}
                                                    onClick={() => setActiveTab(item.key)}
                                                    className="rounded-0 border-bottom py-3"
                                                    style={{
                                                        paddingLeft: sidebarCollapsed ? '0' : '1.5rem',
                                                        paddingRight: sidebarCollapsed ? '0' : '1.5rem',
                                                        textAlign: sidebarCollapsed ? 'center' : 'left'
                                                    }}
                                                >
                                                    <span className={sidebarCollapsed ? '' : 'me-2'}>
                                                        {React.cloneElement(item.icon, { size: sidebarCollapsed ? 20 : 16 })}
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
                            className="content-area px-3 px-lg-4"
                            style={{ transition: 'margin-left 0.3s ease-in-out' }}
                        >
                            {/* Mobile Tab Header */}
                            <div className="d-lg-none mb-4">
                                <h3 className="text-primary border-bottom pb-2">
                                    {navItems.find(item => item.key === activeTab)?.label}
                                </h3>
                            </div>

                            <Tab.Content>
                                {/* Gallery Tab */}
                                <Tab.Pane eventKey="Gallery" transition={false}>
                                    <h2 className="mb-4 d-none d-lg-block text-muted-charcoal">Our Happy Animals</h2>
                                    <Carousel className="mb-4 rounded overflow-hidden shadow-sm">
                                        {galleryImages.map((image) => (
                                            <Carousel.Item key={image.id}>
                                                <div className="position-relative" style={{ height: '50vh', maxHeight: '500px' }}>
                                                    <img
                                                        className="d-block w-100 h-100"
                                                        src={image.src}
                                                        alt={image.alt}
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded">
                                                        <h5>{image.alt}</h5>
                                                    </Carousel.Caption>
                                                </div>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <Row xs={1} sm={2} lg={3} className="g-4">
                                        {galleryImages.map((image) => (
                                            <Col key={image.id}>
                                                <Card className="h-100 shadow-sm hover-scale">
                                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                                        <Card.Img
                                                            variant="top"
                                                            src={image.src}
                                                            alt={image.alt}
                                                            className="h-100 w-100"
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Text className="text-center">
                                                            {image.alt}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="ForAdoption">
                                    <h2 className="mb-4 text-primary d-none d-lg-block">Pets Available for Adoption</h2>
                                    <p className="lead">
                                        Give these wonderful animals a forever home!
                                    </p>

                                    {/* Filter Controls */}
                                    <div className="mb-4">
                                        <h5>Filter By:</h5>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            <Button
                                                variant="outline-primary"
                                                onClick={() => setTypeFilter('All')}
                                                active={typeFilter === 'All'}
                                            >
                                                All Pets
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                onClick={() => setTypeFilter('Dog')}
                                                active={typeFilter === 'Dog'}
                                            >
                                                Dogs
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                onClick={() => setTypeFilter('Cat')}
                                                active={typeFilter === 'Cat'}
                                            >
                                                Cats
                                            </Button>
                                        </div>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => setColorFilter('All')}
                                                active={colorFilter === 'All'}
                                            >
                                                All Colors
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => setColorFilter('Brown')}
                                                active={colorFilter === 'Brown'}
                                            >
                                                Brown
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => setColorFilter('Black')}
                                                active={colorFilter === 'Black'}
                                            >
                                                Black
                                            </Button>
                                        </div>
                                    </div>

                                    <Row xs={1} sm={2} lg={3} className="g-4">
                                        {filteredPets.map((pet) => (
                                            <Col key={pet.id}>
                                                <Card className="h-100 shadow-sm">
                                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                                        <Card.Img
                                                            variant="top"
                                                            src={pet.img}
                                                            alt={pet.name}
                                                            className="h-100 w-100"
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Title>{pet.name}</Card.Title>
                                                        <Card.Text>
                                                            <strong>Type:</strong> {pet.type}<br />
                                                            <strong>Breed:</strong> {pet.breed}<br />
                                                            <strong>Age:</strong> {pet.age}<br />
                                                            <strong>Color:</strong> {pet.color}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer className="bg-white border-0">
                                                        <Button variant="primary" className="w-100">
                                                            Adopt Me
                                                        </Button>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>

                                    {filteredPets.length === 0 && (
                                        <div className="text-center py-5">
                                            <p>No pets match your current filters. Please try different criteria.</p>
                                        </div>
                                    )}
                                </Tab.Pane>

                                {/* For Rescue Tab */}
                                <Tab.Pane eventKey="ForRescue">
                                    <h2 className="mb-4 text-primary d-none d-lg-block">Animals Needing Rescue</h2>
                                    <Card className="bg-light mb-4 border-0 shadow-sm">
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
                                    </Accordion>
                                </Tab.Pane>

                                {/* Rainbow Bridge Tab */}
                                <Tab.Pane eventKey="RainbowBridge">
                                    <div className="text-center py-4">
                                        <h2 className="mb-4 text-primary d-none d-lg-block">Rainbow Bridge</h2>
                                        <div className="mx-auto" style={{ maxWidth: '500px' }}>
                                            <Image
                                                src="https://source.unsplash.com/random/400x300/?angel"
                                                rounded
                                                className="mb-3 shadow"
                                                fluid
                                            />
                                        </div>
                                        <p className="lead">
                                            In loving memory of the animals we've loved and lost.
                                        </p>
                                        <blockquote className="blockquote">
                                            <p className="mb-0">
                                                "Until one has loved an animal, a part of one's soul remains unawakened."
                                            </p>
                                            <footer className="blockquote-footer mt-2">Anatole France</footer>
                                        </blockquote>
                                        <Button variant="outline-primary" className="mt-3">
                                            Share Your Memorial
                                        </Button>
                                    </div>
                                </Tab.Pane>

                                {/* Events Tab */}
                                <Tab.Pane eventKey="Events">
                                    <h2 className="mb-4 text-primary d-none d-lg-block">Upcoming Events</h2>
                                    <Row xs={1} sm={2} lg={3} className="g-4 mb-4">
                                        {events.map((event) => (
                                            <Col key={event.id}>
                                                <Card className="h-100 shadow-sm">
                                                    <Card.Body>
                                                        <Card.Title>{event.title}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">
                                                            {event.date} • {event.time}
                                                        </Card.Subtitle>
                                                        <Card.Text>
                                                            <strong>Location:</strong> {event.location}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer className="bg-white border-0">
                                                        <Button variant="outline-primary" className="w-100">
                                                            RSVP
                                                        </Button>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Card className="border-primary">
                                        <Card.Header className="bg-primary text-white">
                                            Subscribe to Our Calendar
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Never miss an event by subscribing to our calendar feed.
                                            </Card.Text>
                                            <Button variant="primary">
                                                Get Calendar Link
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>

                                {/* Welfare Law Tab */}
                                <Tab.Pane eventKey="WelfareLaw">
                                    <h2 className="mb-4 text-primary d-none d-lg-block">The Animal Welfare Law</h2>
                                    <Card className="mb-4 shadow-sm">
                                        <Card.Body>
                                            <Card.Title>Key Provisions</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Animals must be provided with adequate food and water</ListGroup.Item>
                                                <ListGroup.Item>Proper shelter must be available at all times</ListGroup.Item>
                                                <ListGroup.Item>Veterinary care must be provided when needed</ListGroup.Item>
                                                <ListGroup.Item>Protection from extreme weather conditions</ListGroup.Item>
                                                <ListGroup.Item>Freedom from unnecessary pain and suffering</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                    <Row xs={1} sm={2} className="g-3">
                                        <Col sm={12}>
                                            <Button variant="info" size="lg" className="w-100">
                                                Read the Full Law Text
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-secondary" className="w-100">
                                                Download PDF Version
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button variant="outline-info" className="w-100">
                                                Report a Violation
                                            </Button>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                {/* About Us Tab */}
                                <Tab.Pane eventKey="AboutUs">
                                    <h2 className="mb-4 text-primary d-none d-lg-block">About Our Organization</h2>
                                    <Row className="mb-4 g-4">
                                        <Col sm={6}>
                                            <Card className="h-100 border-0 shadow-sm">
                                                <Card.Body>
                                                    <Card.Title>Our Mission</Card.Title>
                                                    <Card.Text>
                                                        To improve anima lwelfare through awareness campaigns, providing food and shelter, and fostering a compassionate community. We aim to create a safe and supportive environment for all animals, ensuring they receive the care and respect thay deserve.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col sm={6}>
                                            <Card className="h-100 border-0 shadow-sm">
                                                <Card.Body>
                                                    <Card.Title>Our History</Card.Title>
                                                    <Card.Text>
                                                        Founded in 2010, we've helped over 5,000 animals find loving homes
                                                        and provided medical care to thousands more. Our team of dedicated
                                                        professionals and volunteers work tirelessly to make a difference.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Card className="border-primary mb-4">
                                        <Card.Header className="bg-primary text-white">
                                            Contact Information
                                        </Card.Header>
                                        <Card.Body>
                                            <Row className="g-4">
                                                <Col sm={6}>
                                                    <address>
                                                        <strong>TAARA for the Love of Strays</strong><br />
                                                        P-3 Burac St., San Lorenzo<br />
                                                        Tabaco, Philippines<br />
                                                        <abbr title="Phone">Phone:</abbr> (+63) 905 523 8105
                                                    </address>
                                                </Col>
                                                <Col sm={6}>
                                                    <p>
                                                        <strong>Email:</strong> tabacoanimalrescueadoption2022@gmail.com<br />
                                                        <strong>Hours:</strong> Mon-Fri 9am-5pm
                                                    </p>
                                                    <div className="d-flex flex-column flex-sm-row gap-2">
                                                        <Button variant="primary">
                                                            Contact Form
                                                        </Button>
                                                        <Button variant="outline-primary">
                                                            Volunteer Signup
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-white py-5 mt-auto">
                <Container>
                    <Row className="g-4">
                        <Col lg={4}>
                            <h5>Paws & Hearts</h5>
                            <p className="text-muted">
                                Dedicated to animal welfare since 2010.
                                A 501(c)(3) non-profit organization.
                            </p>
                            <div className="social-icons">
                                <Button variant="outline-light" size="sm" className="me-2">
                                <Facebook className="bi bi-facebook"></Facebook>
                                </Button>
                                <Button variant="outline-light" size="sm" className="me-2">
                                <Instagram className="bi bi-instagram"></Instagram>
                                </Button>
                                <Button variant="outline-light" size="sm" className="me-2">
                                    <Twitter></Twitter>
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
        </div>
    );
};

export default LandingPage;