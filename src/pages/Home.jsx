// src/pages/Home.js
import React from 'react';
import Carousel from '../sections/Hero';
import AllProducts from '../sections/AllProducts';
import ReviewSection from '../sections/Review';

export default function Home() {
  return (
    <div>
      <Carousel />
      <AllProducts />
      <ReviewSection />
    </div>
  );
}
