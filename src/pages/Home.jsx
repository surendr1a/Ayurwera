// src/pages/Home.js
import React from 'react';
import Carousel from '../sections/Hero';
import AllProducts from '../sections/AllProducts';
import ReviewSection from '../sections/Review';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import Sidebar from '../sections/Sidebar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Carousel />
      <AllProducts />
      <ReviewSection />
      <Footer/>
    </div>
  );
}
