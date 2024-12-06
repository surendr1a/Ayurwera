import React from "react";
import { useLocation } from "react-router-dom";

const ProfileSection = () => {
  const location = useLocation();
  const consultant = location.state?.id; // Retrieve consultant data from state

  if (!consultant) {
    return (
      <div className="mt-10 p-6 text-center text-red-500">
        <h2 className="text-2xl font-bold">Consultant Data Not Found</h2>
        <p>Please go back and select a consultant again.</p>
      </div>
    );
  }

  return (
    <div className="mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {consultant.fullName.firstName} {consultant.fullName.lastName}
      </h3>
      <div className="flex gap-6 mb-6">
        <img
          src={consultant.profilePic}
          alt={consultant.fullName.firstName}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <div>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Experience:</strong> {consultant.experience}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Field:</strong> {consultant.tags.join(", ")}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Price:</strong> ₹{consultant.pricePerMinute} / min
          </p>
          <p className="text-sm text-gray-600">
            <strong>Total Consulted Minutes:</strong> {consultant.totalConsultMinutes} min
          </p>
        </div>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-4">
          Chat
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Call
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
