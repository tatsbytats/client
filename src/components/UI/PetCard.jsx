import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PetCard = ({ pet }) => {
    return (
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
                    {pet.color && <><strong>Color:</strong> {pet.color}</>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <Button variant="primary" className="w-100">
                    Adopt Me
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default PetCard;