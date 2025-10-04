import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Assets
import footmob from "../assets/icons/footmob.svg";
import footdesk from "../assets/icons/footdesk.svg";
import charfoot from "../assets/icons/charfoot.svg";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [is1440, setIs1440] = useState(false);

  // Resize listener
  useEffect(() => {
    const checkSize = () => setIs1440(window.innerWidth <= 1440);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Contact popup event listener
  useEffect(() => {
    const handleOpenContact = () => setShowContact(true);
    window.addEventListener("openContactPopup", handleOpenContact);
    return () =>
      window.removeEventListener("openContactPopup", handleOpenContact);
  }, []);

  // Intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <footer className="bg-[#C20000] text-white pt-10 rounded-t-2xl relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-12 flex flex-col md:flex-row justify-between items-start md:items-center md:gap-x-32 relative z-20">
        {/* Left Section */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-2 mb-8 md:mb-0 2xl:pl-38
           text-center md:text-left"
        >
          <h3 className="font-barber  py-4 text-3xl lg:text-5xl 2xl:text-6xl tracking-wider text-left">RING UP YOUR CRAVINGS</h3>
          <h2 className="font-barber py-4 text-4xl lg:text-7xl 2xl:text-8xl tracking-tight ">+44 79442 96922</h2>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF size={31} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram size={31} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter size={31} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTiktok size={31} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-md md:text-lg mt-4 py-4">
            © 2025 Saadi Halwa. All Rights Reserved
          </p>
        </motion.div>

        {/* Right Section (Links) */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 grid grid-cols-2 gap-x-6 gap-y-4 text-md mb-6 md:mb-0 xl:text-xl 
                     text-center md:text-right justify-items-start md:justify-items-start "
        >
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </motion.div>
      </div>

      {/* Popup */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">This is your contact popup.</p>
            <button
              onClick={() => setShowContact(false)}
              className="bg-[#C20000] text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mascot Images */}
      <div className="flex justify-center w-full text-center select-none relative overflow-visible z-0">
        {/* Desktop */}
        <div className="hidden md:block relative w-full min-h-[400px]">
          <motion.img
            src={footdesk}
            alt="Halwai Mascot Desktop"
            className="w-full h-auto absolute bottom-0 left-0 z-0"
            initial={{ y: is1440 ? 120 : 100, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
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

        {/* Mobile */}
        <div
          ref={ref}
          className="relative mt-2 block md:hidden w-full max-w-xs mx-auto overflow-visible"
        >
          <motion.img
            src={footmob}
            alt="Halwai Mascot Mobile Base"
            className="w-full h-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.img
            src={charfoot}
            alt="Halwai Mascot Mobile Overlay"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[66%] z-50 pointer-events-none"
            initial={{ y: 150, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
