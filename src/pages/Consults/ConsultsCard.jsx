import React from "react";

const ConsultsCard = ({ consultant }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:scale-105 duration-500 bg-white transition-all">
      <div className="flex items-center gap-4 mb-4">
        {/* Consultant Profile Picture */}
        <img
          src={consultant.profilePic}
          alt={`${consultant.fullName.firstName} ${consultant.fullName.lastName}`}
          className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
        />
        <div>
          {/* Consultant Name */}
          <h3 className="text-lg font-bold text-gray-800">
            {consultant.fullName.firstName} {consultant.fullName.lastName}
          </h3>

          {/* Consultant Experience */}
          <p className="text-sm text-gray-500">
            {consultant.experience} Experience
          </p>
        </div>
      </div>

      {/* Consultant Tags */}
      <p className="text-sm text-gray-600">
        Field: {consultant.tags.join(", ")}
      </p>

      {/* Price per minute */}
      <p className="text-sm text-gray-600">
        Price: <span className="font-semibold">₹{consultant.pricePerMinute} / min</span>
      </p>

      {/* Total consulted minutes */}
      <p className="text-sm text-gray-600">
        Total Consulted Minutes: {consultant.totalConsultMinutes} min
      </p>

      {/* Buttons */}
      <div className="flex justify-start mt-4 space-x-4">
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
