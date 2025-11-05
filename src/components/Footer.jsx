/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import Facebookicon from "../assets/icons/fb.json";
import Twittericon from "../assets/icons/twitter.json";
import Instagramicon from "../assets/icons/ig.json";
import Youtube from "../assets/icons/youtube.json";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const facebookRef = useRef(null);
  const twitterRef = useRef(null);
  const instagramRef = useRef(null);
  const youtubeRef = useRef(null);

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebookicon,
      ref: facebookRef,
      url: "https://www.facebook.com/people/Skyblueeventsblr/61553010197616/",
    },
    {
      name: "Twitter",
      icon: Twittericon,
      ref: twitterRef,
      url: "https://x.com/skyblueblr",
    },
    {
      name: "Instagram",
      icon: Instagramicon,
      ref: instagramRef,
      url: "https://www.instagram.com/skyblueeventsblr/",
    },
    {
      name: "Youtube",
      icon: Youtube,
      ref: youtubeRef,
      url: "https://www.youtube.com/channel/UCmWlXd1jf5iGPmZPa1IVEBg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-8 md:py-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* Logo & Description */}
            <motion.div
              className="flex items-start gap-6"
              variants={itemVariants}
            >
              <motion.img
                src="assets/Skyblue.png"
                alt="Logo"
                className="h-16 w-auto shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex-1">
                <p className="text-base text-gray-700 leading-relaxed">
                  Creating unforgettable experiences and memorable events with
                  dedication and excellence.
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  <br className="sm:hidden" />
                  <span className="break-all">
                    info@skyblueeventmanagement.in
                  </span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <span className="font-medium text-gray-800">Phone:</span> +91
                  9353168582
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <span className="font-medium text-gray-800">Address:</span>{" "}
                  <br />
                  No.17/4, 2nd Floor, Veerashaiva Lingayat Bhavan,
                  <br />
                  Sadashiva Nagar, Armane Nagar,
                  <br />
                  Bengaluru, Karnataka 560080
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-gray-200 pt-6"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <motion.div
                className="text-center sm:text-left order-2 sm:order-1"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-xs text-gray-600">
                  © 2025 SkyBlue Event Management India Pvt. Ltd.
                  <br />
                  All rights reserved.
                </p>
              </motion.div>

              {/* Designed & Developed by - Center on mobile, middle on desktop */}
              <motion.div
                className="text-center order-1 sm:order-2"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-xs text-gray-600">
                  Designed & Developed by{" "}
                  <motion.a
                    href="https://www.naviinfo.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#2754C7] hover:text-[#1e3f9f] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Navi InfoTech
                  </motion.a>
                </p>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex items-center gap-3 order-3"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Lottie
                      lottieRef={social.ref}
                      animationData={social.icon}
                      loop={true}
                      autoplay={true}
                      className="w-6 h-6"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
