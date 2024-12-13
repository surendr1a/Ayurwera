import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Ayurvera</h2>
          <p className="text-sm mb-6">
            Your trusted destination for Ayurvedic solutions. Explore natural remedies, products, and expert guidance for holistic wellness.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* For Doctors */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">For Doctors</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Doctor Portal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Ayurvedic Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Join Our Network
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Partner With Us
              </a>
            </li>
          </ul>
        </div>

        {/* For Patients */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">For Patients</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Book a Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Health Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Ayurvedic Diet Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact a Specialist
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter and Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest Ayurvedic tips and offers.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-r-lg hover:bg-blue-500 transition">
              Subscribe
            </button>
          </form>
          <h3 className="text-xl font-semibold text-white mt-6">Contact Us</h3>
          <p className="flex items-center mt-2 text-sm">
            <FaMapMarkerAlt className="mr-2" />
            123 Ayur Street, Wellness City, India
          </p>
          <p className="flex items-center mt-2 text-sm">
            <FaPhoneAlt className="mr-2" />
            +91 9876543210
          </p>
          <p className="flex items-center mt-2 text-sm">
            <FaEnvelope className="mr-2" />
            support@ayurvera.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Ayurvera. All rights reserved.</p>
        <p>
          Built with <span className="text-red-500">&hearts;</span> by our
          trusted team.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
