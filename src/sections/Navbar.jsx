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
                isScrolled ? "bg-white py-3" : "bg-white py-3"
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
                                isScrolled ? "scale-90" : "scale-100"
                            }`}
                            width="160"
                            height="160"
                        />
                    </a>
                </div>

            
                

                

                {/* Home Section */}
                <div className="nav-link nav-animation text-blue-800 ml-4 flex space-x-4 justify-center">
                    <Link to="/">
                        <ul
                            className="hover:text-[#5267ff] text-xl transition-transform duration-500"
                        >
                            Find Doctors
                        </ul>
                    </Link>
                    <Link to="/">
                        <ul
                            className="hover:text-[#5267ff] text-xl transition-transform duration-500"
                        >
                            Video Consult
                        </ul>
                    </Link><Link to="/">
                        <ul
                            className="hover:text-[#5267ff] text-xl transition-transform duration-500"
                        >
                           Medicines
                        </ul>
                    </Link><Link to="/">
                        <ul
                            className="hover:text-[#5267ff] text-xl transition-transform duration-500"
                        >
                            Lab Tests
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
