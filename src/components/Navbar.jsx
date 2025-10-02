import React, { useState } from "react"; // ✅ useState imported
import "./Navbar.css";
import { Link } from "react-router-dom";
import headlogo from "../assets/icons/headlogo.svg";
import menuIcon from "../assets/icons/menuIcon.svg";
import { FaPhoneAlt, FaTimes } from "react-icons/fa"; // hamburger & close icons
import { HashLink } from 'react-router-hash-link';


const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#C20000] flex justify-center items-center pt-6 pb-6 md:pt-8 -my-0.5">
      <div className="bg-white w-11/12 max-w-7xl flex justify-between items-center rounded-full px-4 md:px-10 py-3 2xl:py-4 shadow-md relative">
        
        {/* Left Links - Hidden on mobile */}
        <ul className="hidden md:flex items-center font-bold space-x-12 text-base text-black">
          <li><Link to="/" className="hover:text-red-600">Home</Link></li>
          <li><Link to="/our-story" className="hover:text-red-600">Our Story</Link></li>
          <li><Link to="/menu" className="hover:text-red-600">Menu</Link></li>
          <li>  <HashLink smooth to="/#service" className="hover:text-red-600">
    Services
  </HashLink></li>
        </ul>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 -my-[10px] flex items-center">
          <img src={headlogo} alt="Saada Halwai Logo" className="h-20 md:h-24 object-contain drop-shadow-lg bell-shiver"/>
        </div>

        {/* Right Links + Button */}
        <div className="hidden md:flex font-bold items-center space-x-12">
          <ul className="flex items-center space-x-12 text-base text-black">
            <li><Link className="hover:text-red-600" to="/faqs">FAQs</Link></li>
            {/* Contact as button to trigger popup */}
            <li>
              <button
                onClick={onContactClick}
                className="hover:text-red-600"
              >
                Contact
              </button>
            </li>
          </ul>
          <Link to="/booking">
  <button className="bg-[#C20000] text-white text-sm font-lilita px-5 py-2 font-light rounded-full shadow hover:bg-red-600 transition">
    MAKE A BOOKING
  </button>
</Link>

        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between w-full px-4 py-2">
          {/* Hamburger / Close Button */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="w-8 h-8 text-[#C20000]" /> : <img src={menuIcon} alt="Menu" className="w-8 h-8"/>}
          </button>

          {/* Phone Icon */}
          <a href="tel:+447944296922"><FaPhoneAlt className="w-8 h-8 text-[#C20000]" /></a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-27 left-0 w-full bg-white shadow-md rounded-b-2xl md:hidden z-950">
          <ul className="flex flex-col items-center space-y-4 py-6 text-base font-bold text-black">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/our-story" onClick={() => setIsOpen(false)}>Our Story</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><HashLink to="/service" onClick={() => setIsOpen(false)}>Services</HashLink></li>
            <li><Link to="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link></li>
            {/* Contact button in mobile menu */}
            <li>
              <button
                onClick={() => { onContactClick(); setIsOpen(false); }}
                className="hover:text-red-600"
              >
                Contact
              </button>
            </li>
            <li>
              <Link to="/booking">
              <button className="bg-[#C20000] text-white text-sm font-lilita font-light px-5 py-2 rounded-full shadow hover:bg-red-700 transition">
                MAKE A BOOKING
              </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
