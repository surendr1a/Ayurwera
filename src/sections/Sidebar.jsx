// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaBox,
  FaShoppingCart,
  FaHeart,
  FaCog,
  FaSignOutAlt,
  FaAngleDown,
  FaAngleRight,
  FaSearch,
  FaBars, // Hamburger icon for toggle
} from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Controls sidebar toggle
  const [expandSections, setExpandSections] = useState({ products: false, account: false }); // Control dropdowns
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
        className={`bg-white text-black h-screen p-5 pt-16 z-40 ${isOpen ? 'w-64' : 'w-20'} fixed md:top-12 top-32 transition-all duration-300 ${isMobile && !isOpen ? 'hidden' : 'block'}`}
      >
        {/* User Profile */}
        <div className="flex items-center mb-6 ">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          {isOpen && (
            <div className="ml-3">
              <h2 className="text-sm font-semibold">John Doe</h2>
              <p className="text-xs text-gray-400">surendra@gmail.com</p>
            </div>
          )}
        </div>

        {/* Search Bar */}
        {isOpen && (
          <div className="mb-6 relative">
            <FaSearch className="absolute left-3 top-4 text-black" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white border-black border-2 w-full py-2 pl-10 pr-4 rounded focus:outline-none"
            />
          </div>
        )}

        {/* Menu Links */}
        <ul className="space-y-4">
          {/* Home Link */}
          <li>
            <Link to="/" className="flex items-center text-black hover:text-gray-700">
              <FaHome className="text-lg" />
              {isOpen && <span className="ml-3">Home</span>}
            </Link>
          </li>

          {/* Products Section with Submenu */}
          <li>
            <Link to="/products" className="flex items-center text-black hover:text-gray-700">
              <FaShoppingCart className="text-lg" />
              {isOpen && <span className="ml-3">Products</span>}
            </Link>
          </li>

          {/* Account Section with Submenu */}
          <li>
            <div
              onClick={() => toggleSection('account')}
              className="flex items-center justify-between text-black cursor-pointer hover:text-gray-700"
            >
              <div className="flex items-center">
                <FaUser className="text-lg" />
                {isOpen && <span className="ml-3">Account</span>}
              </div>
              {isOpen && (expandSections.account ? <FaAngleDown /> : <FaAngleRight />)}
            </div>
            {expandSections.account && (
              <ul className={`ml-6 mt-2 space-y-2 ${isOpen ? '' : 'hidden'}`}>
                <li><Link to="/account/profile" className="text-sm hover:text-gray-700">Profile</Link></li>
                <li><Link to="/account/orders" className="text-sm hover:text-gray-700">Order History</Link></li>
                <li><Link to="/account/wishlist" className="text-sm hover:text-gray-700">Wishlist</Link></li>
              </ul>
            )}
          </li>

          {/* Additional Links */}
          <li>
            <Link to="/cart" className="flex items-center text-black hover:text-gray-700">
              <FaShoppingCart className="text-lg" />
              {isOpen && <span className="ml-3">Cart</span>}
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="flex items-center text-black hover:text-gray-700">
              <FaHeart className="text-lg" />
              {isOpen && <span className="ml-3">Favorites</span>}
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center text-black hover:text-gray-700">
              <FaCog className="text-lg" />
              {isOpen && <span className="ml-3">Settings</span>}
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex items-center text-black hover:text-gray-700">
              <FaSignOutAlt className="text-lg" />
              {isOpen && <span className="ml-3">Logout</span>}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
