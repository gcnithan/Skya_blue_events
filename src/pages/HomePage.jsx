/* eslint-disable no-unused-vars */
// import React from "react";
// import Header from "../components/Header";
// import HeroSection from "../sections/HeroSection";
// import Aboutus from "../sections/Aboutus";
// import AchievemtNumbers from "../sections/AchievemtNumbers";
// import OurApproach from "../sections/OurApproach";
// import ClientTestimonials from "../sections/ClientTestimonials";
// import ClienteleMarquee from "../sections/ClienteleMarquee";
// import NotableEvents from "../sections/NotableEvents";
// import Footer from "../components/Footer";
// import YoutubeSections from "../sections/YoutubeSections";

// const HomePage = () => {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <AchievemtNumbers />
//       <Aboutus />
//       <OurApproach />
//       <ClienteleMarquee />
//       <ClientTestimonials />
//       <NotableEvents />
//       <YoutubeSections />
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import Aboutus from "../sections/Aboutus";
import AchievemtNumbers from "../sections/AchievemtNumbers";
import OurApproach from "../sections/OurApproach";
import ClientTestimonials from "../sections/ClientTestimonials";
import ClienteleMarquee from "../sections/ClienteleMarquee";
import NotableEvents from "../sections/NotableEvents";
import Footer from "../components/Footer";
import YoutubeSections from "../sections/YoutubeSections";

// Animated Section Wrapper Component
const AnimatedSection = ({ children, id, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />

      {/* Hero Section - No animation wrapper as it should be visible immediately */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Achievements Section */}
      <AnimatedSection id="achievements">
        <AchievemtNumbers />
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection id="about">
        <Aboutus />
      </AnimatedSection>

      {/* Our Approach Section */}
      <AnimatedSection id="Approach">
        <OurApproach />
      </AnimatedSection>

      {/* Clients Section */}
      <AnimatedSection id="clients">
        <ClienteleMarquee />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials">
        <ClientTestimonials />
      </AnimatedSection>

      {/* Notable Events Section */}
      <AnimatedSection id="events">
        <NotableEvents />
      </AnimatedSection>

      {/* YouTube Section */}
      <AnimatedSection id="youtube">
        <YoutubeSections />
      </AnimatedSection>

      {/* Footer - Always visible, has its own animations */}
      <Footer />
    </div>
  );
};

export default HomePage;
