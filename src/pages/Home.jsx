// src/pages/Home.js
import React from 'react';
import Carousel from '../sections/Hero';
import ReviewSection from '../sections/Review';
import Navbar from '../sections/Navbar';
import Features from '../sections/Services';
import TopDoctors from '../sections/TopDoctors';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel />
      <Features/>
      <TopDoctors/>
      <ReviewSection />
    
    </div>
  );
}
