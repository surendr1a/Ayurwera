import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 h-[500px] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl mb-8">
            Find and book appointments with doctors, get online consultations, and order medicines
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-white rounded-lg shadow-md">
                <div className="flex items-center p-4">
                  <FaSearch className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search doctors, clinics, hospitals..."
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
