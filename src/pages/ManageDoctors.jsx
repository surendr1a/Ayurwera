import React, { useState } from "react";
import AddNewDoctor from "./AddNewDoctor";

const ManageDoctors = () => {
  const [showAddDoctor, setShowAddDoctor] = useState(false);

  const doctors = [
    { name: "Pranayraj Chouhan", email: "pranaychouhan332@example.com", specialization: "Civil Engineering", experience: 6, verified: "Awaiting" },
    { name: "Pooja Bhatia", email: "pooja.bhatia@example.com", specialization: "Women's Health", experience: 14, verified: "Successful" },
    { name: "Vikram Mehta", email: "vikram.mehta@example.com", specialization: "Weight Management", experience: 9, verified: "Successful" },
    { name: "Shubham Chaurasiya", email: "shubhamtesting123@example.com", specialization: "Computer Science", experience: 3, verified: "Awaiting" },
    { name: "Sneha Deshmukh", email: "sneha.deshmukh@example.com", specialization: "Respiratory Issues", experience: 7, verified: "Successful" },
    { name: "Aadarsh Chauhan", email: "tesingaadarsh@example.com", specialization: "Human Body", experience: 1, verified: "Awaiting" },
    { name: "Arjun Gupta", email: "arjun.gupta@example.com", specialization: "Detoxification", experience: 15, verified: "Successful" },
    { name: "Ritika Patel", email: "ritika.patel@example.com", specialization: "Joint Pain Relief", experience: 6, verified: "Successful" },
  ];

  return (
    <div className="p-6 bg-blue-50 min-h-screen mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Manage Doctors</h2>
        <button
          onClick={() => setShowAddDoctor(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add New Doctor
        </button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-100 text-blue-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Specialization</th>
              <th className="py-3 px-6 text-center">Experience</th>
              <th className="py-3 px-6 text-center">Verified</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {doctors.map((doctor, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-blue-50  ${
                  index % 2 === 0 ? "bg-white" : "bg-blue-50"
                }`}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">{doctor.name}</td>
                <td className="py-3 px-6 text-left">{doctor.email}</td>
                <td className="py-3 px-6 text-left">{doctor.specialization}</td>
                <td className="py-3 px-6 text-center">{doctor.experience} years</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      doctor.verified === "Successful"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {doctor.verified}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddDoctor && <AddNewDoctor onClose={() => setShowAddDoctor(false)} />}
    </div>
  );
};

export default ManageDoctors;
