import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import ProductList from './pages/Product';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
       <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/consultants" element={<ProductList />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
