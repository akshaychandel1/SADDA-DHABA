import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import wed from "../assets/icons/WeddingsandEvents.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import charfoot from "../assets/icons/charfoot.svg";
import footmob from "../assets/icons/footmob.svg";
import { Link } from "react-router-dom";
import cartoon from "../assets/icons/cartoon.svg";
import faq from "../assets/icons/faq.jpeg";
import footdesk from "../assets/icons/footdesk.svg";

const faqs = [
  {
    q: "How do I book Snacks Mahal for my event?",
    a: "You can reach out to us via our contact form or email to book Snacks Mahal for your event.",
  },
  {
    q: "Do you ship foods for out-of-town orders?",
    a: "Currently, we only deliver locally. We are working on expanding shipping soon!",
  },
  {
    q: "What types of events do you cater for?",
    a: "We cater for birthdays, weddings, corporate events, and more.",
  },
  {
    q: "Can you customize the menu as per our needs?",
    a: "Yes! We specialize in customizable solutions, offering tailored vegetarian and non-vegetarian menus.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2 weeks in advance.",
  },
  {
    q: "Do you provide tasting sessions before finalizing the menu?",
    a: "Yes, we provide tasting sessions so you can finalize your menu confidently.",
  },
  {
    q: "Where are you based, and where do you deliver your food?",
    a: "We are based in the city center and deliver within a 20-mile radius.",
  },
  {
    q: "How do you deal with special diet concerns?",
    a: "We accommodate allergies, vegan, and gluten-free needs — just let us know in advance.",
  },
  {
    q: "Do you do bulk orders for office snacks?",
    a: "Yes! We offer bulk snack delivery for offices and events.",
  },
];

export default function FAQPage() {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);
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
    <>
      <div className="w-full bg-[#C20000] flex flex-col items-center text-white">
        {/* Header */}
        <div className="text-center mb-20 mt-10 px-4 max-w-9xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-barber tracking-wide mb-3 leading-snug font-bold">
            SPICY QUESTIONS, SWEET SOLUTIONS
          </h1>
          <p className="text-base md:text-lg text-red-100 ">
            Got questions about our food, bookings, or big fat desi feasts?
            <br />
            Don’t worry, your halwai has all the answers. From fresh produce to
            flawless events
            <br />
            we’re serving clarity with the same love as our curries.
          </p>
        </div>
      </div>

      {/* Image placeholder section */}
      <section className="relative -mt-0.5 z-10">
        {/* Half red, half white background */}
        <div className="absolute inset-0 h-full w-full">
          <div className="h-1/2 bg-[#C20000]"></div> {/* top half red */}
          <div className="h-1/2 bg-white"></div> {/* bottom half white */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-1 relative z-20">
          <div className="overflow-hidden shadow-xl rounded-[3rem] max-w-[100%] mx-auto">
            <div className="relative w-full aspect-[1637/623]">
              <img
                src={faq}
                alt="Buffet"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <div className="flex flex-col items-center justify-center my-20">
        <div className="w-11/12 max-w-4xl space-y-4 mb-20">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#C20000] rounded-lg overflow-hidden"
              >
                <button
                  className={`w-full flex justify-between items-center p-4 font-semibold text-left transition-colors ${
                    isOpen ? "bg-[#C20000] text-white" : "bg-white text-black"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  {item.q}
                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 text-sm bg-[#C20000] text-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      
    
     <div className="relative bg-[#C20000] overflow-visible">
  {/* Arc over the footer */}
  <div className="absolute top-0 left-0 right-0 -mt-16 overflow-hidden leading-[0] z-20">
    <svg
      className="relative block w-full h-16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <path d="M0,100 C50,0 50,0 100,100 Z" fill="#C20000" />

    </svg>
  </div>

  <footer className="relative bg-[#C20000] text-white pt-16 -mt-0.5
    2xl:mx-2 2xl:rounded-t-[60px] overflow-hidden z-10">
    {/* Top content (social + nav + text) */}
    <div className="relative z-10 flex flex-col items-center space-y-6">
      {/* Social Icons */}
      <div className="flex space-x-6 text-4xl">
        <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-200"><FaTiktok /></a>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center space-x-4 text-base 2xl:text-[21px] uppercase tracking-wide">
        <ul className="flex space-x-6">
  <li>
    <Link to="/wedding-event" className="hover:underline">
      Weddings & Events
    </Link>
  </li>
  <li>
    <Link to="/corporate-event" className="hover:underline">
      Corporate
    </Link>
  </li>
  <li>
    <Link to="/grab-go" className="hover:underline">
      Grab & Go
    </Link>
  </li>
  <li>
    <Link to="/menu" className="hover:underline">
      Menu
    </Link>
  </li>
  <li>
    <Link to="/our-story" className="hover:underline">
      About Us
    </Link>
  </li>
  <li>
    <button onClick={() => window.dispatchEvent(new Event("openContactPopup"))} className="hover:underline cursor-pointer">
  Contact
</button>

  </li>
</ul>
      </nav>

      {/* Copyright */}
      <p className="2xl:text-[21px] text-base opacity-80 text-center px-4">
        2025 SAADA HALWAI, All rights reserved.
      </p>
    </div>

    {/* Footer Mascot Image */}
    <div className="flex justify-center w-full text-center select-none z-0 relative overflow-visible mt-6">
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
          initial={{ y: 100, opacity: 1 }}
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

    
    </>
  );
}
