import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import headlogo from "../assets/icons/headlogo.svg";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#C20000] flex justify-center items-center pt-6 md:pt-8">
      <div className="bg-white w-11/12 max-w-7xl flex justify-between items-center rounded-full px-6 md:px-10 h-3xl py-2 shadow-md relative">
        {/* Left Links - Hidden on mobile */}
        {/* Left Links - Hidden on mobile */}
<ul className="hidden md:flex items-center space-x-12 text-base text-black">
  <li>
    <Link to="/" className="hover:text-red-600">Home</Link>
  </li>
  <li>
    <Link to="/our-story" className="hover:text-red-600">Our Story</Link>
  </li>
  <li>
    <Link to="/menu" className="hover:text-red-600">Menu</Link>
  </li>
  <li>
    <Link to="/services" className="hover:text-red-600">Services</Link>
  </li>
</ul>


        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 -my-[12px] flex items-center">
          <img
            src={headlogo}
            alt="Saada Halwai Logo"
            className="h-14 md:h-24 object-contain drop-shadow-lg bell-shiver"
          />
        </div>

        {/* Right Links + Button */}
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex items-center space-x-12 text-base text-black">
            <li>
              <Link className="hover:text-red-600" to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link className="hover:text-red-600" to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="bg-[#C20000] text-white text-sm font-bold px-5 py-2 rounded-full shadow hover:bg-red-700 transition">
            MAKE A BOOKING
          </button>
        </div>

        {/* Mobile Nav */}
         {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Hamburger (left) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#C20000]"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Phone Icon (right on mobile) */}
          <a href="tel:+447944296922" className="text-2xl text-[#C20000]">
            <FaPhoneAlt />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute mt-1 top-16 left-0 w-full bg-white shadow-md rounded-b-2xl md:hidden z-950">
          <ul className="flex flex-col items-center space-y-4 py-6 text-base font-bold text-black">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/our-story" onClick={() => setIsOpen(false)}>
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/faqs" onClick={() => setIsOpen(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-[#C20000] text-white text-sm font-bold px-5 py-2 rounded-full shadow hover:bg-red-700 transition">
                MAKE A BOOKING
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
