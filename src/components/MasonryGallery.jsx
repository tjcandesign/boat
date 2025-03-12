import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MasonryGallery.css';

const MasonryGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="grid-image-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleImageClick(image)}
          >
            <div className="image-wrapper">
              <img src={image} alt={`Boat view ${index + 1}`} loading="lazy" />
              <div className="image-overlay">
                <span>View {index + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <div className="fullscreen-image-container" ref={scrollRef}>
              <img
                src={selectedImage}
                alt="Full view"
                className="fullscreen-image"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button className="close-button" onClick={handleClose}>
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGallery;
