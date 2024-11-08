import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white p-1 shadow-lg transition duration-300 ease-in-out">
            <nav className="flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/">
                        <img src="/Images/logo.png" width={100} height={100} alt="logo" className="transition-transform duration-300 hover:scale-105 ml-4" />
                    </a>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden mr-4">
                    <button onClick={toggleMenu} className="text-green-600 focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Menu Items */}
                <ul className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:space-x-8 text-lg font-semibold text-green-600 md:mr-8`}>
                    <li className="relative group">
                        <Link to="/" className="text-green-600 hover:text-[#2D6A4F] transition-colors duration-300">Home</Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#2D6A4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/products" className="text-green-600 hover:text-[#2D6A4F] transition-colors duration-300">Products</Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#2D6A4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/login" className="text-green-600 hover:text-[#2D6A4F] transition-colors duration-300">
                            <FaUserCircle className="inline mr-1" /> Login
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#2D6A4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li className="relative group">
                        <Link to="/signup" className="text-green-600 hover:text-[#2D6A4F] transition-colors duration-300">
                            <FaUserCircle className="inline mr-1" /> Signup
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#2D6A4F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
