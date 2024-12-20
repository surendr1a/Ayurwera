import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // GSAP animation for navbar elements
    gsap.fromTo(
      ".nav-animation",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: ".logo",
      start: "top top",
      toggleClass: { targets: ".logo", className: "scrolled" },
    });
  }, []);

  useEffect(() => {
    // Handle scroll to shrink navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full shadow-md transition-all duration-500 ${
        isScrolled ? "bg-blue-600 py-3 text-white shadow-white shadow-sm " : "bg-white py-4 text-blue-800"
      }`}
    >
      <nav className="flex justify-between items-center px-6 lg:px-16">
        {/* Logo */}
        <div className="logo nav-animation flex items-center">
          <a href="/">
            <img
              src="/Images/logo.jpeg"
              alt="Logo"
              className={`transition-transform duration-500 ${
                isScrolled ? "scale-90 bg-white rounded-xl p-2" : "scale-100"
              }`}
              width="120"
              height="120"
            />
          </a>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-2xl text-blue-800 hover:text-white transition-colors duration-300"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links nav-animation lg:flex space-x-8 text-lg font-medium ${
            isMenuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-blue-50 px-6 py-4 shadow-md"
              : "hidden"
          } lg:static lg:bg-transparent lg:shadow-none lg:flex-row lg:space-y-0 lg:w-auto lg:py-0`}
        >
          <Link to="/doctors" className="hover:text-blue-400 transition-colors duration-300">
            Find Doctors
          </Link>
          <Link to="/chat-consults" className="hover:text-blue-400 transition-colors duration-300">
            Chat Consult
          </Link>
          <Link to="/medicines" className="hover:text-blue-400 transition-colors duration-300">
            Medicines
          </Link>
          <Link to="/lab-tests" className="hover:text-blue-400 transition-colors duration-300">
            Lab Tests
          </Link>
          <Link to="/manage-doctors" className="hover:text-blue-400 transition-colors duration-300">
            Manage Doctors
          </Link>
        </div>

        {/* Profile and Search Icons */}
        <div className="nav-icons nav-animation hidden lg:flex items-center space-x-6">
          <FaSearch
            className="text-xl cursor-pointer hover:text-blue-400 transition-colors duration-300"
            onClick={handleSearchClick}
          />
          <Link to="/login" className="flex items-center space-x-2">
            <FaUserCircle className="text-2xl" />
            <span className="text-lg font-medium hover:text-blue-400 transition-colors duration-300">
              Login/Signup
            </span>
          </Link>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full bg-white z-50 px-6 py-3 flex items-center border-b border-blue-200 shadow-md">
          <FcSearch className="text-blue-500 mr-2" size={24} />
          <input
            type="text"
            placeholder="Search for doctors, medicines, etc."
            className="w-full px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={handleSearchClick} className="ml-4 text-blue-500">
            <IoClose size={24} />
          </button>
        </div>
      )}
    </header>
  );
}
