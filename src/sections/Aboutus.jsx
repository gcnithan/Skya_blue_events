import React from "react";

const Aboutus = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left side - Image with card */}
      <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
        <img
          src="assets/Dhruva.jpg" // Replace with your image URL or import
          alt="Dhruva Kumar H P"
          className="w-fit h-fit object-contain"
        />
        <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 rounded-md p-4 shadow-md max-w-xs">
          <h2 className="text-xl font-semibold text-gray-800">Dhruva Kumar H P</h2>
          <p className="text-gray-600 mt-1">Managing Director</p>
        </div>
      </div>

      {/* Right side - About Us text */}
      <div>
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#2754C7" }}>
          About Us
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          SkyBlue Events was founded over 12 years ago in Bengaluru, India, with the vision of creating memorable and unique experiences for a diverse range of clients.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          From humble beginnings, the company quickly established itself as a leading event management firm, specializing in government, corporate, entertainment, and social events.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Over the years, SkyBlue Events has successfully executed 147 events, developed multiple innovative ideas, and engaged with numerous VIPs and high-profile clients. The company's growth is a testament to its commitment to excellence, attention to detail, and ability to transform visions into reality.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
