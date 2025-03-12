import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ image, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleWheel = (e) => {
    e.preventDefault();
    const newScale = scale + (e.deltaY > 0 ? -0.1 : 0.1);
    setScale(Math.min(Math.max(0.5, newScale), 3));
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        <motion.img
          src={image}
          alt="Expanded view"
          drag
          dragElastic={0.1}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            scale,
            x: position.x,
            y: position.y,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        />
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="zoom-controls">
          <button onClick={() => setScale(Math.max(0.5, scale - 0.1))}>-</button>
          <span>{Math.round(scale * 100)}%</span>
          <button onClick={() => setScale(Math.min(3, scale + 0.1))}>+</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
