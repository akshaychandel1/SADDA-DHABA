import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Replace with your actual paths
import bookIcon from "../assets/icons/Calender.svg";
import ringIcon from "../assets/icons/Ring.svg";
import wed from "../assets/icons/WeddingsandEvents.jpg";

const WeddingEvent = () => {
  const [active, setActive] = useState("MITHAAS");
  const buttons = ["OCCASION", "MITHAAS", "MEMORIES"];

  // Page scroll
  const { scrollYProgress } = useScroll();

  // Book animation
  const yBook = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rBook = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const sBook = useTransform(scrollYProgress, [0, 1], [1, 1.07]);

  // Ring animation
  const yRing = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rRing = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const sRing = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      <Navbar />

      <section className="bg-[#C20000] text-white overflow-hidden -mb-px">
  <div className="relative container mx-auto px-2 sm:px-4 py-12 md:py-20 text-center">
    {/* Buttons */}
    <motion.div
      className="font-lilita flex flex-wrap justify-center gap-3 sm:gap-5 mb-6 sm:mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
    >
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setActive(btn)}
          className={`px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 transform ${
            active === btn
              ? "bg-white text-[#C20000] scale-110"
              : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#C20000]"
          }`}
        >
          {btn}
        </button>
      ))}
    </motion.div>

    {/* Title */}
    <motion.h1
      className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-barber tracking-wide mb-3 leading-snug"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      }}
    >
      PARTIES THAT TASTE
      <br className="hidden sm:block" />

      {/* LIKE HOMES with icons */}
      <span className="relative inline-flex flex-wrap items-center justify-center gap-2 mt-2 text-center">
        <motion.img
          src={bookIcon}
          alt="Book"
          style={{ y: yBook, rotate: rBook, scale: sBook }}
          className="block w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
          whileHover={{ scale: 1.12, rotate: -15 }}
        />
        <span>LIKE</span>
        <span>HOMES</span>
        <motion.img
          src={ringIcon}
          alt="Ring"
          style={{ y: yRing, rotate: rRing, scale: sRing }}
          className="block w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
          whileHover={{ scale: 1.15, rotate: 15 }}
        />
      </span>
    </motion.h1>
  </div>
</section>






      {/* Section 2 */}
      {/* <img src="" alt="" /> */}



      {/* Section 3 */}
                  {/* Section 3 */}
                <section className="relative py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="overflow-hidden shadow-xl rounded-full max-w-[90%] mx-auto">
      <div className="relative w-full aspect-[1637/623]">
        <img
          src={wed}
          alt="Buffet"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>













      <Footer />
    </>
  );
};

export default WeddingEvent;
