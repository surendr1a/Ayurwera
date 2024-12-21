import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Home from './pages/Home';
import ProfileSection from './pages/Profile';
import TopDoctors from './pages/Doctors_page';

function App() {
  return (
    <Router>
      <div>
       <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />

        
         <Route path="/doctors" element={<TopDoctors/>} />
        
          <Route path="/profile" element={<ProfileSection/>}/>
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
