import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBars, FaTimes, FaStar } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { reviews } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);

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

    useEffect(() => {
        let scrollInterval;

        if (!isPaused) {
            scrollInterval = setInterval(() => {
                setTranslateX((prev) => {
                    const containerWidth = containerRef.current.scrollWidth / 2; // Half, as we doubled the reviews
                    if (Math.abs(prev) >= containerWidth) {
                        return 0; // Reset translateX when it reaches half the content width
                    }
                    return prev - 1; // Scroll speed
                });
            }, 20); // Adjust interval for speed
        }

        return () => clearInterval(scrollInterval);
    }, [isPaused]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <>
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
                            isMenuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-blue-50 px-6 py-4 shadow-md" : "hidden"
                        } lg:static lg:bg-transparent lg:shadow-none lg:flex-row lg:space-y-0 lg:w-auto lg:py-0`}
                    >
                        <Link
                            to="/"
                            className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Find Doctors
                        </Link>
                        <Link
                            to="/video-consult"
                            className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Video Consult
                        </Link>
                        <Link
                            to="/medicines"
                            className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Medicines
                        </Link>
                        <Link
                            to="/lab-tests"
                            className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Lab Tests
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

            {/* Review Section */}
            <div className="relative overflow-hidden w-full bg-blue-50 py-8">
                <h1 className="text-center text-3xl font-semibold mb-6 text-blue-800">
                    Kind words from <span className="text-blue-600">our buyers.</span>
                </h1>
                <div
                    className="flex space-x-6"
                    ref={containerRef}
                    style={{
                        transform: `translateX(${translateX}px)`,
                        transition: isPaused ? "none" : "transform 0.05s linear",
                    }}
                >
                    {/* Doubling reviews list for seamless scroll */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[500px] lg:min-w-[600px] p-6 rounded-lg shadow-lg bg-white text-blue-800"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={review.photo}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="text-xl font-bold text-black">{review.name}</h4>
                                    <div className="flex">
                                        {Array(review.rating)
                                            .fill()
                                            .map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400" />
                                            ))}
                                    </div>
                                    <p className="text-xs text-black mt-1">{review.date}</p>
                                </div>
                            </div>
                            <p className="text-sm font-medium leading-relaxed">
                                {review.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}