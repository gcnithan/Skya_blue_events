import React from "react";

const NotableEvents = () => {
  const events = [
    {
      title: "World Fisheries Day",
      image:
        "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      colSpan: "sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3",
      selfEnd: true,
    },
    {
      title: "Bhoomi Pooja Income Tax Department",
      image:
        "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      colSpan: "sm:col-span-5 md:col-span-4 lg:col-span-3",
      selfEnd: true,
    },
    {
      title: "World Environment Day",
      image:
        "https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      colSpan: "col-span-12 md:col-span-4",
      selfEnd: false,
    },
    {
      title: "Constitutional Day Celebration",
      image:
        "https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
      selfEnd: false,
    },
    {
      title: "National Unity Conference",
      image:
        "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
      colSpan: "col-span-12 sm:col-span-6 md:col-span-4",
      selfEnd: false,
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`${event.colSpan} ${
                event.selfEnd ? "sm:self-end" : ""
              }`}
            >
              <a
                href="#"
                className="group relative block rounded-xl overflow-hidden focus:outline-none"
              >
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                    src={event.image}
                    alt={event.title}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 rounded-lg bg-white/95 backdrop-blur-sm p-3 sm:p-4 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                    {event.title}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105">
            View All Events
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
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
      </div>
    </div>
  );
};

export default NotableEvents;
