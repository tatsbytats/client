import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ event }) => {
    return (
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
    );
};

export default EventCard;