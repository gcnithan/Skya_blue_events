import React from "react";
import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import Aboutus from "../sections/Aboutus";
import AchievemtNumbers from "../sections/AchievemtNumbers";
import OurApproach from "../sections/OurApproach";

const HomePage = () => {
  return <div>
    <Header />
    <HeroSection />
    <AchievemtNumbers />
    <Aboutus />
    <OurApproach />
  </div>;
};

export default HomePage;
