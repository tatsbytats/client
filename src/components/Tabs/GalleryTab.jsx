import React from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import { galleryImages } from '../../data/sampleData';

const GalleryTab = () => {
    return (
        <>
            <h2 className="mt-4 mb-4 d-none d-lg-block text-muted-charcoal">Our Happy Animals</h2>
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
        </>
    );
};

export default GalleryTab;