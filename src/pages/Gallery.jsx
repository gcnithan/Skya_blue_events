/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "BRI_6555.webp",
    "M2E_0738.webp",
    "DSC05759.webp",
    "041A2768.webp",
    "M2E_0748.webp",
    "041A3369.webp",
    "DSC_4205.webp",
    "DSC_4559.webp",
    "DSC_4211.webp",
    "JSRL0568.webp",
    "DSC_4253.webp",
    "JSRL0601.webp",
    "DSC_4352.webp",
    "JSRL0763.webp",
    "DSC_4450.webp",
    "JSRL1001.webp",
    "DSC_4495.webp",
    "JSRL1078.webp",
    "DSC00349.webp",
    "JSRL1091.webp",
    "DSC00361.webp",
    "JSRL1139.webp",
    "DSC00666.webp",
    "JSRL8403.webp",
    "DSC00747.webp",
    "JSRL8404.webp",
    "DSC00829.webp",
    "JSRL8407.webp",
    "DSC02135.webp",
    "JSRL8415.webp",
    "DSC04891.webp",
    "JSRL8845.webp",
    "JSRL8897.webp",
    "DSC05006.webp",
    "JSRL8898.webp",
    "DSC05336.webp"
  ];

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeCarousel = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('assets/gallerybg.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-black mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-colors">
              Back
            </span>
          </button>
          <h1 className="text-5xl font-bold text-[#2754C7]">Gallery</h1>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm"
              onClick={() => openCarousel(index)}
            >
              <img
                src={`assets/images/${image}`}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeCarousel}
          >
            {/* Close Button */}
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl max-h-[90vh] flex items-center justify-center px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`assets/images/${selectedImage}`}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black/50 px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;