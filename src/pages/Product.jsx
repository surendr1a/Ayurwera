// ProductList.js
import React from 'react';
import { productlist } from '../constants/index'; // Import your product list here
import ProductCard from '../sections/ConsultantsCardforPage';
import Sidebar from '../sections/Sidebar';

const ProductList = () => {
  return (
   <div>

   <Sidebar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 ml-20 mt-40 gap-6 p-4">
      {productlist.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
