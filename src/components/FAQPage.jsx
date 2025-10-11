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
    q: " How do I book Saada Halwai for my event?",
    a: " Booking us is easy-peasy! Just reach out through our contact page or give us a call/WhatsApp. Share your event details, guest count, and menu preferences, and we’ll take care of the rest.",
  },
  {
    q: " Do you use frozen food or fresh ingredients?",
    a: "Freshness is our mantra 🌿✨. We source farm-fresh vegetables and quality ingredients for every dish. No shortcuts, no frozen compromises, just pure, honest flavors.",
  },
  {
    q: "What types of events do you cater for?",
    a: "From dreamy weddings 💍 to corporate gatherings 👔, birthday parties 🎉 to intimate family celebrations, if there’s a reason to feast, Saada Halwai is there. Big or small, we’ve got your tables covered.",
  },
  {
    q: " Can you customize the menu for my event?",
    a: "Absolutely! Every event is unique, and so is every menu. Pick your favorites, share your theme or vibe, and we’ll curate a spread that’s perfectly tailored to your taste (and your guests’ cravings).",
  },
  {
    q: "Do you offer vegetarian and vegan options?",
    a: "Yes, we do — and proudly! Many of our dishes are naturally vegetarian, and we happily create vegan-friendly versions on request. No guest should feel left out of the feast. Good food, after all, is for everyone.",
  },
  {
    q: "How far in advance should I book?",
    a: "The earlier, the better! For big events like weddings, we recommend booking 2–3 months ahead. For smaller gatherings, a few weeks’ notice works. But if it’s last-minute, still call us, we’ll try our best to make it happen!",
  },
  {
    q: " Do you provide tasting sessions before finalizing the menu?",
    a: "Yes! We offer tasting sessions so you can experience the flavors firsthand. After all, it’s your event, the menu should feel just right for you and your guests.",
  },
  {
    q: " Where are you based, and do you cater outside your city?",
    a: "We’re based in the UK 🇬🇧, but our halwai spirit travels far. We cater across cities and regions depending on the event scale. Just let us know your location, and we’ll confirm availability.",
  },
  {
    q: "How big or small of an event can you handle?",
    a: " Whether it’s an intimate gathering of 20 or a grand celebration with thousands, Saada Halwai has the team, expertise, and flavors to match your guest list.",
  },
  {
    q: "Do you also do grab-and-go or daily meals?",
    a: " Our main focus is on events and celebrations. But for special occasions, corporate needs, or bulk daily orders, we can create custom solutions. Just ask, we’re happy to explore options with you.",
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
