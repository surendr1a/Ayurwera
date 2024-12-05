// src/pages/Home.js
import React from 'react';
import Carousel from '../sections/Hero';
import AllProducts from '../sections/ProductHome';
import ReviewSection from '../sections/Review';
import Navbar from '../sections/Navbar';
import Sidebar from '../sections/Sidebar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Carousel />
      <AllProducts />
      <ReviewSection />
    
    </div>
  );
}
