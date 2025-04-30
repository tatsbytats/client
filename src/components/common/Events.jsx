import '../../assets/styles/custom-buttons.css';

import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

// Static events data
const eventsData = [
  {
    id: 1,
    title: 'Adoption Day',
    date: 'June 15, 2023',
    time: '10:00 AM - 3:00 PM',
    location: 'Central Park, Main Pavilion'
  },
  {
    id: 2,
    title: 'Pet Care Workshop',
    date: 'June 22, 2023',
    time: '6:00 PM - 8:00 PM',
    location: 'Community Center, Room 203'
  },
  {
    id: 3,
    title: 'Vaccination Camp',
    date: 'July 5, 2023',
    time: '9:00 AM - 4:00 PM',
    location: 'Animal Shelter Downtown'
  },
  {
    id: 4,
    title: 'Fundraiser Gala',
    date: 'July 15, 2023',
    time: '7:00 PM - 11:00 PM',
    location: 'Grand Ballroom, Hilton Hotel'
  },
  {
    id: 5,
    title: 'Volunteer Training',
    date: 'July 20, 2023',
    time: '5:30 PM - 7:30 PM',
    location: 'Shelter Training Room'
  },
  {
    id: 6,
    title: 'Pet Parade',
    date: 'August 5, 2023',
    time: '12:00 PM - 4:00 PM',
    location: 'Main Street Downtown'
  }
];

const Events = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-3 text-deep-raspberry fw-bold">Upcoming Events</h2>

      <Row xs={1} sm={2} lg={3} className="g-4">
        {eventsData.map((event) => (
          <Col key={event.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="mb-2">{event.title}</Card.Title>
                <Card.Text className="text-muted small mb-2">
                  <i className="bi bi-calendar-event me-1"></i>
                  {event.date} &nbsp; • &nbsp; {event.time}
                </Card.Text>
                <Card.Text className="mb-0">
                  <strong>Location:</strong> {event.location}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 pt-0">
                <Button className="w-100 btn-crimson-plum" variant="crimson-plum">
                  RSVP
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
