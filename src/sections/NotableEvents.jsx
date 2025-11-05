import React from "react";

const NotableEvents = () => {
  const events = [
    {
      title: "World Fisheries Day",
      image:
        "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    },
    {
      title: "Bhoomi Pooja Income Tax Department",
      image:
        "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    },
    {
      title: "World Environment Day",
      image:
        "https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    },
    {
      title: "Constitutional Day Celebration",
      image:
        "https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    },
    {
      title: "National Unity Conference",
      image:
        "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    },
    {
      title: "Digital India Initiative",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-12 md:py-16 lg:py-20">
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
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2754C7] text-white font-semibold rounded-lg hover:bg-[#1e3f9f] transition-all duration-300 hover:shadow-lg">
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
