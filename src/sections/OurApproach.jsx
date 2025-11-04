/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaLightbulb } from "react-icons/fa";

const timelineItems = [
  {
    id: 1,
    title: "Vision",
    content:
      "To be the premier event management recognized globally for delivering unforgettable experiences that exceed expectations, inspire connections, and create cherished memories for our clients and their guests.",
  },
  {
    id: 2,
    title: "Mission",
    content:
      "Our mission is to empower businesses to thrive by creating impactful and seamless B2B events. Through our innovative approach, expert planning and personalized solutions, we strive to foster meaningful connections, inspire collaboration, and drive success for our clients and partners.",
  },
  {
    id: 3,
    title: "Strategy",
    content:
      "Pursuing Strategic objectives with unwavering dedication, creativity, and a focus on delivering exceptional experiences.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OurApproach = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-[#2754C7]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Strategic Approach
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left Side - Paragraphs with larger font and semi-bold */}
        <motion.div
          className="space-y-6 text-gray-700 text-xl font-semibold leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Our mission is to create extraordinary experiences that inspire, captivate, and leave a lasting impact on our clients and their audiences.
          </p>
          <p>
            With meticulous planning, innovative concepts, and unwavering dedication, we strive to bring visions to life and deliver seamless, memorable events that exceed expectations.
          </p>
        </motion.div>

        {/* Right Side - Timeline with icons */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineItems.map(({ id, title, content }) => (
            <motion.div
              key={id}
              className="group relative flex gap-x-4 sm:gap-x-5"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon for each heading */}
              <div className="relative z-10 flex justify-center items-center w-10 h-10">
                {title === "Vision" && <FaEye className="text-[#2754C7]" size={28} />}
                {title === "Mission" && <FaBullseye className="text-[#2754C7]" size={28} />}
                {title === "Strategy" && <FaLightbulb className="text-[#2754C7]" size={28} />}
              </div>

              {/* Content */}
              <div className="grow pb-8 group-last:pb-0">
                <h3 className="font-bold text-lg sm:text-xl text-[#2754C7] mb-3">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
