// src/screens/Product.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../constants";
import Filters from "../components/Filters"; // Import Filters component

export default function Product() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    if (filters.price) {
      if (filters.price === "under50") {
        filtered = filtered.filter((product) => product.price < 50);
      } else if (filters.price === "50to100") {
        filtered = filtered.filter((product) => product.price >= 50 && product.price <= 100);
      } else if (filters.price === "above100") {
        filtered = filtered.filter((product) => product.price > 100);
      }
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mt-10 mb-8">All Products</h2>

      {/* Filters */}
      <div className="flex mb-6">
        <div className="w-1/4">
          <Filters onFilterChange={handleFilterChange} />
        </div>
        
        {/* Product Grid */}
        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow hover:scale-105 duration-500 hover:shadow-lg hover:bg-blue-100 transition-all"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="justify-center flex my-4">
        <Link to="/all-products">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
