import React, { useState, useEffect, useRef } from "react";

const stats = [
  {
    id: 1,
    number: 100,
    label:
      "On Time Delivery | Adherence to design & plan | In house team to manage critical functional areas",
  },
  {
    id: 2,
    number: 3500,
    label: "social events",
  },
  {
    id: 3,
    number: 600,
    label:
      "VVIP clients, Political, celebrity and Business class official Event Planner",
  },
  {
    id: 4,
    number: 100,
    label: "global events",
  },
];

const AnimatedNumber = ({ number, id }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime;
          const duration = 1500;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
              const easeOut = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(number * easeOut));
              requestAnimationFrame(animate);
            } else {
              setCount(number);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [number]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {id === 1 ? "%" : "+"}
    </span>
  );
};

const AchievemtNumbers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ id, number, label }) => (
          <div key={id} className="text-center">
            <p className="text-6xl font-bold text-blue-600">
              <AnimatedNumber number={number} id={id} />
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievemtNumbers;
