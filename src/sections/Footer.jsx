import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Ayurvera</h2>
          <p className="text-gray-400">
            Ayurvera is dedicated to providing the best products and services to enhance your daily life. We believe in quality, innovation, and customer satisfaction.
          </p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>123 , Indore, India</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+1 234 567 890</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope />
              <span>support@ayurvera.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ayurvera. All rights reserved.</p>
      </div>
    </footer>
  );
}
