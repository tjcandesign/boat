import React from 'react';

const SpecList = ({ specs }) => {
  return (
    <div className="spec-list">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key} className="spec-item">
          <span className="spec-label">{key}</span>
          <span className="spec-value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default SpecList;
