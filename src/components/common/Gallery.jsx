import React, { useState } from 'react';
import { Tab, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../assets/styles/gallery.css'; // Add this for styling if not already created

const GalleryTab = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <Tab.Pane eventKey="Gallery" className="gallery-tab py-4 px-3">
      <h2 className="mb-3 text-deep-raspberry fw-bold">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleImageClick(image)}
          >
            <div className="image-wrapper">
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${image.id}`}
                className="gallery-image"
                loading="lazy"
              />
              {image.caption && (
                <div className="image-overlay">
                  <span>{image.caption}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.caption || 'Image Preview'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || 'Enlarged view'}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '70vh', objectFit: 'contain' }}
            />
          )}
        </Modal.Body>
        {selectedImage?.description && (
          <Modal.Footer>
            <p className="text-muted mb-0">{selectedImage.description}</p>
          </Modal.Footer>
        )}
      </Modal>
    </Tab.Pane>
  );
};

GalleryTab.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired
};

export default GalleryTab;
