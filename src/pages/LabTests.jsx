import React, { useState } from "react";

const LabTests = () => {
  // Sample lab test data
  const labTests = [
    { name: "Complete Blood Count (CBC)", cost: 500, time: "24 hours", service: "Doorstep Collection Available" },
    { name: "Liver Function Test (LFT)", cost: 1200, time: "48 hours", service: "Doorstep Collection Available" },
    { name: "Kidney Function Test (KFT)", cost: 1000, time: "24 hours", service: "Doorstep Collection Available" },
    { name: "Thyroid Profile", cost: 700, time: "24 hours", service: "Doorstep Collection Available" },
    { name: "Diabetes Panel", cost: 800, time: "Same Day", service: "Doorstep Collection Available" },
    { name: "Vitamin D Test", cost: 900, time: "48 hours", service: "Doorstep Collection Available" },
    { name: "Lipid Profile", cost: 1100, time: "24 hours", service: "Doorstep Collection Available" },
    { name: "COVID-19 RT-PCR Test", cost: 1500, time: "Same Day", service: "Doorstep Collection Available" },
    { name: "Allergy Test", cost: 2000, time: "72 hours", service: "Doorstep Collection Available" },
    { name: "Food Intolerance Test", cost: 3000, time: "5 Days", service: "Doorstep Collection Available" },
  ];

  const [search, setSearch] = useState("");

  // Filtered lab tests based on search
  const filteredTests = labTests.filter((test) =>
    test.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Lab Tests</h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for lab tests..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lab Tests List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredTests.map((test, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition border-gray-150 border-2"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {test.name}
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Cost:</strong> ₹{test.cost}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Report Time:</strong> {test.time}
            </p>
            <p className="text-green-600 mb-4">
              <strong>{test.service}</strong>
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabTests;
