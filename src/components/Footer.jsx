import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import cartoon from "../assets/icons/cartoon.svg";
import des from "../assets/icons/des.svg";       // Desktop footer image
import BottomMOB from "../assets/icons/BottomMOB.svg"; // Mobile footer image

// Social icon helper
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    className="text-[#C20000] hover:text-red-700 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <div className="relative bg-[#C20000] overflow-hidden">
      <footer className="relative z-10 pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Row 1: Flavors + Logo (Desktop only) */}
          <div className="hidden md:flex flex-row gap-4">
            {/* Flavors */}
            <div className="bg-white rounded-[3rem] shadow-lg p-6 flex items-center justify-center flex-1">
              <h2 className="font-barber text-6xl 2xl:text-7xl text-[#C20000] tracking-wide text-center">
                FLAVORS MADE WITH LOVE
              </h2>
            </div>

            {/* Logo */}
            <div className="bg-white rounded-[2rem] shadow-lg flex items-center justify-center w-auto">
              <img src={cartoon} alt="Saada Halwai Logo" className="w-56" />
            </div>
          </div>

          {/* Row 1 (Mobile version) → Flavors alone */}
          <div className="md:hidden bg-white rounded-3xl shadow-lg p-3 flex items-center justify-center">
            <h2 className="font-barber text-2xl text-[#C20000] tracking-wide text-center">
              FLAVORS MADE WITH LOVE
            </h2>
          </div>

          {/* Row 2: Logo + Socials (Mobile only) */}
          <div className="md:hidden flex flex-row gap-4">
            {/* Logo */}
            <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center flex-1">
              <img src={cartoon} alt="Saada Halwai Logo" className="w-24" />
            </div>
            {/* Socials */}
            <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center justify-center flex-1">
              <div className="flex items-center space-x-4">
                <SocialIcon href="#"><FaFacebookF size={24} /></SocialIcon>
                <SocialIcon href="#"><FaInstagram size={24} /></SocialIcon>
                <SocialIcon href="#"><FaTwitter size={24} /></SocialIcon>
                <SocialIcon href="#"><FaTiktok size={24} /></SocialIcon>
              </div>
            </div>
          </div>

          {/* Row 2: Socials + Contact (Desktop only) */}
          <div className="hidden md:flex flex-row gap-4">
            {/* Socials */}
            <div className="bg-white rounded-[2rem] shadow-lg p-4 flex items-center justify-center w-1/4">
              <div className="flex items-center space-x-6">
                <SocialIcon href="#"><FaFacebookF size={28} /></SocialIcon>
                <SocialIcon href="#"><FaInstagram size={28} /></SocialIcon>
                <SocialIcon href="#"><FaTwitter size={28} /></SocialIcon>
                <SocialIcon href="#"><FaTiktok size={28} /></SocialIcon>
              </div>
            </div>
            {/* Contact */}
            <div className="bg-white rounded-[2rem] shadow-lg p-4 flex items-center justify-center flex-1">
              <h3 className="font-barber text-4xl 2xl:text-5xl text-[#C20000] tracking-wide text-left">
                RING UP YOUR CRAVINGS: +44 79442 96922
              </h3>
            </div>
          </div>

          {/* Row 3: Contact (Mobile only) */}
          <div className="md:hidden bg-white rounded-2xl shadow-lg p-3 flex items-center justify-center">
            <h3 className="font-barber text-mg text-[#C20000] tracking-wide text-center">
              RING UP YOUR CRAVINGS: +44 79442 96922
            </h3>
          </div>

          {/* Navigation */}
          <div className="bg-white rounded-3xl md:rounded-[1.5rem] shadow-lg p-3">
            <nav className="flex flex-wrap justify-center md:justify-around items-center text-sm md:text-mg font-bold text-gray-900">
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
          <div className="mt-4 p-2 border border-white rounded-lg flex flex-row justify-between items-center text-[8px] sm:text-[10px] md:text-xs text-white font-medium space-x-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <p className="whitespace-nowrap">&copy; 2025 Saada Halwai. All Rights Reserved.</p>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>

        {/* Footer Mascot Image */}
        <div className="flex justify-center w-full text-center select-none z-0 relative">
          {/* Desktop Image */}
          <img
            src={des}
            alt="Halwai Mascot Desktop"
            className="hidden md:block pt-2 w-full"
          />
          {/* Mobile Image */}
          <img
            src={BottomMOB}
            alt="Halwai Mascot Mobile"
            className="block md:hidden pt-2 w-full max-w-xs"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
