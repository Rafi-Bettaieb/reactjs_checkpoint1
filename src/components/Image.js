import React from 'react';
import  product  from '../product';

function Image() {
  return <img src={product.imagePath} alt="Product" />;
}

export default Image;