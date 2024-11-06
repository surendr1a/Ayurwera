import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    beforeChange: (current, next) => {
      setActiveSlide(next);
      setProgress(0); // Reset progress to 0 when changing slides
    },
    responsive: [
      {
        breakpoint: 1024, // for tablets and medium screens
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Continue to 100 and stop
    }, 500);

    return () => clearInterval(interval);
  }, [activeSlide]);

  const renderCustomDots = () => {
    return (
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative w-8 h-3">
            <div
              className={`absolute top-0 left-0 h-full w-full rounded-full bg-gray-300 transition-opacity duration-500 ${
                index === activeSlide ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`absolute top-0 left-0 h-full bg-black rounded-full ${
                index === activeSlide ? "animate-progress" : ""
              }`}
              style={{
                width: index === activeSlide ? `${progress}%` : "0%",
                transition: "width 0.15s linear",
              }}
            ></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-28 p-4 relative overflow-hidden">
      <Slider {...settings}>
        <div className="p-4 transform transition-transform duration-500 hover:scale-105">
          <img src="/Images/slides/1.jpeg" alt="Slide 1" className="w-full h-[300px] md:h-[400px] rounded-2xl shadow-lg object-cover" />
        </div>
        <div className="p-4 transform transition-transform duration-500 hover:scale-105">
          <img src="/Images/slides/2.jpeg" alt="Slide 2" className="w-full h-[300px] md:h-[400px] rounded-2xl shadow-lg object-cover" />
        </div>
        <div className="p-4 transform transition-transform duration-500 hover:scale-105">
          <img src="/Images/slides/3.jpeg" alt="Slide 3" className="w-full h-[300px] md:h-[400px] rounded-2xl shadow-lg object-cover" />
        </div>
        <div className="p-4 transform transition-transform duration-500 hover:scale-105">
          <img src="/Images/slides/4.jpeg" alt="Slide 4" className="w-full h-[300px] md:h-[400px] rounded-2xl shadow-lg object-cover" />
        </div>
      </Slider>
      {renderCustomDots()}
    </div>
  );
}
