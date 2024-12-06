import React from "react";

const ConsultsCard = ({ consultant }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Consultant Profile Picture */}
      <img
        src={consultant.profilePic}
        alt={`${consultant.fullName.firstName} ${consultant.fullName.lastName}`}
        className="w-16 h-16 object-cover rounded-full border-2 border-gray-300 mb-4 mx-auto"
      />

      {/* Consultant Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {consultant.fullName.firstName} {consultant.fullName.lastName}
      </h3>

      {/* Consultant Experience */}
      <p className="text-sm text-gray-500 text-center mb-2">
        {consultant.experience} Experience
      </p>

      {/* Consultant Tags */}
      <p className="text-sm text-gray-600 mb-2 text-center">
        Field: {consultant.tags.join(", ")}
      </p>

      {/* Price per minute */}
      <p className="text-sm text-blue-600 mb-1 text-center">
        Price: ₹{consultant.pricePerMinute} / min
      </p>

      {/* Total consulted minutes */}
      <p className="text-sm text-gray-600 text-center mb-4">
        Total Consulted Minutes: {consultant.totalConsultMinutes} min
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Chat
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Call
        </button>
      </div>
    </div>
  );
};

export default ConsultsCard;
