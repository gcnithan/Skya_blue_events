/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [menuOpen]);

//   const scrollToSection = (id) => {
//     if (id === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const element = document.getElementById(id);
//       if (element) {
//         const offset = 80;
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - offset;
//         window.scrollTo({ top: offsetPosition, behavior: "smooth" });
//       }
//     }
//     setMenuOpen(false);
//   };

//   const menuItems = [
//     { label: "Home", id: "home" },
//     { label: "About Us", id: "about" },
//     { label: "Our Approach", id: "achievements" },
//     { label: "Notable Events", id: "events" },
//     { label: "Our Clients", id: "clients" },
//     { label: "Testimonials", id: "testimonials" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed inset-x-0 top-0 z-50 lg:py-3 transition-all duration-300 ${
//           isSticky ? "bg-white/30 backdrop-blur-md shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
//           <div className="flex items-center justify-between">
//             {/* Logo on left */}
//             <button
//               onClick={() => scrollToSection("home")}
//               className="flex items-center shrink-0 text-2xl lg:text-3xl font-bold text-black hover:opacity-80 transition-opacity duration-200 focus:outline-none cursor-pointer"
//               aria-label="Home"
//             >
//               <img
//                 src="assets/Skyblue.png"
//                 alt="Logo"
//                 className="h-14 w-auto"
//               />
//             </button>

//             {/* Desktop navigation on right */}
//             <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8 xl:space-x-10">
//               {menuItems.map(({ label, id }) => (
//                 <button
//                   key={label}
//                   onClick={() => scrollToSection(id)}
//                   className="relative text-base font-medium text-black hover:text-blue-600 transition-all duration-200 focus:outline-none group cursor-pointer"
//                 >
//                   <span className="relative">{label}</span>
//                   <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//                 </button>
//               ))}
//             </nav>

//             {/* Mobile menu button on right */}
//             <button
//               type="button"
//               className="md:hidden p-2 -m-2 rounded-lg focus:outline-none hover:bg-black/5 transition-colors duration-200 cursor-pointer"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="w-7 h-7 text-black"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Full-Screen Menu */}
//       <div
//         className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
//           menuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         {/* Backdrop */}
//         <div
//           className={`absolute inset-0 bg-white transition-opacity duration-300 ${
//             menuOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setMenuOpen(false)}
//         ></div>

//         {/* Menu Content */}
//         <div
//           className={`relative h-full flex flex-col transition-transform duration-300 ${
//             menuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Close Button */}
//           <div className="flex justify-end p-6">
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="p-2 rounded-full hover:bg-black/5 transition-colors duration-200 focus:outline-none cursor-pointer"
//               aria-label="Close menu"
//             >
//               <svg
//                 className="w-8 h-8 text-black"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Menu Items */}
//           <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
//             {menuItems.map(({ label, id }, index) => (
//               <button
//                 key={label}
//                 onClick={() => scrollToSection(id)}
//                 className="relative text-2xl sm:text-3xl font-semibold text-black transition-all duration-200 focus:outline-none group cursor-pointer"
//                 style={{
//                   animation: menuOpen
//                     ? `slideIn 0.3s ease-out ${index * 0.1}s both`
//                     : "none",
//                 }}
//               >
//                 <span className="relative">{label}</span>
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Approach", id: "Approach" },
    { label: "Our Clients", id: "clients" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Notable Events", id: "events" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 lg:py-3 transition-all duration-300 ${
          isSticky ? "bg-white/50 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo on left */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="flex items-center shrink-0 text-2xl lg:text-3xl font-bold text-black hover:opacity-80 transition-opacity duration-200 focus:outline-none cursor-pointer"
              aria-label="Home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="assets/Skyblue.png"
                alt="Logo"
                className="h-14 w-auto"
              />
            </motion.button>

            {/* Desktop navigation on right */}
            <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8 xl:space-x-10">
              {menuItems.map(({ label, id }, index) => (
                <motion.button
                  key={label}
                  onClick={() => scrollToSection(id)}
                  className="relative text-base font-medium text-black hover:text-blue-600 transition-all duration-200 focus:outline-none group cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative">{label}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </nav>

            {/* Mobile menu button on right */}
            <motion.button
              type="button"
              className="md:hidden p-2 -m-2 rounded-lg focus:outline-none hover:bg-black/5 transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-7 h-7 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative h-full flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 transition-colors duration-200 focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-8 h-8 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
                {menuItems.map(({ label, id }, index) => (
                  <motion.button
                    key={label}
                    onClick={() => scrollToSection(id)}
                    className="relative text-2xl sm:text-3xl font-semibold text-black transition-all duration-200 focus:outline-none group cursor-pointer"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">{label}</span>
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-blue-600"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
