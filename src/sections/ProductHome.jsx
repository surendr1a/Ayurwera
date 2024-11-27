import React, { useRef, useEffect } from "react";
import { products } from "../constants";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AllProducts() {
  const sectionRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    // GSAP Timeline for product animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start animation when 80% of the section is in view
        end: "bottom 20%", // End animation when 20% of the section is in view
        toggleActions: "play none none none", // Play animation once
      },
    });

    // Animate each product card
    tl.fromTo(
      productRefs.current,
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
    <div ref={sectionRef} className="max-w-6xl mx-auto p-4 sm:p-6 md:ml-0 lg:ml-[17%]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-center mt-6 md:mt-10 mb-6 md:mb-8 text-shadow-md hover:text-shadow-xl">
        All Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (productRefs.current[index] = el)} // Add ref for animation
            className="border p-4 rounded-lg shadow hover:scale-105 duration-500 hover:shadow-lg hover:bg-green-50 hover:shadow-2xl transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-60 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">
              {product.description.slice(0, 60)}...
            </p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link to="/products">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
