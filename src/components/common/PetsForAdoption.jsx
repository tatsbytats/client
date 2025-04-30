import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  Col, 
  Row, 
  Tab, 
  Container, 
  ToggleButton, 
  ButtonGroup,
  Badge
} from 'react-bootstrap';
import '../../assets/styles/PetsForAdoption.css'; // Import your CSS file for custom styles

const PetsForAdoption = ({ pets }) => {
  // State for filters
  const [filters, setFilters] = useState({
    type: 'All',
    color: 'All'
  });

  // Available filter options
  const filterOptions = {
    types: ['All', 'Dog', 'Cat'],
    colors: ['All', 'Brown', 'Black', 'White', 'Gray']
  };

  // Filter pets based on current filters
  const filteredPets = pets.filter(pet => {
    const typeMatch = filters.type === 'All' || pet.type === filters.type;
    const colorMatch = filters.color === 'All' || pet.color === filters.color;
    return typeMatch && colorMatch;
  });

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <Tab.Pane eventKey="ForAdoption" className="pets-adoption-pane">
      <Container className="py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="mb-3 text-deep-raspberry fw-bold">Pets Available for Adoption</h2>
          <p className="lead text-muted">Find your perfect companion and give them a forever home</p>
        </div>

        {/* Filter Controls */}
        <div className="mb-5 p-4 bg-light rounded-3 shadow-sm">
          <Row className="g-3 justify-content-center">
            <Col md={6} className="text-center">
              <h5 className="mb-3 text-uppercase text-primary fw-semibold">Filter by Type</h5>
              <ButtonGroup className="flex-wrap">
                {filterOptions.types.map(type => (
                  <ToggleButton
                    key={type}
                    id={`type-${type}`}
                    type="radio"
                    variant="outline-primary"
                    name="type"
                    value={type}
                    checked={filters.type === type}
                    onChange={() => handleFilterChange('type', type)}
                    className="rounded-pill mx-1 mb-2"
                  >
                    {type}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>
            
            <Col md={6} className="text-center">
              <h5 className="mb-3 text-uppercase text-primary fw-semibold">Filter by Color</h5>
              <ButtonGroup className="flex-wrap">
                {filterOptions.colors.map(color => (
                  <ToggleButton
                    key={color}
                    id={`color-${color}`}
                    type="radio"
                    variant="outline-secondary"
                    name="color"
                    value={color}
                    checked={filters.color === color}
                    onChange={() => handleFilterChange('color', color)}
                    className="rounded-pill mx-1 mb-2"
                  >
                    {color}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>
          </Row>
        </div>

        {/* Pet Cards Grid */}
        {filteredPets.length > 0 ? (
          <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
            {filteredPets.map(pet => (
              <Col key={pet.id}>
                <Card className="h-100 shadow border-0 overflow-hidden hover-scale">
                  <div className="pet-image-container">
                    <Card.Img
                      variant="top"
                      src={pet.img}
                      alt={pet.name}
                      className="pet-image"
                    />
                    <Badge bg="success" className="position-absolute top-0 end-0 m-2">
                      Available
                    </Badge>
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <Card.Title className="fw-bold">{pet.name}</Card.Title>
                      <div className="d-flex gap-2 mb-2">
                        <Badge bg="info" className="text-capitalize">{pet.type}</Badge>
                        <Badge bg="warning" text="dark" className="text-capitalize">{pet.color}</Badge>
                      </div>
                      <Card.Text className="text-muted">
                        <div><strong>Breed:</strong> {pet.breed}</div>
                        <div><strong>Age:</strong> {pet.age}</div>
                      </Card.Text>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      className="mt-auto align-self-stretch rounded-pill"
                      size="lg"
                    >
                      Adopt {pet.name}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5 my-5">
            <div className="display-4 mb-3">🐾</div>
            <h4 className="fw-bold">No pets match your filters</h4>
            <p className="text-muted">Try adjusting your search criteria</p>
            <Button 
              variant="outline-primary" 
              size="lg" 
              className="mt-3 rounded-pill"
              onClick={() => setFilters({ type: 'All', color: 'All' })}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Container>
    </Tab.Pane>
  );
};

export default PetsForAdoption;

