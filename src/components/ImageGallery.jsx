import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const captions = [
    'Docked at Key Bridge Marina with DC skyline view',
    'Premium matching trailer with LED lighting',
    'N3 tower with board racks and premium features',
    'Sleek profile with tan interior and red accents',
    'Custom boat cover for protection'
  ];

  return (
    <div className="image-gallery">
      <div className="main-image-container">
        <div className="main-image">
          <img 
            src={images[activeIndex]} 
            alt={captions[activeIndex]}
            className="fade-in"
          />
        </div>
        <p className="image-caption">{captions[activeIndex]}</p>
      </div>
      <div className="thumbnail-grid">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
