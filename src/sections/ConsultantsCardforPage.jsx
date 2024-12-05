// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-xl font-bold text-blue-600 mb-1">${product.price}</p>
      <p className="text-sm text-yellow-500 mb-3">Rating: {product.rating} ⭐</p>
      <p className="text-gray-600 text-sm">{product.description}</p>
    </div>
  );
};

export default ProductCard;
