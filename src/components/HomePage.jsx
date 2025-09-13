import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion,useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import carrot from "../assets/icons/carrot.svg";
import brinjal from "../assets/icons/brinjal.svg";
import tumip from "../assets/icons/tumip.svg";
import peas from "../assets/icons/peas.svg";
import ribbon from "../assets/icons/ribbon.svg";
import chopping from "../assets/icons/chopping.svg";
import cover from "../assets/icons/cover.svg";
import pan from "../assets/icons/pan.svg";
import wine from "../assets/icons/wine.svg";
import suit from "../assets/icons/suit.svg";
import bag from "../assets/icons/bag.svg";
import HalfCharacter from "../assets/icons/HalfCharacter.png";
import Hand from "../assets/icons/Hand.png";
import HandRight from "../assets/icons/HandRight.png";
import textthink from "../assets/icons/textthink.svg";
import WeddingsandEvents from "../assets/icons/WeddingsandEvents.jpg";
import GrabandGo from "../assets/icons/GrabandGo.jpg";
import CorporateEvents from "../assets/icons/CorporateEvents.jpg";
import dow from "../assets/icons/dow.jpg";
import Cap from "../assets/icons/Cap.svg";
import EmblaCarousel from './carousel/EmblaCarousel'
import './carousel/css/embla.css'



const testimonials = [
  {
    text: "We hired Saada Halwai for our wedding reception, and I can honestly say they stole the show! From the first meeting, their team understood exactly what we wanted authentic Indian flavours, but presented with the elegance our UK guests would appreciate. The chaat station was an absolute hit, with people going back for seconds (and thirds!). Even our non-Indian guests couldn’t stop talking about the mithai they said it was the best they’d ever tasted. Everything was freshly cooked, beautifully presented, and served with a smile. Saada Halwai didn’t just cater our event, they added warmth, colour, and soul to it. ",
    author: "PRIYA & ARJUN",
    location: "LONDON",
    rating: 5, // ⭐⭐⭐⭐⭐
  },
  {
    text: "When we chose Saada Halwai for our daughter’s engagement, we knew the food would be good, but they went far beyond anything we imagined. The variety of chaats and snacks brought so much colour and excitement to the evening, and every dish tasted like it was made at home with love. Guests kept complimenting the richness of the curries and the delicate balance of spices in the starters. Even the desserts were so fresh that people were asking for takeaway boxes! Saada Halwai didn’t just serve food, they created memories, and we’ll always be grateful for the joy they added to such an important occasion.",
    author: "ANITA & RAJ",
    location: "MANCHESTER",
    rating: 4, // ⭐⭐⭐⭐
  },
  {
    text: "For our corporate Diwali celebration, Saada Halwai was the perfect partner. They managed to cater for a large crowd without compromising on authenticity or presentation. From the samosas to the mithai, everything had that unmistakable homemade taste that reminded so many of us of festivals back in India. What impressed us most was how professionally their team handled the event, keeping everything running smoothly while still making us feel like family. The positive feedback from our colleagues has been overwhelming, and many said it was the best food they’ve had at a company event. Saada Halwai brought the spirit of Diwali to life for us.",
    author: "MEERA & VIKRAM",
    location: "BIRMINGHAM",
    rating: 5,
  },
];

