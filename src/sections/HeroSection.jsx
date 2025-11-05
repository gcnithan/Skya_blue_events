import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="assets/herosectionvideo.webm" // Replace with your video URL
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay for better contrast */}
      {/* <div className="top-0 left-0 w-full h-full bg-black bg-opacity-40"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        {/* Scroll Down Button */}
        <a
          href="#next-section"
          className="absolute bottom-8 flex flex-col items-center cursor-pointer animate-bounce"
          aria-label="Scroll Down"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
