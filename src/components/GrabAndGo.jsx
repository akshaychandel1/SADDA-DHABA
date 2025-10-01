import React from 'react'
import samosa from "../assets/icons/house.jpg";
import ribbon from "../assets/icons/ribbon.svg";
import logo from "../assets/icons/Asset12.svg";
import "./HomePage.css";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const GrabAndGo = () => {
  return (
    <>
    <div className="bg-[#C20000]  text-white  overflow-hidden -mb-px">
        <div className="relative container mx-auto px-1 py-12 md:py-20 text-center">
          {/* Header Content */}
          <motion.div className="mx-auto md:mb-0 text-center">
            {/* H1 */}
            <motion.h1
              className="text-4xl font-barber md:text-8xl tracking-wide mb-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }} // smooth ease-out cubic
            >
              Fresh Flavors On the Go 
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-base md:text-lg text-red-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              Whether it’s a quick bite or a single order, we’ve got you covered.<br /> Step in, pick your favorite, and enjoy happiness served fresh.
            </motion.p>

            <div className="relative z-30 mt-16 px-4 md:px-6 2xl:px-0 ">
              <img
                src={samosa}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full object-cover object-center rounded-[2rem] shadow-lg mx-auto"
              />
          </div>
</motion.div>
        </div>
      </div>

      <section className="bg-[#C20000] text-white py-5 md:py-20 md:pb-40 items-center -mt-px  px-5 md:px-20 ">
      <div className="container mx-auto flex flex-col  md:flex-row items-center justify-between gap-10">
        {/* Left Side: Heading & Paragraph */}
        <div className="md:w-2/3">
          <h2 className="font-barber tracking-wide text-4xl md:text-6xl 2xl:text-8xl font-bold mb-6">
            THE HALWAI WAY
          </h2>
          <p className="mt-2 md:text-xl 2xl:text-2xl text-base  leading-relaxed text-red-100">
            Sadaq Halwai started with one simple idea – bring the magic of Indian street corners, wedding feasts, and mithai shops straight to the UK. With recipes passed down through generations, we serve chaats that remind you of bustling bazaars and curries rich enough for a royal table. Every dish is cooked fresh, keeping flavours real, spirits high, and memories plated.
          </p>
        </div>

        {/* Right Side: Logo */}
        <div className="md:w-1/4 flex justify-center">
          <img
            src={logo}
            alt="Sadaq Halwai Logo"
            className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>

      {/* ribbon */}
      <div className="relative w-full h-[140px] overflow-visible bg-white">
        {/* Ribbon 1 - tilt left */}
        <div
          className="absolute left-1/2  mt-[-59px] top-1/2 w-[360%]  h-6 2xl:h-16 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(-2deg)", // tilt to bottom-left
            animation: "ribbon-marquee 18s linear infinite",
            filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />

        {/* Ribbon 2 - tilt right */}
        <div
          className="absolute mt-[-40px] left-1/2 top-1/2 w-[360%] h-6 2xl:h-16 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(2deg)", // tilt to bottom-right
            animation: "ribbon-marquee 22s linear infinite reverse",
            filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />
      </div>
    </>
  )
}

export default GrabAndGo