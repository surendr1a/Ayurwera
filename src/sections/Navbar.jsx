import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { FcSearch } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Scroll event to handle shrinking navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 z-50 w-full shadow-lg transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white py-1' : 'bg-white py-3'}`}>
            <nav className="flex justify-between items-center mx-4 transition-all duration-500 ease-in-out">
                
                {/* Dynamic Logo */}
                <div className="flex items-center transition-all duration-500 ease-in-out">
                    <a href="/">
                        <picture>
                            <source media="(max-width: 640px)" srcSet="" />
                            <source media="(max-width: 1024px)" srcSet="" />
                            <img 
                                src="/Images/logo.jpeg" 
                                alt="logo" 
                                className={`transition-transform duration-500 ease-in-out ${isScrolled ? 'scale-75' : 'scale-100'}`}
                                width="160" height="160"
                            />
                        </picture>
                    </a>
                </div>

                {/* Search Bar for Large Devices */}
                <div className={`hidden md:flex flex-grow items-center mx-4 transition-all duration-500 ease-in-out ${isScrolled ? 'ml-10' : 'ml-20'}`}>
                    <div className={`flex items-center ${isScrolled ? 'w-1/4' : 'w-1/3'} px-4 py-2 border rounded-xl focus-within:ring-2 focus-within:ring-green-600 bg-slate-100 transition-all duration-500 ease-in-out`}>
                        <FcSearch className="text-gray-500 mr-2 size-8" />
                        <input
                            type="text"
                            placeholder="Try 'Search'"
                            className="flex-grow bg-transparent focus:outline-none text-gray-700 transition-all duration-500 ease-in-out"
                        />
                    </div>
                </div>

                {/* Search Icon for Small Devices */}
                <div className="md:hidden mr-4 justify-end flex w-full">
                    <button onClick={handleSearchClick} className="text-green-600 focus:outline-none transition-transform duration-500 ease-in-out flex">
                        <FcSearch size={isScrolled ? 24 : 30} />
                    </button>
                </div>

                {/* Profile Icon */}
                <div className="text-green-600 ml-4">
                    <Link to="/profile">
                        <FaUserCircle size={isScrolled ? 40 : 48} className="hover:text-[#2D6A4F] transition-transform duration-1000 ease-in-out mr-10" />
                    </Link>
                </div>
            </nav>

            {isSearchOpen && (
                <div className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-2 flex items-center border-b border-gray-200">
                    <FcSearch className="text-gray-500 mr-2" size={24} />
                    <input
                        type="text"
                        placeholder="Try 'Search'"
                        className="w-full px-4 py-2 focus:outline-none text-gray-700"
                    />
                    <button onClick={handleSearchClick} className="ml-2 text-gray-500">
                        <IoClose size={24} />
                    </button>
                </div>
            )}
        </header>
    );
}
