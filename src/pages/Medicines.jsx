import React, { useState } from "react";

const Medicines = () => {
  // Sample medicines data
  const medicinesData = [
    { id: 1, name: "Paracetamol 500mg", price: 50, category: "Tablets", manufacturer: "XYZ Pharma", discount: "10% Off", uses: "Fever, Pain relief" },
    { id: 2, name: "Cough Syrup", price: 120, category: "Syrups", manufacturer: "ABC Pharma", discount: "15% Off", uses: "Cough, Throat irritation" },
    { id: 3, name: "Antiseptic Cream", price: 80, category: "Ointments", manufacturer: "DEF Pharma", discount: "5% Off", uses: "Cuts, Wounds" },
    { id: 4, name: "Vitamin C Tablets", price: 200, category: "Tablets", manufacturer: "XYZ Pharma", discount: "20% Off", uses: "Immunity Boost" },
    { id: 5, name: "Eye Drops", price: 150, category: "Drops", manufacturer: "GHI Pharma", discount: "10% Off", uses: "Eye irritation" },
    { id: 6, name: "Pain Relief Gel", price: 180, category: "Ointments", manufacturer: "JKL Pharma", discount: "8% Off", uses: "Muscle pain" },
    { id: 7, name: "Allergy Tablets", price: 90, category: "Tablets", manufacturer: "XYZ Pharma", discount: "12% Off", uses: "Allergies, Sneezing" },
    { id: 8, name: "Antacid Syrup", price: 140, category: "Syrups", manufacturer: "ABC Pharma", discount: "18% Off", uses: "Acidity, Heartburn" },
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered medicines based on search and category
  const filteredMedicines = medicinesData.filter((medicine) => {
    const matchesSearch = medicine.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">
        Medicines
      </h2>

      {/* Search Bar and Filters */}
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search for medicines..."
          className="w-full md:w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Tablets">Tablets</option>
          <option value="Syrups">Syrups</option>
          <option value="Ointments">Ointments</option>
          <option value="Drops">Drops</option>
        </select>
      </div>

      {/* Medicines List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedicines.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {medicine.name}
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> ₹{medicine.price}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Uses:</strong> {medicine.uses}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Manufacturer:</strong> {medicine.manufacturer}
            </p>
            <p className="text-green-600 mb-4">
              <strong>{medicine.discount}</strong>
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicines;
