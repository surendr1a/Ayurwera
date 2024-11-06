// src/components/Filters.jsx
import React, { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ category: e.target.value, price });
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onFilterChange({ category, price: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Living</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <select
          value={price}
          onChange={handlePriceChange}
          className="w-full border p-2 rounded"
        >
          <option value="">All Prices</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="above100">Above $100</option>
        </select>
      </div>
    </div>
  );
}