const HomePage = () => {
  const SLIDES = [
  { src: dow, alt: "Weddings and Events" },
  { src: dow, alt: "Weddings and Events" },
  { src: dow, alt: "Weddings and Events" },
  { src: dow, alt: "Weddings and Events" },
  { src: dow, alt: "Weddings and Events" },
  { src: dow, alt: "Weddings and Events" },
  { src: dow, alt: "Weddings and Events" },
];
 const OPTIONS = {
    align: 'start', // This centers the active slide
    loop: true,
    slidesToScroll: 1,
    skipSnaps: false, // Ensures the carousel snaps to each slide
  };


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Turnip
  const yTurnip = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rTurnip = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const sTurnip = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  // Brinjal
  const yBrinjal = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const rBrinjal = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sBrinjal = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Peas
  const yPeas = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const rPeas = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const sPeas = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // Carrot
  const yCarrot = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rCarrot = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const sCarrot = useTransform(scrollYProgress, [0, 1], [1, 1.2]);


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2800); // auto-slide every 2 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#C20000]  text-white  overflow-hidden">
        <div className="relative container mx-auto px-1 py-12 md:py-20 text-center">
          {/* Header Content */}
          <div className=" mx-auto md:mb-60">
            <h1 className="text-4xl font-lilita md:text-8xl tracking-tight mb-3">
              YOUR HALWAI'S IN TOWN
            </h1>
            <p className="text-base md:text-lg text-red-100">
              Straight from the streets of India to your celebrations,every bite
              is cheeky, tasty, and made to impress. Ready to be served with
              flair.
            </p>
            <button className="mt-6 mb-26 bg-white text-[#C20000] font-lilita py-2 px-6 rounded-lg shadow-lg hover: transition duration-1 ease-in-out transform hover:scale-105">
              <span className="pt-10">EXPLORE MENU</span>
            </button>
          </div>

          {/* Mascot and Food Display Section */}
          <div className="relative mt-2 md:mt-24">
            <div className="absolute -top-22 md:-top-78 left-1/2 -translate-x-1/2 z-20 w-48 md:w-[54%]">
              <img
                src={HalfCharacter}
                alt="Happy Halwai Mascot"
                className="z-0"
              />

              {/* Speech Bubble */}
              <div className="absolute top-2 md:top-8 -right-3 md:-right-3 w-16 md:w-42">
                <div className="relative ">
                  <img src={textthink} alt="" />
                  <div className="absolute left-0 -bottom-2  transform rotate-45 -translate-x-2"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 md:-top-10 left-1/2 -translate-x-[300%] md:-translate-x-[270%] z-50">
              <img src={Hand} alt="Hand" className="w-11 md:w-30" />
            </div>
            <div className="absolute -top-4 md:-top-10 left-1/2 translate-x-[200%] md:translate-x-[180%] z-50">
              <img src={HandRight} alt="Hand" className="w-11 md:w-29" />
            </div>

            {/* White background card for food */}
            {/* <div className="absolute  md:pt-28 pb-10 shadow-2xl z-10"> */}
            <div className="relative z-30 md:mx-6">
              <img
                src={WeddingsandEvents}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

    
           <div
      ref={ref}
      className="flex items-center justify-center bg-[#C20000] text-white p-4 pb-10"
    >
      <div className="relative inline-block font-lilita my-6 text-center leading-snug text-2xl md:text-6xl">
        <p>
          WE KEEP IT REAL WITH VEGGIES <br />
          AS FRESH AS YOUR CRAVINGS, <br />
          SO EVERY DISH TASTES ALIVE.
        </p>

        {/* Turnip */}
        <motion.div
          style={{ y: yTurnip, rotate: rTurnip, scale: sTurnip }}
          className="absolute -top-2 left-[20%] -translate-x-1/2 w-12 h-12 md:w-16 md:h-16"
          whileHover={{ scale: 1.4, rotate: 15 }}
        >
          <img src={tumip} alt="Turnip" className="w-full h-full" />
        </motion.div>

        {/* Eggplant */}
        <motion.div
          style={{ y: yBrinjal, rotate: rBrinjal, scale: sBrinjal }}
          className="absolute bottom-0 md:bottom-20 left-3 -translate-x-full w-10 h-10 md:w-12 md:h-12"
          whileHover={{ scale: 1.4, rotate: -15 }}
        >
          <img src={brinjal} alt="Eggplant" className="w-full h-full" />
        </motion.div>

        {/* Peas */}
        <motion.div
          style={{ y: yPeas, rotate: rPeas, scale: sPeas }}
          className="absolute bottom-2 right-20 translate-x-full w-12 h-12 md:w-14 md:h-14"
          whileHover={{ scale: 1.4, rotate: 20 }}
        >
          <img src={peas} alt="Peas" className="w-full h-full" />
        </motion.div>

        {/* Carrot */}
        <motion.div
          style={{ y: yCarrot, rotate: rCarrot, scale: sCarrot }}
          className="absolute right-4 top-6 translate-x-full -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
          whileHover={{ scale: 1.4, rotate: -20 }}
        >
          <img src={carrot} alt="Carrot" className="w-full h-full" />
        </motion.div>
      </div>
    </div>





  

      {/* allooo mulli section */}
      {/* <div className="flex items-center justify-center bg-[#C20000] text-white p-4 pb-10">
        <div className="relative font-lilita my-6 text-center leading-snug text-2xl md:text-6xl">
          <p>
            WE KEEP IT REAL WITH VEGGIES <br />
            AS FRESH AS YOUR CRAVINGS, <br />
            SO EVERY DISH TASTES ALIVE.
          </p>

          {/* Tumip */}
          {/* <motion.div
            className="absolute w-12 h-12 top-[-30px] left-[26%]  -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: 0, duration: 0.3 }}
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <img src={tumip} alt="Carrot" className="w-full h-full" />
          </motion.div> */}

          {/* Eggplant */}
          {/* <motion.div/v> */}

          {/* Chili */}
          {/* <motion.div
            className="absolute w-12 h-12 bottom-[20%] right-[20%]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: 0, duration: 0.3 }}
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <img src={peas} alt="Chili" className="w-full h-full" />
          </motion.div> */}

          {/* Radish */}
          {/* <motion.div
            className="absolute w-12 h-12 top-[24%] right-[-10px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: 0, duration: 0.3 }}
            whileHover={{ scale: 1.3, rotate: -15 }}
          >
            <img src={carrot} alt="Radish" className="w-full h-full" />
          </motion.div>
        </div>
      </div>  */}

      {/* ribbon */}
      <div className="relative w-full h-[140px] overflow-visible bg-white">
        {/* Ribbon 1 - tilt left */}
        <div
          className="absolute left-1/2 mt-[-59px] top-1/2 w-[160%] h-10 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(-2deg)", // tilt to bottom-left
            animation: "ribbon-marquee 18s linear infinite",
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />

        {/* Ribbon 2 - tilt right */}
        <div
          className="absolute mt-[-40px] left-1/2 top-1/2 w-[160%] h-10 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(2deg)", // tilt to bottom-right
            animation: "ribbon-marquee 22s linear infinite reverse",
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />
      </div>

      <section className="bg-white py-16 mb-16 px-6">
        <h2 className="text-center font-lilita tracking-wide text-4xl md:text-6xl  text-[#C20000] mb-10">
          WHAT MAKES SAADA HALWAI BETTER?
        </h2>

        <div className="grid md:grid-cols-3 gap-4 text-center max-w-4xl mx-auto">
          <div>
            <img src={chopping} alt="Halwai" className="mx-auto w-26 h-26" />
            <h3 className="mt-4 text-xl font-lilita text-[#C20000]">
              HALWAI AT HEARTS
            </h3>
            <p className="mt-2 text-[#C20000] text-sm">
              We’re not just another caterer, we’re halwai by tradition, serving
              Britain with authentic desi soul.
            </p>
          </div>

          <div>
            <img src={cover} alt="Dish" className="mx-auto w-26 h-26" />
            <h3 className="mt-4 text-xl font-lilita  text-[#C20000]">
              PANI PURI TO POSH
            </h3>
            <p className="mt-2 text-[#C20000] text-sm">
              Street-style chaats, royal curries, and mithai magic all styled to
              impress UK weddings, events, and celebrations.
            </p>
          </div>

          <div>
            <img src={pan} alt="Stove" className="mx-auto w-26 h-26" />
            <h3 className="mt-4 text-xl font-lilita text-[#C20000]">
              HOT OFF THE STOVE
            </h3>
            <p className="mt-2 text-[#C20000] text-sm">
              Cooked fresh right here in the UK, so every bite carries the
              warmth of India without losing a minute of flavour.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Container */}

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <div className="flex items-center my-10 justify-center px-4">
        <div className="max-w-5xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-md">
          {/* Left Side */}
          <div className="bg-[#C20000] text-white p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-7xl font-lilita leading-tight md:leading-wide">
                WEDDING & EVENTS
              </h2>
              <p className="mt-3 text-xs md:text-sm leading-relaxed">
                From grand weddings to lively celebrations, Saada Halwai serves
                the soul of India with every plate. Think sizzling street-style
                chaats, rich royal curries, and decadent mithai, all crafted
                fresh in the UK to keep the flavour authentic and your guests
                smiling.
              </p>
            </div>

            <div className="flex items-baseline justify-between">
              {/* Custom Button */}
              <button className="font-lilita text-sm md:text-xl bg-white text-[#C20000] py-2 px-6 md:px-10 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                KNOW MORE
              </button>

              {/* Glasses Icon */}
              <div>
                <img src={wine} alt="Glasses" className="w-12 md:w-36" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
            <img
              src={WeddingsandEvents}
              alt="Wedding & Events"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center my-10 justify-center px-4">
        <div className="max-w-5xl flex flex-col md:flex-row-reverse rounded-xl overflow-hidden shadow-md">
          {/* Right Side (Red Content) */}
          <div className="bg-[#C20000] text-white p-6 md:w-1/2 flex flex-col justify-between">
            <div className="text-right">
              <h2 className="text-4xl md:text-7xl font-lilita leading-tight md:leading-wide">
                Corporate Events
              </h2>
              <p className="mt-3 text-xs md:text-sm leading-relaxed">
                Make your corporate events unforgettable with Saada Halwai. From
                vibrant chaats to rich curries and indulgent mithai, we serve
                authentic Indian flavours with a polished touch. Freshly cooked
                in the UK, our catering keeps guests impressed and conversations
                flowing.
              </p>
            </div>

            {/* Icon + Button separated */}
            <div className="flex items-baseline justify-between ">
              {/* Suit Icon (stays left) */}
              <img src={suit} alt="Suit" className="w-12 md:w-36" />

              {/* Button (moves right, below text) */}
              <button className="font-lilita text-sm md:text-xl pb-2 bg-white text-[#C20000] py-2 px-6 md:px-10 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Left Side (Black Image) */}
          <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
            <img
              src={CorporateEvents}
              alt="Wedding & Events"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center my-10 justify-center px-4">
        <div className="max-w-5xl flex flex-col md:flex-row rounded-xl overflow-hidden shadow-md">
          {/* Left Side */}
          <div className="bg-[#C20000] text-white p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-7xl font-lilita leading-tight md:leading-wide">
                Grab & GO
              </h2>
              <p className="mt-3 text-xs md:text-sm leading-relaxed">
                Perfect for busy days and hungry moments, Saada Halwai’s Grab &
                Go brings Indian flavours to your hands in minutes. From spicy
                chaats to hearty curries and sweet mithai, every bite is fresh,
                authentic, and ready when you are.
              </p>
            </div>

            <div className="flex items-baseline justify-between ">
              {/* Custom Button */}
              <button className="font-lilita text-sm md:text-xl bg-white text-[#C20000] py-2 px-6 md:px-10 rounded-lg shadow-lg transition-transform duration-10 ease-in-out transform hover:scale-105">
                KNOW MORE
              </button>

              {/* Glasses Icon */}
              <div>
                <img src={bag} alt="Glasses" className="w-12 md:w-36" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
            <img
              src={GrabandGo}
              alt="Wedding & Events"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* ribbon */}

      {/* ribbon */}
      <div className="relative  w-full h-[140px] overflow-visible bg-[#C20000]">
        {/* Ribbon 1 - tilt left */}
        <div
          className="absolute  left-1/2 mt-[-59px] top-1/2 w-[160%] h-10 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(-2deg)", // tilt to bottom-left
            animation: "ribbon-marquee 18s linear infinite",
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />

        {/* Ribbon 2 - tilt right */}
        <div
          className="absolute  mt-[-40px] left-1/2 top-1/2 w-[160%] h-10 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(2deg)", // tilt to bottom-right
            animation: "ribbon-marquee 22s linear infinite reverse",
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />
      </div>

      <section className="bg-[#C20000] mb-10 py-8 md:py-12 flex items-center justify-center">
        <div className="relative max-w-4xl w-full flex justify-center">
          {/* Cap image */}
          <img src={Cap} alt="cap shape" className="w-full max-w-4xl h-auto" />

          {/* Content inside cap */}
          <div className="absolute inset-6 md:inset-20 flex flex-col justify-between items-center px-3 sm:px-6 md:px-10 py-6 md:py-8 text-center">
            {/* Heading at top */}
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight font-lilita text-[#C20000] mb-4 md:mb-6">
              CURRY <br className="hidden sm:block" /> CONFESSIONS
            </h2>

            {/* Testimonial text in center */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex items-center justify-center"
              >
                <p
                  className="text-black 
             text-[10px] sm:text-xs md:text-base lg:text-lg 
             leading-snug sm:leading-relaxed 
             max-w-[85%] sm:max-w-md md:max-w-2xl 
             px-2 break-words text-center"
                >
                  {testimonials[index].text}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stars + Author + Location at bottom */}
            {/* Stars + Author + Location at bottom */}
<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.6 }}
    className="mt-4 md:mt-6"
  >
    <div className="flex justify-center mb-2 text-[#C20000] text-xs sm:text-base">
      {Array(testimonials[index].rating)
        .fill(0)
        .map((_, i) => (
          <FaStar key={i} className="mx-0.5" />
        ))}
    </div>
    <div className="flex flex-col items-center">
      <span className="text-[#C20000] text-sm sm:text-lg md:text-2xl font-extrabold uppercase">
        {testimonials[index].author}
      </span>
      <span className="text-black text-xs sm:text-base md:text-lg">
        {testimonials[index].location}
      </span>
    </div>
  </motion.div>
</AnimatePresence>

          </div>
        </div>
      </section>

      <section className="bg-[#C20000] text-white rounded-xl md:mx-auto mb-10 p-8 md:p-12 max-w-5xl mx-3 text-left">
        <p className="text-xl md:text-4xl font- mb-2">Let’s Chat</p>
        <h2 className="text-4xl md:text-7xl font-lilita leading-tight md:leading-wide mb-6">
          TELL US YOUR PLANS, <br className="hidden sm:block" />
          WE’LL BRING THE PANS
        </h2>
        <button
  className="btn-lift font-lilita text-sm md:text-xl bg-white text-[#C20000] py-2 px-6 md:px-10 rounded-lg shadow-md">
  <span className="btn-label">KNOW MORE</span>
</button>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
