import React, { useRef, useEffect } from "react";
import { topConsultants } from "../constants"; // Import the topConsultants data
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function TopConsultants() {
  
  const sectionRef = useRef(null);
  const consultantRefs = useRef([]);

  useEffect(() => {
    // GSAP Timeline for consultant animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start animation when 80% of the section is in view
        end: "bottom 20%", // End animation when 20% of the section is in view
        toggleActions: "play none none none", // Play animation once
      },
    });

    // Animate each consultant card
    tl.fromTo(
      consultantRefs.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Stagger effect between elements
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-6xl mx-auto p-4 sm:p-6 md:ml-0 lg:ml-[17%]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-center mt-6 md:mt-10 mb-6 md:mb-8 text-shadow-md hover:text-shadow-xl">
        Top Consultants
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {topConsultants.slice(0,10).map((consultant, index) => (
          <div
            key={consultant.id}
            ref={(el) => (consultantRefs.current[index] = el)} // Add ref for animation
            className="border p-4 rounded-lg shadow hover:scale-105 duration-500 bg-white transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={consultant.profilePic}
                alt={consultant.fullName.firstName}
                className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {consultant.fullName.firstName} {consultant.fullName.lastName}
                </h3>
                <p className="text-sm text-gray-500">{consultant.experience} Experience</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Field: {consultant.tags.join(", ")}
            </p>
            <p className="text-sm text-gray-600">
              Price: <span className="font-semibold">₹{consultant.pricePerMinute} / min</span>
            </p>
            <p className="text-sm text-gray-600">
              Total Consulted Minutes: {consultant.totalConsultMinutes} min
            </p>
            <div className="flex justify-start mt-4 space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Chat
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link to="/consultants">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
