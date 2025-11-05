import React from "react";
import { useNavigate } from "react-router-dom";

const NotableEvents = () => {
  const navigate = useNavigate();
  const events = [
    {
      title: "World Fisheries Day",
      image:
        "assets/fisheries-img.webp",
    },
    {
      title: "Bhoomi Pooja Income Tax Department",
      image:
        "assets/itr-image.webp",
    },
    {
      title: "ISRO Event",
      image:
        "assets/isro-img.webp",
    },
    {
      title: "World Food Day Celebration",
      image:
        "assets/health-img.webp",
    },
    {
      title: "Janapara Utsava",
      image:
        "assets/bheem-image.webp",
    },
    {
      title: "Democracy Day Celebration",
      image:
        "assets/Democracy.webp",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-50 via-white to-gray-50 pb-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2754C7] mb-3 md:mb-4">
            Some Notable Events
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our most memorable and successful events
          </p>
        </div>

        {/* View More Button */}
        <div className="flex justify-end mb-6">
          <button  onClick={() => navigate("/gallery")}
          className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#2754C7] text-white font-semibold rounded-lg hover:bg-[#1e3f9f] transition-all duration-300 hover:shadow-lg">
            View More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <div key={index} className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="w-full h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={event.image}
                  alt={event.title}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-base md:text-lg font-semibold text-gray-800 rounded-lg bg-white/95 backdrop-blur-sm p-4 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                    {event.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotableEvents;
