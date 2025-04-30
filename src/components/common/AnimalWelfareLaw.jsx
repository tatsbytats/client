import React from 'react';
import {
  Tab,
  Card,
  ListGroup,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import '../../assets/styles/custom-welfare.css'; // You can keep or clean this as needed

const AnimalWelfareLaw = () => {
  const keyProvisions = [
    "Animals must be provided with adequate food and water",
    "Proper shelter must be available at all times",
    "Veterinary care must be provided when needed",
    "Protection from extreme weather conditions",
    "Freedom from unnecessary pain and suffering",
    "Adequate space for movement and expression of normal behavior",
    "Protection from fear and distress"
  ];

  return (
    <Tab.Pane eventKey="WelfareLaw" className="welfare-law-tab px-3 px-lg-4 py-4">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className="mb-3 text-deep-raspberry fw-bold">The Animal Welfare Law</h2>
        <p className="lead text-muted">
          Legal protections ensuring humane treatment of all animals.
        </p>
      </div>

      {/* Key Provisions Card */}
      <Card className="shadow-sm border-0 mb-5">
        <Card.Header className="bg-gradient text-black">
          <Card.Title className="mb-0 fs-4">Key Provisions</Card.Title>
        </Card.Header>
        <Card.Body className="p-0">
          <ListGroup variant="flush">
            {keyProvisions.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="py-3 px-4 border-start-0 border-end-0"
              >
                <div className="d-flex align-items-start">
                  <span className="badge text-black me-3 fs-6">{index + 1}</span>
                  <span className="text-muted">{item}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Legal Support Section */}
      <div className="bg-light rounded-4 p-4 p-md-5 text-center shadow-sm">
        <h5 className="fw-semibold mb-3">Need Help Understanding the Law?</h5>
        <p className="text-muted mb-4">
          Our legal team can guide you through animal welfare regulations and help you understand your rights and responsibilities.
        </p>
        <Button variant="info" className="rounded-pill px-4 py-2">
          Contact Legal Support <i className="bi bi-arrow-right ms-2"></i>
        </Button>
      </div>
    </Tab.Pane>
  );
};

export default AnimalWelfareLaw;
