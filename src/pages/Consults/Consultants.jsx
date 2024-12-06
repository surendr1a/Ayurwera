import React, { useState } from "react";
import { topConsultants } from "../../constants/index"; // Import your consultants data
import ConsultsCard from "./ConsultsCard"; // The updated ProductCard component
import Sidebar from "../../sections/Sidebar";

const ConsultsList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Track sidebar state

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar onSidebarToggle={setIsSidebarOpen} />

      {/* Cards Container */}
      <div
  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-40 p-4 transition-all duration-300 ${
    isSidebarOpen ? "lg:grid-cols-4  ml-64" : "lg:grid-cols-5 ml-20"
  }`}
>
        {topConsultants.map((consultant) => (
          <ConsultsCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  );
};

export default ConsultsList;
