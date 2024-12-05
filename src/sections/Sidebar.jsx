// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import {
   FcHome,
   FcShop,
   FcContacts,
   FcDataEncryption

 } from "react-icons/fc"
import {
  
  FaBars, // Hamburger icon for toggle
} from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Controls sidebar toggle
  const [isMobile, setIsMobile] = useState(false); // To check if screen is mobile

  // Check screen size for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };
    
    handleResize(); // Check screen size initially
    window.addEventListener('resize', handleResize); // Update on resize
    
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  // Function to toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Function to toggle specific section
  const toggleSection = (section) => {
    setExpandSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Sidebar Toggle Button (Fixed on screen for visibility) */}
      <button
  className="fixed top-36 left-3 z-50 text-2xl text-gray-400 focus:outline-none md:top-6 md:left-6 lg:top-7 lg:left-6"
  onClick={toggleSidebar}
>
  <FaBars /> {/* Hamburger icon for toggle */}
</button>

      <div
        className={`bg-white border-2 border-gray-200 text-black h-screen p-5 pt-16 z-40 ${isOpen ? 'w-64' : 'w-20'} fixed md:top-12 top-32 transition-all duration-300 ${isMobile && !isOpen ? 'hidden' : 'block'}`}
      >
       
        {/* Menu Links */}
        <ul className="space-y-4">
          {/* Home Link */}
          <li>
            <Link to="/" className="flex items-center text-black hover:text-gray-700">
            <FcHome className="text-lg" />
              {isOpen && <span className="ml-3">Home</span>}
            </Link>
          </li>

          {/* Products Section with Submenu */}
          <li>
            <Link to="/consultants" className="flex items-center text-black hover:text-gray-700">
            <FcShop className="text-lg" />
              {isOpen && <span className="ml-3">Consultation</span>}
            </Link>
          </li>

          {/* Order History Section with Submenu */}
          <li>
            <Link to="/orders" className="flex items-center text-black hover:text-gray-700">
            <FcContacts className="text-lg" />
              {isOpen && <span className="ml-3">Order History</span>}
            </Link>
          </li>

          {/* Cart Additional Links */}
          <li>
            <Link to="/cart" className="flex items-center text-black hover:text-gray-700">
            <PiShoppingCartSimpleDuotone className="text-lg text-green-600" />
              {isOpen && <span className="ml-3">Cart</span>}
            </Link>
          </li>
          
          {/* Login Section */}
          <li>
            <Link to="/login" className="flex items-center text-black hover:text-gray-700">
            <FcDataEncryption className="text-lg" />
              {isOpen && <span className="ml-3">Login</span>}
            </Link>
          </li>
          
          <li>
           
          </li>
        </ul>
      </div>
    </>
  );
}
