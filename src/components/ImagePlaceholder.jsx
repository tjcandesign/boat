import React from 'react';

const ImagePlaceholder = ({ index }) => {
  const backgroundColor = index % 2 === 0 ? '#f0f0f0' : '#e5e5e5';
  
  return (
    <div 
      style={{
        backgroundColor,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '1.2rem'
      }}
    >
      Image {index + 1}
    </div>
  );
};

export default ImagePlaceholder;
