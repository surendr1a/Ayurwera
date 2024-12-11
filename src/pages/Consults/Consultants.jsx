import React from "react";
import { topConsultants } from "../../constants/index"; // Import your consultants data
import ConsultsCard from "./ConsultsCard"; // The updated ProductCard component

const ConsultsList = () => {
  return (
    <div>
      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-40 p-4">
        {topConsultants.map((consultant) => (
          <ConsultsCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  );
};

export default ConsultsList;
