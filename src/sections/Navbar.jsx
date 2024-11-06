// Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Link ko import kiya
import { FaUserCircle } from 'react-icons/fa'; // User icon for better UI

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-indigo-600 to-pink-600 p-1  shadow-lg transition duration-300 ease-in-out">
            <nav className="flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/">
                        <img src="/Images/logo.png" width={100} height={100} alt="logo" className="transition-transform duration-300 hover:scale-105 ml-4" />
                    </a>
                </div>
                <ul className="flex space-x-8 text-lg font-semibold text-white mr-8">
                    <li className="relative group">
                        <Link to="/" className="hover:text-gray-200 transition-colors duration-300">Home</Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li><span className="text-white">•</span></li>
                    <li className="relative group">
                        <Link to="/blog" className="hover:text-gray-200 transition-colors duration-300">Blog</Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li><span className="text-white">•</span></li>
                    {/* <li className="relative group">
                        <Link to="/products" className="hover:text-gray-200 transition-colors duration-300">Products</Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li><span className="text-white">•</span></li>
                    <li className="relative group">
                        <Link to="/myorder" className="hover:text-gray-200 transition-colors duration-300">My Order</Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li><span className="text-white">•</span></li>
                    <li className="relative group">
                        <Link to="/cart" className="hover:text-gray-200 transition-colors duration-300">Cart</Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li> */}
                    {/* <li><span className="text-white">•</span></li> */}
                    <li className="relative group">
                        <Link to="/login" className="hover:text-gray-200 transition-colors duration-300">
                            <FaUserCircle className="inline mr-1" /> Login
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                    <li><span className="text-white">•</span></li>
                    <li className="relative group">
                        <Link to="/signup" className="hover:text-gray-200 transition-colors duration-300">
                        <FaUserCircle className="inline mr-1" />
                        Signup
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
