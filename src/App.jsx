import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Carousel from './sections/Hero';
import AllProducts from './sections/AllProducts'; // Assuming this is where AllProducts is located
import ReviewSection from './sections/Review';
import Footer from './sections/Footer';
import Sidebar from './sections/Sidebar';
import ProductList from './sections/ProductList';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/reviews" element={<ReviewSection />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
