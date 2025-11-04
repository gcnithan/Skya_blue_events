import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialData = [
  {
    name: "Sri Siddaramaiah",
    designation: "Chief Minister, Karnataka",
    review: `Dhruva is one of the most committed & dedicated professionals who has executed multiple social events who is known to me personally. His commitment to delivering high quality projects is commendable. He has also been part of some of the biggest social events of my colleagues which has been a huge success. I wish him the very best in his new endeavour.`,
  },
  {
    name: "Sri DK Shivakumar",
    designation: "Deputy Chief Minister, Karnataka",
    review: `Dhruva & his team was part of my daughters wedding. He has an eye for detail and his ability to understand the project requirement & to plan the deliveries in line with the expectation is what makes him the best. Wishing him & his team all the very best in this new journey & hoping to see him scale new heights.`,
  },
  {
    name: "Sri HD Devegowda",
    designation: "Former Prime Minister of India",
    review: `Dhruva has been part of our family events for the last 15 years. He is one of the most committed professionals who has always delivered his best.`,
  },
  {
    name: "Dr HC Mahadevappa",
    designation: "Minister of Social welfare",
    review: `Our family has known Dhruva for many years. His commitment to giving 100% is what makes him different. Wishing him & his team very best in his new endeavor.`,
  },
  {
    name: "Dr KS Krishna Reddy",
    designation: "Ex Secretary of Government IPWD",
    review: `If I have to define Dhruva in one word - it would be PERFECTIONIST. He never fails to achieve anything less than 100% and he is also one of the most trustworthy professionals in the event industry.`,
  },
  {
    name: "Sri Siddalingappa Pujari",
    designation: "Managing Director | MSil.",
    review: `The need of the hour is to have dedicated professionals with a sense of accouritability and delivering what is committed. Hoping to see Dhruva setting good benchmarks in the events sector.`,
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [cardsToShow, setCardsToShow] = React.useState(
    typeof window !== "undefined"
      ? window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 768
        ? 2
        : 1
      : 3
  );

  React.useEffect(() => {
    const handleResize = () => {
      setCardsToShow(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonialData.length / cardsToShow);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleTestimonials = testimonialData.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  return (
    <div className="min-h-screen w-full bg-[#fffafc] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255,182,193,0.15) 4px, transparent 0),
            radial-gradient(circle at 85% 35%, rgba(173,216,230,0.15) 4px, transparent 0),
            radial-gradient(circle at 45% 75%, rgba(255,223,186,0.15) 4px, transparent 0)
          `,
          backgroundSize: "150px 150px",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2754C7] mb-2 md:mb-3">
            Powerful Testimonials
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            From the very best
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-stretch gap-4 md:gap-6 lg:gap-8">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              aria-label="Previous testimonials"
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 self-center rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </button>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {visibleTestimonials.map((testimonial, idx) => (
                <div
                  key={currentIndex * cardsToShow + idx}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col"
                  style={{
                    animation: "fadeIn 0.5s ease-in-out",
                  }}
                >
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-pink-300 mb-4 md:mb-6 flex-shrink-0" />

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 md:mb-8 flex-grow">
                    {testimonial.review}
                  </p>

                  <div className="flex flex-col text-left border-t border-gray-100 pt-4 md:pt-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next testimonials"
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 self-center rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8 md:mt-10">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-gray-900"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientTestimonials;
