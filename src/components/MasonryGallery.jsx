import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MasonryGallery.css';

const MasonryGallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <div className="image-cards">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-content">
              <img src={image} alt={`Boat view ${index + 1}`} loading="lazy" />
              <div className="card-overlay">
                <span>View {index + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
