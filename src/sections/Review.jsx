import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { reviews } from "../constants";

export default function Review() {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let scrollInterval;

    if (!isPaused) {
      scrollInterval = setInterval(() => {
        setTranslateX((prev) => {
          const containerWidth = containerRef.current.scrollWidth / 2; // Half, as we doubled the reviews
          if (Math.abs(prev) >= containerWidth) {
            return 0; // Reset translateX when it reaches half the content width
          }
          return prev - 1; // Scroll speed
        });
      }, 20); // Adjust interval for speed
    }

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative overflow-hidden w-full bg-blue-50 py-8">
      <h1 className="text-center text-3xl font-semibold mb-6 text-blue-800">
        Kind words from <span className="text-blue-600">our buyers.</span>
      </h1>
      <div
        className="flex space-x-6"
        ref={containerRef}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isPaused ? "none" : "transform 0.05s linear",
        }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[500px] lg:min-w-[600px] p-6 rounded-lg shadow-lg bg-white text-blue-800"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center mb-4">
              <img
                src={review.photo}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-black">{review.name}</h4>
                <div className="flex">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                </div>
                <p className="text-xs text-black mt-1">{review.date}</p>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              {review.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
