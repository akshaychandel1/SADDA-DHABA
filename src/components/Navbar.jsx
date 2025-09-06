import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black flex justify-center items-center py-2">
      <div className="bg-white w-11/12 max-w-7xl flex justify-between items-center rounded-full px-10 py-3 shadow-md relative">
        {/* Left Links */}
        <ul className="flex items-center space-x-12 text-base font-bold text-black">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Our Story</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Services</li>
        </ul>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -rotate-6">
          <span className="font-extrabold text-2xl bg-black text-white px-3 py-1 rounded">
            SAADA HALWAI
          </span>
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-12">
          <ul className="flex items-center space-x-12 text-base font-bold text-black">
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Contact</li>
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
