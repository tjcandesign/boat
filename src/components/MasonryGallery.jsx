import React from 'react';
import Masonry from 'react-masonry-css';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import '../styles/MasonryGallery.css';

const MasonryGallery = ({ images }) => {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="image-container"
        >
          <Parallax
            bgImage={image}
            strength={200}
            className="parallax-container"
          >
            <div style={{ height: Math.max(400, Math.random() * 200 + 400) }}>
              <div className="image-overlay">
                <h3>View {index + 1}</h3>
              </div>
            </div>
          </Parallax>
        </motion.div>
      ))}
    </Masonry>
  );
};

export default MasonryGallery;
