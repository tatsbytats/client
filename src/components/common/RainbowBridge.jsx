// RainbowBridge.jsx
import React from 'react';
import { Image, Button, Card, Row, Col } from 'react-bootstrap';
import '../../assets/styles/custom-text-colors.css';
import '../../assets/styles/custom-buttons.css';

const RainbowBridge = () => {
  // Static data for pet memorials
  const petMemorials = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      breed: 'Golden Retriever',
      years: '2008 - 2020',
      image: '/cat1.jpeg',
      quote: 'The most loyal companion one could ask for.'
    },
    {
      id: 2,
      name: 'Whiskers',
      type: 'Cat',
      breed: 'Siamese',
      years: '2012 - 2022',
      image: '/pexels-photo-326012.jpeg',
      quote: 'Always curious, forever in our hearts.'
    },
    {
      id: 3,
      name: 'Bella',
      type: 'Dog',
      breed: 'Labrador',
      years: '2015 - 2023',
      image: '/hedgehog-animal-baby-cute-50577.jpeg',
      quote: 'Brought joy to every moment.'
    }
  ];

  return (
    <div className="text-center py-4">
      <h2 className="mb-4 text-deep-raspberry d-none d-lg-block">Rainbow Bridge</h2>
      <div className="mx-auto" style={{ maxWidth: '500px' }}>
        <Image
          src="https://source.unsplash.com/random/400x300/?angel"
          rounded
          className="mb-3 shadow"
          fluid
          style={{ height: '300px', objectFit: 'cover' }}
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

      {/* Pet Memorial Cards Section */}
      <div className="mt-5">
        <h4 className="mb-4">Our Beloved Companions</h4>
        <Row xs={1} md={2} lg={3} className="g-4">
          {petMemorials.map((pet) => (
            <Col key={pet.id}>
              <PetCard pet={pet} />
            </Col>
          ))}
        </Row>
      </div>

      <Button variant="outline-primary" className="mt-5 btn-sunrise-coral">
        Share Your Memorial
      </Button>
    </div>
  );
};

// PetCard Component with consistent image sizing and candle counter
const PetCard = ({ pet }) => {
  // Initialize candle count from localStorage or default to 0
  const [candleCount, setCandleCount] = React.useState(() => {
    const savedCount = localStorage.getItem(`candleCount_${pet.id}`);
    return savedCount ? parseInt(savedCount) : 0;
  });

  const handleLightCandle = () => {
    const newCount = candleCount + 1;
    setCandleCount(newCount);
    localStorage.setItem(`candleCount_${pet.id}`, newCount.toString());
  };

  return (
    <Card className="h-100 shadow-sm">
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={pet.image} 
          style={{ 
            height: '100%', 
            width: '100%', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{pet.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {pet.type} • {pet.breed}
        </Card.Subtitle>
        <Card.Text className="text-muted">{pet.years}</Card.Text>
        <Card.Text className="fst-italic mt-auto">"{pet.quote}"</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <Button 
          variant="outline-secondary" 
          size="sm" 
          className="w-100"
          onClick={handleLightCandle}
        >
          Light a Candle ({candleCount})
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default RainbowBridge;