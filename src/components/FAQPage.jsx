import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import wed from "../assets/icons/WeddingsandEvents.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import charfoot from "../assets/icons/charfoot.svg";
import footmob from "../assets/icons/footmob.svg";
import { Link } from "react-router-dom";
import cartoon from "../assets/icons/cartoon.svg";
import faq from "../assets/icons/faq.jpg";
import footdesk from "../assets/icons/footdesk.svg";
import Footer from "./Footer";

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
  const [is1440, setIs1440] = useState(false);

  const parallaxRef = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress: parallaxScrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"], // section enters viewport -> leaves viewport
  });

  // Map scroll progress to Y translation and scale
  const parallaxY = useTransform(parallaxScrollYProgress, [0, 1], ["-15%", "20%"]);
  const parallaxScale = useTransform(parallaxScrollYProgress, [0, 1], [1.05, 1.08]);


  useEffect(() => {
    const checkSize = () => setIs1440(window.innerWidth <= 1440);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

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
       <section
      ref={parallaxRef}
      className="relative py-10 -mt-0.5 z-10 overflow-hidden"
    >
      {/* Half red, half white background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="h-1/2 bg-[#C20000]" />
        <div className="h-1/2 bg-white" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="overflow-hidden shadow-xl rounded-[3rem] max-w-[90%] mx-auto">
          <motion.div
            style={{ y: parallaxY, scale: parallaxScale }}
            className="relative w-full aspect-[1637/623]"
            transition={{ type: "spring", stiffness: 50 }}
          >
            <img
              src={faq}
              alt="Buffet"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
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

      <Footer />
    </>
  );
}
