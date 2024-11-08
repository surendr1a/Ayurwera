// src/components/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../constants/index';

function Product() {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-900 font-semibold">Price: ${product.price}</p>
          <p className="text-gray-900 font-semibold">Rating: {product.rating} / 5</p>
          <p className="text-gray-900 font-semibold">Category: {product.category}</p>
          <p className="text-gray-900 font-semibold">Brand: {product.brand}</p>

          <h3 className="text-lg font-bold mt-4">Specifications:</h3>
          <ul className="list-disc list-inside">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key} className="text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold mt-4">Customer Reviews:</h3>
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{review.user}</p>
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-yellow-500">Rating: {review.rating} / 5</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
