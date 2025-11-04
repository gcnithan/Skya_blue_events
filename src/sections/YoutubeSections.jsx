import React from "react";

const YoutubeSections = () => {
  const videos = [
    {
      id: 1,
      title: "World Fisheries Day",
      videoId: "gyLUwAc7C7I?si=K7pTmMirYHTkxwKr", // Replace with your actual YouTube video ID
      description: "A spectacular corporate gala event",
    },
    {
      id: 2,
      title: "International Day Of Democracy",
      videoId: "12HYChvEgT8?si=nr-PuNHQSwN2vWUs", // Replace with your actual YouTube video ID
      description: "An unforgettable wedding celebration",
    },
    {
      id: 3,
      title: "Celebration of Vishwakarma Amarashilpi Jakanachari Memorial Day",
      videoId: "Gude9vAmD3k?si=lxb5d7csSzvBFgsd", // Replace with your actual YouTube video ID
      description: "A high-profile product launch",
    },
  ];

  return (
    <section className="w-full bg-linear-to-br from-gray-50 via-white to-gray-50 pb-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Some of Our Finest Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our exceptional events come to life
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Video Embed */}
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              {/* <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {video.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://www.youtube.com/channel/UCmWlXd1jf5iGPmZPa1IVEBg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSections;
