import React from "react";
import { topConsultants } from "../../constants/index"; // Import your consultants data
import ConsultsCard from "./ConsultsCard"; // The updated ConsultantsCard component
import Sidebar from "../../sections/Sidebar";

const ConsultsList = () => {
  return (
    <div>
      <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 ml-20 mt-40 gap-6 p-4">
        {/* Use topConsultants data and pass it to ProductCard */}
        {topConsultants.map((consultant) => (
          <ConsultsCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  );
};

export default ConsultsList;
