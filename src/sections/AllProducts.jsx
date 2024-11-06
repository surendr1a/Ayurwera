// components/AllProducts.js
import React from "react";
import { products } from "../constants";
import {Link} from "react-router-dom";

export default function AllProducts() {
  return (
    <div className="max-w-6xl mx-auto p-6 ml-[17%] ">
      <h2 className="text-4xl font-bold font-montserrat justify-center flex mt-10 mb-8 text-shadow-md hover:text-shadow-xl">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:scale-105 duration-500 hover:shadow-lg hover:bg-blue-100 transition-all transition">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
        
      </div>
      <div className="justify-center flex my-4">
      <Link to="/all-products">
        <button className="mt-4 px-4 py-2  bg-blue-600 text-white rounded-md hover:bg-blue-700">
          See More
        </button>
      </Link>
      </div>
      
    </div>
  );
}
