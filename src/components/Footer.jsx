import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import React from "react";
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="relative bg-[#C20000] overflow-hidden">
      <footer className="relative z-10 pt-12">
        <div className="container mx-auto max-w-full px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Row 1: Flavors + Logo (Desktop only) */}
          <div className="hidden md:flex flex-row gap-4 lg:gap-6"> {/* increased gap for iPad */}
            {/* Flavors */}
            <div className="bg-white rounded-[3rem] shadow-lg p-6 flex items-center justify-center flex-1 lg:p-8">
              <h2 className="font-barber text-6xl lg:text-7xl 2xl:text-8xl text-[#C20000] tracking-wide text-center">
                FLAVORS MADE WITH LOVE
              </h2>
            </div>

            {/* Logo */}
            <div className="bg-white rounded-[2rem] shadow-lg flex items-center justify-center w-auto lg:w-1/3">
              <img src={cartoon} alt="Saada Halwai Logo" className="w-56 lg:w-72 2xl:w-96" />
            </div>
          </div>

          {/* Row 1 (Mobile version) → Flavors alone */}
          <div className="md:hidden bg-white rounded-3xl shadow-lg p-3 flex items-center justify-between">
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
              <div className="flex items-center space-x-6 lg:space-x-4">
                <SocialIcon href="#"><FaFacebookF size={50} /></SocialIcon>
                <SocialIcon href="#"><FaInstagram size={50} /></SocialIcon>
                <SocialIcon href="#"><FaTwitter size={50} /></SocialIcon>
                <SocialIcon href="#"><FaTiktok size={50} /></SocialIcon>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] shadow-lg p-4 flex items-center justify-center flex-1 lg:flex-1">
              <h3 className="font-barber text-4xl lg:text-5xl 2xl:text-6xl text-[#C20000] tracking-wide text-left">
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

          {/* Navigation */}
          <div className="bg-white rounded-3xl md:rounded-[1.5rem] shadow-lg p-3">
            <nav className="flex flex-wrap justify-center md:justify-around items-center text-sm md:text-lg font-bold text-gray-900">
              <a href="#" className="px-3 py-2">Home</a>
              <a href="#" className="px-3 py-2">Our Story</a>
              <a href="#" className="px-3 py-2">Menu</a>
              <a href="#" className="px-3 py-2">Services</a>
              <a href="#" className="px-3 py-2">FAQs</a>
              <a href="#" className="px-3 py-2">Contact</a>
              <a href="#" className="px-3 py-2">Make A Booking</a>
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="mt-4 p-2 border border-white rounded-lg flex flex-row justify-between items-center text-[8px] sm:text-[10px] md:text-sm text-white font-medium space-x-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <p className="whitespace-nowrap">&copy; 2025 Saada Halwai. All Rights Reserved.</p>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>

        {/* Footer Mascot Image */}
        <div className="flex justify-center w-full text-center select-none z-0 relative overflow-visible">
          {/* Desktop Images */}
          <div className="hidden mt-22 md:block relative w-full">
            <img src={footdesk} alt="Halwai Mascot Desktop" className="w-full" />
            <motion.img
              src={charfoot}
              alt="Halwai Mascot Character"
              className="absolute bottom-0 left-1/2 -translate-x-[58%] w-full max-w-[633px]" 
              initial={{ y: 200, opacity: 1}}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>

          {/* Mobile Image */}
          <div ref={ref} className="relative block md:hidden w-full max-w-xs mx-auto overflow-visible">
            <img src={footmob} alt="Halwai Mascot Mobile Base" className="relative w-full mt-2 h-auto block" />
            <motion.img
              src={charfoot}
              alt="Halwai Mascot Mobile Overlay"
              className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[66%] z-50 pointer-events-none"
              initial={{ y: 150, opacity: 1 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
