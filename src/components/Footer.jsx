import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

// Social icon helper
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    className="text-red-600 hover:text-red-700 transition-colors duration-300">
    {children}
  </a>
);
const socials = [
    { href: '#', icon: <FaFacebookF size={28} /> },
    { href: '#', icon: <FaInstagram size={28} /> },
    { href: '#', icon: <FaTwitter size={28} /> },
    { href: '#', icon: <FaTiktok size={28} /> },
  ];

const Footer = () => {
  return (
    <div className="relative bg-red-600 overflow-hidden">
      <footer className="relative z-10 pt-12"> 
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
    {/* Row 1 */}
  <div className="flex flex-col md:flex-row gap-4">
    
    {/* Left Box: Flavors */}
    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center basis-3/4">
      
      <h2 className="font-barber pt-2 text-3xl md:text-7xl text-red-600 tracking-wide text-center items-center">
        FLAVORS MADE WITH LOVE
      </h2>
    </div>

    {/* Right Box: Logo */}
    <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center basis-1/4">
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="Saada Halwai Logo"
          className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-red-600 flex-shrink-0"
        />
        <span className="font-anton text-2xl md:text-4xl text-gray-800">
          SAADA HALWAI
        </span>
      </div>
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
  <h3 className="font-barber text-lg md:text-4xl pt-2 text-red-600 tracking-wide text-center md:text-left">
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
      <div className="left-0 w-full text-center select-none z-0">
        <h2
          className="font-anton text-8xl md:text-[150px] lg:text-[200px] xl:text-[250px] leading-none text-white"
          style={{ WebkitTextStroke: '2px black', textStroke: '2px black' }}
        >
          SAADA HALWAI
        </h2>
        {/* Mascot on top of text */}
        <img
          src="/halwai.png"
          alt="Halwai Mascot"
          className="absolute left-1/2 transform -translate-x-1/2 -top-20 w-48 md:w-64"
        />
      </div>
      </footer>
    </div>
  );
};

export default Footer;
