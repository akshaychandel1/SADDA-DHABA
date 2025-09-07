import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import headlogo from '../assets/icons/headlogo.svg';


const Navbar = () => {
  return (
    <nav className="w-full bg-red-600 flex justify-center items-center py-2">
      <div className="bg-white w-11/12 max-w-7xl flex justify-between items-center rounded-full px-10 py-3 shadow-md relative">
        {/* Left Links */}
        {/* <ul className="flex items-center space-x-12 text-base font-bold text-black">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Our Story</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Services</li>
        </ul> */}
              <ul className="flex items-center space-x-12 text-base font-bold text-black">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/our-story">Our Story</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/services">Services</Link>
        </li>
      </ul>


        {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 -inset-y-0 -my-[12px] flex items-center">
        <img
          src={headlogo}
          alt="Saada Halwai Logo"
          className="h-full object-contain drop-shadow-lg transition-transform duration-300 hover:rotate-12"/>
      </div>


        {/* Right Links */}
        <div className="flex items-center space-x-12">
          {/* <ul className="flex items-center space-x-12 text-base font-bold text-black">
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Contact</li>
          </ul> */}
          <ul className="flex items-center space-x-12 text-base font-bold text-black">
            <li className="cursor-pointer">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <button className="bg-red-600 text-white text-sm font-bold px-5 py-2 rounded-full shadow hover:bg-red-700 transition">
            MAKE A BOOKING
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar
