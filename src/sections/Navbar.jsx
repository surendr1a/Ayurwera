import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        // GSAP animation for navbar elements
        gsap.fromTo(
            ".nav-animation",
            { opacity: 0, y: -50 }, // Starting state
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.2, // Delay between animations
                onComplete: () => console.log("Animation completed!"),
            }
        );

        // Scroll-triggered animations
        ScrollTrigger.create({
            trigger: ".logo",
            start: "top top",
            toggleClass: { targets: ".logo", className: "scrolled" },
            onEnter: () => console.log("Scroll animation started!"),
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
            className={`fixed top-0 left-0 z-50 w-full shadow-lg transition-all duration-500 ${
                isScrolled ? "bg-white py-1" : "bg-white py-3"
            }`}
        >
            <nav className="flex justify-between items-center mx-4">
                {/* Logo */}
                <div className="logo nav-animation flex items-center ml-12">
                    <a href="/">
                        <img
                            src="/Images/logo.jpeg"
                            alt="Logo"
                            className={`transition-transform duration-500 ${
                                isScrolled ? "scale-75" : "scale-100"
                            }`}
                            width="160"
                            height="160"
                        />
                    </a>
                </div>

                {/* Search Bar */}
                <div
                    className={`search-bar nav-animation hidden md:flex flex-grow items-center mx-4 ${
                        isScrolled ? "ml-10" : "ml-20"
                    }`}
                >
                    <div
                        className={`flex items-center ${
                            isScrolled ? "w-1/4" : "w-1/3"
                        } px-4 py-2 border rounded-xl bg-slate-100`}
                    >
                        <FcSearch className="text-gray-500 mr-2 size-5" />
                        <input
                            type="text"
                            placeholder="Try 'Search'"
                            className="flex-grow bg-transparent focus:outline-none text-gray-700"
                        />
                    </div>
                </div>

                {/* Mobile Search Icon */}
                <div className="md:hidden nav-animation mr-4">
                    <button
                        onClick={handleSearchClick}
                        className="text-green-600 focus:outline-none"
                    >
                        <FcSearch size={isScrolled ? 24 : 30} />
                    </button>
                </div>

                {/* Home Section */}
                <div className="nav-link nav-animation text-green-600 ml-4">
                    <Link to="/">
                        <ul
                            className="hover:text-[#2D6A4F] text-xl transition-transform duration-500"
                        >
                            Home
                        </ul>
                    </Link>
                </div>

                {/* Profile Icon */}
                <div className="profile-icon nav-animation text-green-600 ml-4">
                    <Link to="/profile">
                        <img
                            src="/Images/profile.jpg"
                            alt="Profile Icon"
                            className={`rounded-3xl ${
                                isScrolled ? "w-10 h-10" : "w-12 h-12"
                            }`}
                        />
                    </Link>
                </div>
            </nav>

            {/* Search Modal */}
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
