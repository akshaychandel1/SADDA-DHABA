import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import cartoon from "../assets/icons/cartoon.svg";
import footmob from "../assets/icons/footmob.svg";
import footdesk from "../assets/icons/footdesk.svg";
import charfoot from "../assets/icons/charfoot.svg";

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    className="text-[#C20000] hover:text-red-700 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
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
    <div className="relative 2xl:mx-2 2xl:rounded-t-[60px] bg-[#C20000] overflow-hidden">
      <footer className="relative z-10 pt-8">
        <div className="container mx-auto max-w-full px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Row 1: Flavors + Logo (Desktop only) */}
          <div className="hidden md:flex flex-row gap-4 lg:gap-6"> {/* increased gap for iPad */}
            {/* Flavors */}
            <div className=" bg-white rounded-[3rem] shadow-lg p-6 flex items-center justify-center flex-1 lg:p-8">
              <h2 className="font-barber text-6xl lg:text-7xl 2xl:text-8xl text-[#C20000] tracking-wide text-center">
                FLAVORS MADE WITH LOVE
              </h2>
            </div>

            {/* Logo */}
            <div className="bg-white rounded-[2rem] shadow-lg flex items-center justify-center w-auto ">
              <img src={cartoon} alt="Saada Halwai Logo" className="w-56 lg:w-72 2xl:w-106" />
            </div>
          </div>

          {/* Row 1 (Mobile version) → Flavors alone */}
          <div className="md:hidden bg-white rounded-3xl shadow-lg p-3 flex items-center justify-center">
            <h2 className="font-barber text-3xl text-[#C20000] tracking-wide text-center">
              FLAVORS MADE WITH LOVE
            </h2>
          </div>

          {/* Row 2: Logo + Socials (Mobile only) */}
          <div className="md:hidden flex flex-row gap-4">
            <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center flex-1">
              <img src={cartoon} alt="Saada Halwai Logo" className="w-30" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center justify-center flex-1">
              <div className="flex items-center space-x-4">
                <SocialIcon href="#"><FaFacebookF size={28} /></SocialIcon>
                <SocialIcon href="#"><FaInstagram size={28} /></SocialIcon>
                <SocialIcon href="#"><FaTwitter size={28} /></SocialIcon>
                <SocialIcon href="#"><FaTiktok size={28} /></SocialIcon>
              </div>
            </div>
          </div>

          {/* Row 2: Socials + Contact (Desktop + iPad) */}
          <div className="hidden md:flex flex-row gap-4 lg:gap-6 items-center"> {/* added lg adjustments */}
            <div className="bg-white rounded-[2rem] shadow-lg p-4 flex items-center justify-center w-1/4 lg:w-1/3">
              <div className="flex items-center py-4 space-x-6 lg:space-x-16">
                <SocialIcon href="#"><FaFacebookF size={50} /></SocialIcon>
                <SocialIcon href="#"><FaInstagram size={50} /></SocialIcon>
                <SocialIcon href="#"><FaTwitter size={50} /></SocialIcon>
                <SocialIcon href="#"><FaTiktok size={50} /></SocialIcon>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] shadow-lg p-4 flex items-center justify-center flex-1 lg:flex-1">
              <h3 className="font-barber py-4 text-4xl lg:text-5xl 2xl:text-6xl text-[#C20000] tracking-wide text-left">
                RING UP YOUR CRAVINGS: +44 79442 96922
              </h3>
            </div>
          </div>

          {/* Row 3: Contact (Mobile only) */}
          <div className="md:hidden bg-white rounded-2xl shadow-lg p-3 flex items-center justify-center">
            <h3 className="font-barber text-3xl text-[#C20000] tracking-wide text-center">
              RING UP YOUR CRAVINGS: +44 79442 96922
            </h3>
          </div>

          {/* Navigation for Desktop */}
<div className="hidden md:block bg-white rounded-3xl shadow-lg p-3">
  <nav className="flex flex-wrap justify-around items-center text-lg font-bold text-gray-900">
     <Link to="/" className="px-3 py-2">Home</Link>
      <Link to="/our-story" className="px-3 py-2">Our Story</Link>
      <Link to="/menu" className="px-3 py-2">Menu</Link>
      <Link to="/services" className="px-3 py-2">Services</Link>
      <Link to="/faqs" className="px-3 py-2">FAQs</Link>
      <Link to="/contact" className="px-3 py-2">Contact</Link>
      <Link to="/booking" className="px-3 py-2">Make A Booking</Link>
  </nav>
</div>

{/* Navigation for Mobile */}
{/* Navigation for Mobile */}
<div className="md:hidden bg-white rounded-xl shadow-lg p-4">
  <nav className="flex flex-col items-center text-base font-bold text-gray-900 space-y-3">
    {/* First row */}
    <ul className="flex justify-between w-full">
      <li><a href="#" className="px-2">Home</a></li>
      <li><a href="#" className="px-2">Our Story</a></li>
      <li><a href="#" className="px-2">Menu</a></li>
      <li><a href="#" className="px-2">Services</a></li>
    </ul>

    {/* Second row */}
    <ul className="flex justify-around w-full">
      <li><a href="#" className="px-2">FAQs</a></li>
      <li><a href="#" className="px-2">Contact</a></li>
      <li><a href="#" className="px-2">Booking</a></li>
    </ul>
  </nav>
</div>


          {/* Bottom Bar */}
          <div className="mt-4 p-2 border border-white rounded-lg flex flex-row justify-between items-center text-[8px] sm:text-[10px] md:text-sm text-white 2xl:px-8 font-medium space-x-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <p className="whitespace-nowrap">&copy; 2025 Saada Halwai. All Rights Reserved.</p>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>

        {/* Footer Mascot Image */}
        <div className="flex justify-center w-full text-center select-none z-0 relative overflow-visible">
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
    initial={{ y: 100, opacity: 1 }}   // 👈 hidden + slide up
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
  );
};

export default Footer;
