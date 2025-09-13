import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import cartoon from '../assets/icons/cartoon.svg';
import Illustration from '../assets/icons/Illustration.svg';

// Social icon helper
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    className="text-[#C20000] hover:text-red-700 transition-colors duration-300">
    {children}
  </a>
);

const Footer = () => {
  return (
    <div className="relative bg-[#C20000] overflow-hidden">
      <footer className="relative z-10 pt-12"> 
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
    {/* Row 1 */}
  <div className="flex flex-col md:flex-row gap-4">
    
    {/* Left Box: Flavors */}
    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center basis-3/4">
      
      <h2 className="font-barber pt-2 text-3xl md:text-7xl text-[#C20000] tracking-wide text-center items-center">
        FLAVORS MADE WITH LOVE
      </h2>
    </div>

    {/* Right Box: Logo */}
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center basis-1/4">
        <img
          src={cartoon}
          alt="Saada Halwai Logo"
          className="w-46 md:w-80 "
        />
      </div>
  </div>


          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center basis-1/4">
              <div className="flex items-center space-x-6">
                <SocialIcon href="#"><FaFacebookF size={28} /></SocialIcon>
                <SocialIcon href="#"><FaInstagram size={28} /></SocialIcon>
                <SocialIcon href="#"><FaTwitter size={28} /></SocialIcon>
                <SocialIcon href="#"><FaTiktok size={28} /></SocialIcon>

              </div>
            </div>
           <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center basis-3/4">
  <h3 className="font-barber text-lg md:text-4xl pt-2 text-[#C20000] tracking-wide text-center md:text-left">
    RING UP YOUR CRAVINGS: +44 79442 96922
  </h3>
</div>

          </div>

          {/* Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-3">
            <nav className="flex flex-wrap justify-center md:justify-around items-center text-sm font-bold text-gray-900">
                <a href="#" className="px-3 py-2  rounded-md ">Home</a>
                <a href="#" className="px-3 py-2  rounded-md ">Our Story</a>
                <a href="#" className="px-3 py-2  rounded-md ">Menu</a>
                <a href="#" className="px-3 py-2  rounded-md ">Services</a>
                <a href="#" className="px-3 py-2  rounded-md ">FAQs</a>
                <a href="#" className="px-3 py-2  rounded-md ">Contact</a>
                <a href="#" className="px-3 py-2  rounded-md ">Make A Booking</a>
            </nav>
            </div>

          

          {/* Bottom Bar */}
          <div className="mt-8 p-6 border border-white rounded-xl flex flex-col sm:flex-row justify-between items-center text-xs text-white font-medium">
            <a href="#" className="hover:underline py-1 sm:py-0">Privacy Policy</a>
            <p className="py-1 sm:py-0">&copy; 2024 Saada Halwai. All Rights Reserved.</p>
            <a href="#" className="hover:underline py-1 sm:py-0">Terms & Conditions</a>
          </div>
        </div>
        {/* Background Layer */}
       <div className=" flex justify-center left-0 w-full text-center select-none z-0 relative">
      <img
        src={Illustration}
        alt="Halwai Mascot"
        className="pt-2"
      />
    </div>
      </footer>
    </div>
  );
};

export default Footer;
