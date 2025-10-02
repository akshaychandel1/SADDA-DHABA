import React from 'react'
import samosa from "../assets/icons/house.jpg";
import ribbon from "../assets/icons/ribbon.svg";
import logo from "../assets/icons/Asset12.svg";
import "./HomePage.css";
import Call from "../assets/icons/Call.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import charfoot from "../assets/icons/charfoot.svg";
import footmob from "../assets/icons/footmob.svg";
import { Link } from "react-router-dom";
import cartoon from "../assets/icons/cartoon.svg";
import footdesk from "../assets/icons/footdesk.svg";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const GrabAndGo = () => {
  const [is1440, setIs1440] = useState(false)
  
    useEffect(() => {
      const checkSize = () => setIs1440(window.innerWidth <= 1440)
      checkSize()
      window.addEventListener("resize", checkSize)
      return () => window.removeEventListener("resize", checkSize)
    }, [])
  
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.4,
    });
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























 <motion.section
        className="w-[95%] md:max-w-[80%] bg-[#C20000] text-white rounded-[3rem] flex flex-col md:flex-row items-stretch justify-between mx-auto overflow-hidden my-16 md:mb-32"
        initial={{ y: 150, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side (Text + Button) */}
        <div className="flex-1 py-10 text-center md:text-left md:ml-12 relative">
          <div>
            <p className="text-xl md:text-5xl md:mb-6 mb-6">LET’S CHAT</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl font-barber md:leading-[1.2] text-center md:text-left mb-6">
              TELL US YOUR PLANS, <br />
              WE’LL BRING THE PANS
            </h2>
          </div>

          {/* Button fixed bottom-left on desktop, centered on mobile */}
          <motion.button
            className="absolute md:bottom-12 md:left-22 left-1/2 transform -translate-x-1/2 md:transform-none whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl bg-white text-[#C20000] px-5 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            CALL US
          </motion.button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/3 h-[320px] md:h-[640px] flex justify-center items-center md:items-end mt-4 md:pr-12">
  <img
    src={Call}
    alt="Chef Illustration"
    className="max-w-[75%] md:max-w-full h-auto object-contain"
  />
</div>

      </motion.section>






























       <div className="relative bg-[#C20000] overflow-visible">
        {/* Arc over the footer */}
        <div className="absolute top-0 left-0 right-0 -mt-16 overflow-hidden leading-[0] z-20">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M0,100 C50,0 50,0 100,100 Z" fill="#C20000" />
      
          </svg>
        </div>
      
        <footer className="relative bg-[#C20000] text-white pt-16 -mt-0.5
          2xl:mx-2 2xl:rounded-t-[60px] overflow-hidden z-10">
          {/* Top content (social + nav + text) */}
          <div className="relative z-10 flex flex-col items-center space-y-6">
            {/* Social Icons */}
            <div className="flex space-x-6 text-4xl">
              <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-200"><FaTiktok /></a>
            </div>
      
            {/* Navigation Links */}
             <nav className="flex flex-wrap justify-center space-x-4 text-base 2xl:text-[21px] uppercase tracking-wide">
                    <ul className="flex space-x-6">
              <li>
                <Link to="/wedding-event" className="hover:underline">
                  Weddings & Events
                </Link>
              </li>
              <li>
                <Link to="/corporate-event" className="hover:underline">
                  Corporate
                </Link>
              </li>
              <li>
                <Link to="/grab-go" className="hover:underline">
                  Grab & Go
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <button onClick={() => window.dispatchEvent(new Event("openContactPopup"))} className="hover:underline cursor-pointer">
              Contact
            </button>
            
              </li>
            </ul>
                  </nav>
      
            {/* Copyright */}
            <p className="2xl:text-[21px] text-base opacity-80 text-center px-4">
              2025 SAADA HALWAI, All rights reserved.
            </p>
          </div>
      
          {/* Footer Mascot Image */}
          <div className="flex justify-center w-full text-center select-none z-0 relative overflow-visible mt-6">
            {/* Desktop Images */}
            <div className="hidden md:block relative w-full min-h-[400px]">
              {/* Background footer image */}
              <motion.img
                src={footdesk}
                alt="Halwai Mascot Desktop"
                className="w-full h-auto absolute bottom-0 left-0 z-0"
                initial={{ y: is1440 ? 120 : 100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
      
              {/* Character mascot */}
              <motion.img
                src={charfoot}
                alt="Halwai Mascot Character"
                className="absolute bottom-0 left-1/2 -translate-x-[58%] w-full max-w-[633px] z-10"
                initial={{ y: is1440 ? 120 : 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </div>
      
            {/* Mobile Image */}
            <div ref={ref} className="relative mt-2 block md:hidden w-full max-w-xs mx-auto overflow-visible">
              <motion.img
                src={footmob}
                alt="Halwai Mascot Mobile Base"
                className="w-full h-auto"
                initial={{ y: 100, opacity: 1 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <motion.img
                src={charfoot}
                alt="Halwai Mascot Mobile Overlay"
                className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[66%] z-50 pointer-events-none"
                initial={{ y: 150, opacity: 1 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default GrabAndGo