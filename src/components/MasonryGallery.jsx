import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';
import '../styles/MasonryGallery.css';

const MasonryGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="image-cards">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`image-card ${(index === 0 || index === 3) ? 'wide-card' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="card-content">
              <img src={image} alt={`Boat view ${index + 1}`} loading="lazy" />
              <div className="image-overlay">
                <span className="zoom-icon">🔍</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGallery;
