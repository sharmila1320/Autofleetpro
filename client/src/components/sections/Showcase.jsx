import React, { useState } from "react";
import { cars } from "../constants";
import Button from "./Button";

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-screen bg-primary-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 leading-tight">
          Find Your Dream Car with <span className="text-primary-light">AutoFleet</span>
        </h1>

        {/* Car Showcase */}
        <div className="relative w-full flex justify-center items-center mb-6">
          <img
            src={cars[activeIndex].image}
            alt={cars[activeIndex].name}
            className="w-4/5 sm:w-[600px] max-h-[300px] sm:max-h-[400px] object-contain transition-all duration-500"
          />

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-8 text-3xl sm:text-4xl text-primary-light hover:text-white transition duration-200"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-8 text-3xl sm:text-4xl text-primary-light hover:text-white transition duration-200"
          >
            &#8594;
          </button>
        </div>

        {/* Car Details */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left gap-2 sm:gap-4">
          {/* Car Name */}
          <h2 className="text-xl sm:text-2xl font-semibold">
            {cars[activeIndex].name}
          </h2>

          {/* Car Price */}
          <div className="text-xl sm:text-2xl md:text-4xl font-bold text-primary-light text-right break-words max-w-[5.5rem] sm:max-w-none leading-tight">
            {cars[activeIndex].price}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center">
          <Button label="Book Now" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
