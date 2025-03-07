import React from 'react';
import product from '../../product';

const Image = () => {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderBottom: '2px solid #0d6efd'
      }}
    />
  );
};

export default Image;