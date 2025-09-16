import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
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
import Img1 from "../assets/icons/Img1.jpg";
import Img2 from "../assets/icons/Img2.jpg";
import Img3 from "../assets/icons/Img3.jpg";
import Img4 from "../assets/icons/Img4.jpg";
import Img5 from "../assets/icons/Img5.jpg";
import Img6 from "../assets/icons/Img6.jpg";
import samosa from "../assets/icons/samosa.jpg";
import Call from "../assets/icons/Call.png";
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
    text: "For our corporate Diwali celebration, Saada Halwai was the perfect partner. They managed to cater for a large crowd without compromising on authenticity or presentation. From the samosas to the mithai, everything had that unmistakable homemade taste that reminded so many of us of festivals back in India. What impressed us most was how professionally their team handled the event, keeping everything running smoothly while still making us feel like family. The positive feedback from our colleagues has been overwhelming, and many said it was the best food they’ve had at a company event. Saada Halwai brought the spirit of Diwali to life",
    author: "MEERA & VIKRAM",
    location: "BIRMINGHAM",
    rating: 5,
  },
];

const HomePage = () => {
  const SLIDES = [
  { src: Img1, alt: "Weddings and Events" },
  { src: Img2, alt: "Weddings and Events" },
  { src: Img3, alt: "Weddings and Events" },
  { src: Img4, alt: "Weddings and Events" },
  { src: Img5, alt: "Weddings and Events" },
  { src: Img6, alt: "Weddings and Events" },
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
  const yTurnip = useTransform(scrollYProgress, [0, 1], [-30, -30]);
  const rTurnip = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const sTurnip = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Brinjal
  const yBrinjal = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const rBrinjal = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const sBrinjal = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Peas
  const yPeas = useTransform(scrollYProgress, [0, 1], [30, -40]);
  const rPeas = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const sPeas = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // Carrot
  const yCarrot = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rCarrot = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const sCarrot = useTransform(scrollYProgress, [0, 1], [1, 1.2]);


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2800); // auto-slide every 2 sec
    return () => clearInterval(interval);
  }, []);

  const { scrollRef , inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // start animation when 30% visible
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // animate children one by one
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#C20000]  text-white  overflow-hidden">
        <div className="relative container mx-auto px-1 py-12 md:py-20 text-center">
  {/* Header Content */}
    <motion.div className="mx-auto md:mb-60 text-center">
  {/* H1 */}
  <motion.h1
    className="text-4xl font-barber md:text-8xl tracking-wide mb-3"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} // smooth ease-out cubic
  >
    YOUR HALWAI'S IN TOWN
  </motion.h1>

  {/* Paragraph */}
  <motion.p
    className="text-base md:text-lg text-red-100"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
  >
    Straight from the streets of India to your celebrations, every bite is cheeky, tasty, and made to impress. Ready to be served with flair.
  </motion.p>

  {/* Button */}
  <motion.button
    className="mt-6 mb-26 2xl:mb-48 font-lilita text-lg md:text-2xl 2xl:text-4xl bg-white text-[#C20000] py-2 px-10 md:px-10 rounded-3xl shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110"
    initial={{ opacity: 0, y: 20, scale: 0.99 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
  >
    EXPLORE MENU
  </motion.button>
</motion.div>


         
          {/* Mascot and Food Display Section */}
          <div className="relative mt-2 md:mt-24 2xl:mt-58">
            <div className=" absolute -top-23 md:-top-80 2xl:-top-93 left-1/2 -translate-x-1/2 z-20 w-48 md:w-[54%]">
            <img
              src={HalfCharacter}
              alt="Happy Halwai Mascot"
              className="z-0"
            />


              {/* Speech Bubble */}
              <div className="absolute top-2 md:top-8 2xl:top-14 -right-3 md:-right-3 2xl:-right-8 w-16 md:w-42 2xl:w-62">
                <div className="relative  ">
                  <img src={textthink} alt="" />
                  <div className="absolute left-0 -bottom-2  transform rotate-45 -translate-x-2"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 md:-top-10 left-1/2 -translate-x-[300%] md:-translate-x-[390%] z-50">
              <img src={Hand} alt="Hand" className="w-11 md:w-30" />
            </div>
            <div className="absolute -top-4 md:-top-10 left-1/2 translate-x-[200%] md:translate-x-[310%] z-50">
              <img src={HandRight} alt="Hand" className="w-11 md:w-29" />
            </div>

            {/* White background card for food */}
            {/* <div className="absolute  md:pt-28 pb-10 shadow-2xl z-10"> */}
<div className="relative z-30 px-4 md:px-6 2xl:px-0 ">
  <img
    src={samosa}
    alt="Display of various Indian sweets and chaat dishes"
    className="w-full object-cover object-center rounded-[2rem] shadow-lg mx-auto"
  />




              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="pt-6 2xl:pt-28 2xl:pb-38 flex items-center justify-center bg-[#C20000] text-white p-2 pb-10"
      >
        <div className="font-barber relative inline-block my-6 text-center leading-snug text-2xl md:text-8xl">
          <p>
            WE KEEP IT REAL WITH VEGGIES <br />
            AS FRESH AS YOUR CRAVINGS, <br />
            SO EVERY DISH TASTES ALIVE.
          </p>

          {/* Turnip */}
          <motion.div
            style={{ y: yTurnip, rotate: rTurnip, scale: sTurnip }}
            className="absolute -top-6 left-[23%] -translate-x-1/2 w-12 h-12 md:w-22 md:h-22"
            whileHover={{ scale: 1.4, rotate: 0 }}
          >
            <img src={tumip} alt="Turnip" className="w-full h-full" />
          </motion.div>

          {/* Eggplant */}
          <motion.div
            style={{ y: yBrinjal, rotate: rBrinjal, scale: sBrinjal }}
            className="absolute bottom-0 md:bottom-18 left-9 -translate-x-full w-10 h-10 md:w-18 md:h-18"
            whileHover={{ scale: 1.4, rotate: 50 }}
          >
            <img src={brinjal} alt="Eggplant" className="w-full h-full" />
          </motion.div>

          {/* Peas */}
          <motion.div
            style={{ y: yPeas, rotate: rPeas, scale: sPeas }}
            className="absolute bottom-19 right-80 translate-x-full w-12 h-12 md:w-20 md:h-20"
            whileHover={{ scale: 1.4, rotate: 20 }}
          >
            <img src={peas} alt="Peas" className="w-full h-full" />
          </motion.div>

          {/* Carrot */}
          <motion.div
            style={{ y: yCarrot, rotate: rCarrot, scale: sCarrot }}
            className="absolute right-10 top-20 translate-x-full -translate-y-1/2 w-12 h-12 md:w-24 md:h-24"
            whileHover={{ scale: 1.4, rotate: 2 }}
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
          className="absolute left-1/2  mt-[-59px] top-1/2 w-[360%]  h-6 2xl:h-16 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(-2deg)", // tilt to bottom-left
            animation: "ribbon-marquee 18s linear infinite",
            filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />

        {/* Ribbon 2 - tilt right */}
        <div
          className="absolute mt-[-40px] left-1/2 top-1/2 w-[360%] h-6 2xl:h-16 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(2deg)", // tilt to bottom-right
            animation: "ribbon-marquee 22s linear infinite reverse",
            filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />
      </div>

      <section className="bg-white sm:py-6 2xl:py-16 mb-16 px-6">
        <h2 className="text-center font-barber tracking-wide text-4xl md:text-6xl 2xl:text-7xl  text-[#C20000] mb-10">
          WHAT MAKES SAADA HALWAI BETTER?
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          <div>
            <img src={chopping} alt="Halwai" className="mx-auto w-26 h-26" />
            <h3 className="mt-4 text-xl 2xl:text-2xl font-barber tracking tracking-wide text-[#C20000]">
              HALWAI AT HEARTS
            </h3>
            <p className="mt-2 text-[#C20000] text-sm md:text-xl">
              We’re not just another caterer, we’re halwai by tradition, serving
              Britain with authentic desi soul.
            </p>
          </div>

          <div>
            <img src={cover} alt="Dish" className="mx-auto w-26 h-26" />
            <h3 className="mt-4 text-xl 2xl:text-2xl font-barber tracking tracking-wide text-[#C20000]">
              PANI PURI TO POSH
            </h3>
            <p className="mt-2 text-[#C20000] text-sm md:text-xl">
              Street-style chaats, royal curries, and mithai magic all styled to
              impress UK weddings, events, and celebrations.
            </p>
          </div>

          <div>
            <img src={pan} alt="Stove" className="mx-auto w-26 h-26" />
            <h3 className="mt-4 text-xl 2xl:text-2xl font-barber tracking tracking-wide text-[#C20000]">
              HOT OFF THE STOVE
            </h3>
            <p className="mt-2 text-[#C20000] text-sm md:text-xl">
              Cooked fresh right here in the UK, so every bite carries the
              warmth of India without losing a minute of flavour.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Container */}
          <div className="relative">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    <EmblaCarousel
       slides={SLIDES} options={OPTIONS} />
  </motion.div>
</div>
      

      <div className="flex items-center justify-center px-2 my-10 md:my-20 2xl:my-50">
  <div className="w-[95%] md:max-w-[84%] border-5 border-[#C20000] flex flex-col md:flex-row rounded-3xl md:rounded-[3rem] overflow-hidden shadow-md 2xl:h-[700px]">
    
    {/* Left Side */}
    <div className="bg-[#C20000] text-white p-6 sm:p-8 md:p-10 2xl:p-10 md:w-1/2 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl font-barber leading-tight md:leading-wide text-center md:text-left">
          WEDDING & EVENTS
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-sm 2xl:text-lg leading-relaxed text-center md:text-left">
          From grand weddings to lively celebrations, Saada Halwai serves
          the soul of India with every plate. Think sizzling street-style
          chaats, rich royal curries, and decadent mithai, all crafted
          fresh in the UK to keep the flavour authentic and your guests
          smiling.
        </p>
      </div>

      {/* Button + Icon */}
      <div className="flex flex-row md:flex-row items-center justify-between mt-6 md:mt-0 md:space-y-0">
        {/* Custom Button */}
        <button className="2xl:mt-40 font-lilita text-lg sm:text-xl md:text-2xl 2xl:text-4xl bg-white text-[#C20000] py-2 px-8 sm:px-10 md:px-8 2xl:px-12 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
          KNOW MORE
        </button>

        {/* Glasses Icon */}
        <div>
          <img src={wine} alt="Glasses" className="w-18 sm:w-14 md:w-36 2xl:w-46" />
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


      <div className="flex items-center my-10 2xl:mb-50 justify-center px-4">
  <div className="w-[99%] md:max-w-[84%] border-5 border-[#C20000] flex flex-col md:flex-row-reverse rounded-3xl md:rounded-[3rem] overflow-hidden shadow-md 2xl:h-[700px]">
    
    {/* Right Side (Red Content) */}
    <div className="bg-[#C20000] text-white p-6 sm:p-8 md:p-10 2xl:p-10 md:w-1/2 flex flex-col justify-between">
      <div className="text-center md:text-right">
        <h2 className="text-3xl sm:text-4xl md:text-7xl 2xl:text-8xl font-barber leading-tight md:leading-wide">
          Corporate Events
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-sm 2xl:text-lg leading-relaxed">
          Make your corporate events unforgettable with Saada Halwai. From
          vibrant chaats to rich curries and indulgent mithai, we serve
          authentic Indian flavours with a polished touch. Freshly cooked
          in the UK, our catering keeps guests impressed and conversations
          flowing.
        </p>
      </div>

      {/* Icon + Button */}
      <div className="flex flex-row md:flex-row items-center md:items-baseline justify-between mt-6 md:mt-0 md:space-y-0">
        {/* Suit Icon */}
        <img src={suit} alt="Suit" className="w-18 sm:w-38 md:w-36 2xl:w-46" />

        {/* Button */}
        <button className="font-lilita text-lg sm:text-xl md:text-2xl 2xl:text-4xl bg-white text-[#C20000] py-2 px-[15%] sm:px-10 md:px-8 2xl:px-12 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
          KNOW MORE
        </button>
      </div>
    </div>

    {/* Left Side (Black Image) */}
    <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
      <img
        src={CorporateEvents}
        alt="Corporate Events"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</div>




     <div className="flex items-center my-10 2xl:my-30 justify-center px-4">
  <div className="w-[99%] md:max-w-[84%] border-5 border-[#C20000] flex flex-col md:flex-row rounded-3xl md:rounded-[3rem] overflow-hidden shadow-md 2xl:h-[700px]">
    
    {/* Left Side */}
    <div className="bg-[#C20000] text-white p-6 sm:p-8 md:p-10 2xl:p-10 md:w-1/2 flex flex-col justify-between">
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl font-barber leading-tight md:leading-wide">
          Grab & GO
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-sm 2xl:text-lg leading-relaxed">
          Perfect for busy days and hungry moments, Saada Halwai’s Grab & Go
          brings Indian flavours to your hands in minutes. From spicy chaats
          to hearty curries and sweet mithai, every bite is fresh, authentic,
          and ready when you are.
        </p>
      </div>

      {/* Button + Icon */}
      <div className="flex flex-row md:flex-row items-center justify-between mt-6 md:mt-0 md:space-y-0">
        {/* Custom Button */}
        <button className="2xl:mt-52 font-lilita text-lg sm:text-xl md:text-2xl 2xl:text-4xl bg-white text-[#C20000] py-2 px-8 sm:px-10 md:px-8 2xl:px-12 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
          KNOW MORE
        </button>

        {/* Bag Icon */}
        <div>
          <img src={bag} alt="Bag" className="w-18 sm:w-14 md:w-36 2xl:w-46" />
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
      <img
        src={GrabandGo}
        alt="Grab & Go"
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
          className="absolute  left-1/2 mt-[-59px] top-1/2 w-[360%] h-6 2xl:h-16 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(-2deg)", // tilt to bottom-left
            animation: "ribbon-marquee 18s linear infinite",
            filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.25))",
            willChange: "background-position",
          }}
        />

        {/* Ribbon 2 - tilt right */}
        <div
          className="absolute  mt-[-40px] left-1/2 top-1/2 w-[360%] h-6 2xl:h-16 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
          style={{
            backgroundImage: `url(${ribbon})`,
            backgroundSize: "auto 100%",
            transform: "rotate(2deg)", // tilt to bottom-right
            animation: "ribbon-marquee 22s linear infinite reverse",
            filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.25))",
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
            <h2 className="text-2xl sm:text-3xl md:text-7xl 2xl:text-8xl leading-tight font-barber text-[#C20000]">
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
                <div className="flex justify-center  text-[#C20000] text-xs sm:text-base">
                  {Array(testimonials[index].rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="mx-0.5" />
                    ))}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[#C20000] 2xl:m-2 font-barber text-sm sm:text-lg md:text-3xl  uppercase">
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

    <section className="w-[95%] md:max-w-[80%] bg-[#C20000] text-white rounded-[3rem] flex flex-col md:flex-row items-stretch justify-between mx-auto overflow-hidden my-16 md:my-32">
  {/* Left Side */}
  <div className="flex-1 px-6 py-10 text-center md:text-left md:pl-20">
    <p className="text-xl md:text-5xl my-7">LET’S CHAT</p>
    <h2 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl font-barber ">
      TELL US YOUR PLANS, <br />
      WE’LL BRING THE PANS
    </h2>

    <button className="mt-8 2xl:mt-56 md:mt-24 ml-0 md:ml-12 2xl:ml-8 font-lilita text-lg md:text-2xl 2xl:text-4xl bg-white text-[#C20000] py-2 px-8 md:px-12 2xl:px-20 rounded-2xl 2xl:rounded-[1rem] shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
      CALL US
    </button>
  </div>

  {/* Right Side Image */}
  <div className="flex-shrink-0 flex justify-center md:justify-end items-end mt-2 md:mt-0 2xl:mt-6  2xl:pr-8">
    <img
      src={Call} // replace with your actual image path
      alt="Chef Illustration"
      className="w-[200px] sm:w-[260px] md:w-[360px] lg:w-[550px] object-contain"
    />
  </div>
</section>






{/* <section className="2xl:max-w-[80%] bg-[#C20000] text-white rounded-[3rem] md:mx-auto my-30 p-8 md:p-12 mx-3">
  <div className="flex flex-col md:flex-row justify-between">

    <div className="text-left flex-1 md:pr-6">
      <p className="text-xl md:text-5xl mb-2">Let’s Chat</p>
      <h2 className="text-4xl 2xl:mb-42 md:text-8xl font-barber leading-tight md:leading-wide mb-6">
        TELL US YOUR PLANS, <br className="hidden sm:block" />
        WE’LL BRING THE PANS
      </h2>
      <button className="font-lilita text-lg md:text-2xl 2xl:text-4xl bg-white text-[#C20000] py-2 px-10 md:px-12 2xl:px-16 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
        CALL US
      </button>
    </div>


    <div className="pb-0 flex-shrink-0 self-end">
      <img src={Call} alt="calling" className="w-28 md:w-40 lg:w-70 2xl:w-130" />
    </div>
  </div>
</section> */}




      <Footer />
    </>
  );
};

export default HomePage;
