// Events.jsx
import '../../assets/styles/custom-buttons.css';
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';


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
    <>
      <h2 className="mb-4 d-none d-lg-block">Upcoming Events</h2>
      <Row xs={1} sm={2} lg={3} className="g-4">
        {eventsData.map((event) => (
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
                <Button className="btn-crimson-plum" variant="crimson-plum" > 
                  RSVP
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Events;