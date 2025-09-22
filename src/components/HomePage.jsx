import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./HomePage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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
import Cap from "../assets/icons/Cap.svg";
import Img1 from "../assets/icons/Img1.jpg";
import Img2 from "../assets/icons/Img2.jpg";
import Img3 from "../assets/icons/Img3.jpg";
import Img4 from "../assets/icons/Img4.jpg";
import Img5 from "../assets/icons/Img5.jpg";
import Img6 from "../assets/icons/Img6.jpg";
import samosa from "../assets/icons/samosa.jpg";
import Call from "../assets/icons/Call.png";
import EmblaCarousel from "./carousel/EmblaCarousel";
import "./carousel/css/embla.css";

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
    align: "start", // This centers the active slide
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
  const yBrinjal = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rBrinjal = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const sBrinjal = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Peas
  const yPeas = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rPeas = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const sPeas = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Carrot
  const yCarrot = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rCarrot = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const sCarrot = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2800); // auto-slide every 2 sec
    return () => clearInterval(interval);
  }, []);

  const { scrollRef, inView } = useInView({
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#C20000]  text-white  overflow-hidden -mb-px">
        <div className="relative container mx-auto px-1 py-12 md:py-20 text-center">
          {/* Header Content */}
          <motion.div className="mx-auto md:mb-60 text-center">
            {/* H1 */}
            <motion.h1
              className="text-4xl font-barber md:text-8xl tracking-wide mb-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }} // smooth ease-out cubic
            >
              YOUR HALWAI'S IN TOWN
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-base md:text-lg text-red-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              Straight from the streets of India to your celebrations, every
              bite is cheeky, tasty, and made to impress. Ready to be served
              with flair.
            </motion.p>

            {/* Button */}
            <motion.button
              className="mt-6 mb-26 2xl:mb-48 bottom-6 sm:bottom-8 md:bottom-12 left-4 sm:left-6 md:left-12 whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl bg-white text-[#C20000] px-5 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              EXPLORE MENU
            </motion.button>
          </motion.div>

          {/* Mascot and Food Display Section */}
          <div className="relative mt-2 md:mt-24 2xl:mt-58">
            <div className=" absolute -top-23 md:-top-80 2xl:-top-95 left-1/2 -translate-x-1/2 z-20 w-48 md:w-[54%]">
              <img
                src={HalfCharacter}
                alt="Happy Halwai Mascot"
                className="z-0"
              />

              {/* Speech Bubble */}
              <div className="absolute top-2 md:top-8 2xl:top-14 -right-3 md:-right-3 2xl:-right-8 w-16 md:w-42 2xl:w-62">
                <div className="relative  ">
                  <img src={textthink} alt=""  className="bell-shiver"/>
                  <div className="absolute left-0 -bottom-2  transform rotate-45 -translate-x-2 "></div>
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
        <div className="font-barber relative inline-block my-6 text-center leading-snug text-2xl md:text-6xl 2xl:text-8xl">
          <p>
            WE KEEP IT REAL WITH VEGGIES <br />
            AS FRESH AS YOUR CRAVINGS, <br />
            SO EVERY DISH TASTES ALIVE.
          </p>

          {/* Turnip */}
          <motion.div
  style={{ y: yTurnip, rotate: rTurnip, scale: sTurnip }}
  className="absolute 
             top-1 sm:-top-8 md:-top-3 2xl:-top-8
             left-[21%] sm:left-[25%] md:left-[22%] 2xl:left-[22%] 
             -translate-x-1/2 
             w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"
  whileInView={{ scale: 1.1, rotate: 2 }}
>
  <img src={tumip} alt="Turnip" className="w-full h-full" />
</motion.div>

{/* Eggplant */}
<motion.div
  style={{ y: yBrinjal, rotate: rBrinjal, scale: sBrinjal }}
  className="absolute 
             bottom-1 sm:bottom-10 md:bottom-12
             left-4 sm:left-12 md:left-12 
             -translate-x-full 
             w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18"
  whileHover={{ scale: 1.1, rotate: 50 }}
>
  <img src={brinjal} alt="Eggplant" className="w-full h-full" />
</motion.div>

{/* Peas */}
<motion.div
  style={{ y: yPeas, rotate: rPeas, scale: sPeas }}
  className="absolute 
             bottom-4 sm:bottom-20 md:bottom-14 
             right-20 sm:right-20 md:right-50 lg:right-80 
             translate-x-full 
             w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
  whileHover={{ scale: 1.2, rotate: 20 }}
>
  <img src={peas} alt="Peas" className="w-full h-full" />
</motion.div>

{/* Carrot */}
<motion.div
  style={{ y: yCarrot, rotate: rCarrot, scale: sCarrot }}
  className="absolute 
             right-4 sm:right-8 md:right-12 lg:right-16 
             top-6 sm:top-12 md:top-16 
             translate-x-full -translate-y-1/2 
             w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24"
  whileHover={{ scale: 1.2, rotate: 2 }}
>
  <img src={carrot} alt="Carrot" className="w-full h-full" />
</motion.div>
        </div>
      </div>

      






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
        <motion.h2
          className="text-center font-barber tracking-wide text-4xl md:text-6xl 2xl:text-8xl text-[#C20000] mb-10"
          initial={{ y: -100, opacity: 0 }} // 👈 start above
          whileInView={{ y: 0, opacity: 1 }} // 👈 slide down into place
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // 👈 trigger once when 30% visible
        >
          WHAT MAKES SAADA HALWAI BETTER?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-14 text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ x: -150, opacity: 0 }} // 👈 start left
            whileInView={{ x: 0, opacity: 1 }} // 👈 slide into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // 👈 animate once when in view
          >
            <img src={chopping} alt="Halwai" className="mx-auto w-40 h-40" />
            <h3 className="mt-4 text-xl 2xl:text-3xl font-barber tracking-wide text-[#C20000]">
              HALWAI AT HEARTS
            </h3>
            <p className="mt-2 text-[#C20000] text-sm md:text-xl 2xl:text-2xl">
              We’re not just another caterer, we’re halwai by tradition, serving
              Britain with authentic desi soul.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 120, opacity: 0 }} // 👈 start below
            whileInView={{ y: 0, opacity: 1 }} // 👈 slide up into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // 👈 animate once when visible
          >
            <img src={cover} alt="Dish" className="mx-auto w-40 h-40" />
            <h3 className="mt-4 text-xl font-barber tracking-wide 2xl:text-3xl text-[#C20000]">
              PANI PURI TO POSH
            </h3>
            <p className="mt-2 text-[#C20000] text-sm md:text-xl 2xl:text-2xl">
              Street-style chaats, royal curries, and mithai magic all styled to
              impress UK weddings, events, and celebrations.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 150, opacity: 0 }} // 👈 start from right
            whileInView={{ x: 0, opacity: 1 }} // 👈 slide into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // 👈 animate once when visible
          >
            <img src={pan} alt="Stove" className="mx-auto w-40 h-40" />
            <h3 className="mt-4 text-xl 2xl:text-3xl font-barber tracking-wide text-[#C20000]">
              HOT OFF THE STOVE
            </h3>
            <p className="mt-2 text-[#C20000] text-sm md:text-xl 2xl:text-2xl">
              Cooked fresh right here in the UK, so every bite carries the
              warmth of India without losing a minute of flavour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Container */}
      <div className="relative">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </motion.div>
      </div>

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 2xl:py-16">
        <motion.div
          className="w-full md:w-[95%] lg:max-w-[84%] border-[5px] border-[#C20000] flex flex-col md:flex-row rounded-3xl md:rounded-[3rem] overflow-hidden shadow-md"
          initial={{ x: -200, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side */}
          <div className="bg-[#C20000] text-white p-6 sm:p-8 md:p-10 lg:p-12 2xl:p-14 flex flex-col justify-between md:w-1/2 h-auto md:h-[700px]">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-7xl 2xl:text-8xl font-barber leading-[1.2] md:leading-wide  text-center md:text-left">
                WEDDING & EVENTS
              </h2>
              <p className="mt-2 text-sm sm:text-base md:text-sm lg:text-base 2xl:text-[21px] leading-relaxed text-center md:text-left">
                From grand weddings to lively celebrations, Saada Halwai serves
                the soul of India with every plate. Think sizzling street-style
                chaats, rich royal curries, and decadent mithai, all crafted
                fresh in the UK to keep the flavour authentic and your guests
                smiling.
              </p>
            </div>

            {/* Button + Image with Reveal Animation */}
            <motion.div
              className="flex items-baseline justify-between mt-6 md:mt-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <button className="whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl bg-white text-[#C20000] px-5 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110">
                KNOW MORE
              </button>

              <img
                src={wine}
                alt="Glasses"
                className="w-[72px] sm:w-[120px] md:w-[144px] 2xl:w-[152px]"
              />
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-[700px] bg-black flex items-center justify-center">
            <img
              src={WeddingsandEvents}
              alt="Wedding & Events"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>



              <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 2xl:py-16">
        <motion.div
          className="w-full md:w-[95%] lg:max-w-[84%] border-[5px] border-[#C20000] flex flex-col md:flex-row-reverse rounded-3xl md:rounded-[3rem] overflow-hidden shadow-md"
          initial={{ x: 200, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side (Text + Button) */}
          <div className="bg-[#C20000] text-white p-6 sm:p-8 md:p-10 lg:p-12 2xl:p-12 flex flex-col justify-between md:w-1/2 h-auto md:h-[700px]">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-7xl 2xl:text-8xl font-barber leading-[1.2] md:leading-wide text-center md:text-right">
                Corporate Events
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-sm lg:text-base 2xl:text-[21px] leading-relaxed text-center md:text-right">
                Make your corporate events unforgettable with Saada Halwai. From
                vibrant chaats to rich curries and indulgent mithai, we serve
                authentic Indian flavours with a polished touch. Freshly cooked
                in the UK, our catering keeps guests impressed and conversations
                flowing.
              </p>
            </div>

            {/* Button + Suit Image */}
            <motion.div
              className="flex items-baseline justify-between mt-6 md:mt-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={suit}
                alt="Suit"
                className="w-[72px] sm:w-[152px] md:w-[144px] 2xl:w-[152px] 3xl:w-[136px]"
              />
              <button className="whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl bg-white text-[#C20000] px-5 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110">
                KNOW MORE
              </button>
            </motion.div>
          </div>

          {/* Right Side (Image) */}
          <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-[700px] bg-black flex items-center justify-center">
            <img
              src={CorporateEvents}
              alt="Corporate Events"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
      
     <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 2xl:py-16 2xl:mb-22">
        <motion.div
          className="w-full md:w-[95%] lg:max-w-[84%] border-[5px] border-[#C20000] flex flex-col md:flex-row rounded-3xl md:rounded-[3rem] overflow-hidden shadow-md"
          initial={{ x: -200, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side (Text + Button + Bag) */}
          <div className="bg-[#C20000] text-white p-6 sm:p-8 md:p-10 lg:p-12 2xl:p-12 flex flex-col justify-start md:w-1/2 h-auto md:h-[700px] relative">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-7xl 2xl:text-8xl font-barber leading-[1.2] md:leading-wide text-center md:text-left">
                Grab & GO
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-sm lg:text-base 2xl:text-[21px] leading-relaxed text-center md:text-left mb-32 sm:48">
                Perfect for busy days and hungry moments, Saada Halwai’s Grab &
                Go brings Indian flavours to your hands in minutes. From spicy
                chaats to hearty curries and sweet mithai, every bite is fresh,
                authentic, and ready when you are.
              </p>
            </div>

            {/* Button fixed bottom-left */}
            <motion.button
              className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-4 sm:left-6 md:left-12 whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl bg-white text-[#C20000] px-5 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              KNOW MORE
            </motion.button>

            {/* Bag image fixed bottom-right */}
            <motion.img
              src={bag}
              alt="Bag"
              className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-4 sm:right-6 md:right-12 w-[72px] sm:w-[152px] md:w-[144px] 2xl:w-[152px] 3xl:w-[136px]"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Right Side (Main Image) */}
          <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-[700px] bg-black flex items-center justify-center">
            <img
              src={GrabandGo}
              alt="Grab & Go"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>


      {/* ribbon */}

      {/* ribbon */}
      <div className="relative  w-full h-[140px] overflow-visible bg-[#C20000] -mb-px">
        {/* Ribbon 1 - tilt left */}
        <div
          className="absolute  left-1/2 mt-[-59px] top-1/2 w-[360%] h-6 2xl:h-18 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
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
          className="absolute  mt-[-40px] left-1/2 top-1/2 w-[360%] h-6 2xl:h-18 -translate-x-1/2 -translate-y-1/2 bg-repeat-x"
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

      <section className="bg-[#C20000]  py-8 md:pt-12 md:pb-36 flex items-center justify-center">
        <div className="relative max-w-4xl w-full flex justify-center">
          {/* Cap image */}
          <img
            src={Cap}
            alt="cap shape"
            className="w-full max-w-4xl h-auto animate-slow-spin"
            style={{ animation: "spin 40s linear infinite" }}
          />

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

      <motion.section
        className="w-[95%] md:max-w-[80%] bg-[#C20000] text-white rounded-[3rem] flex flex-col md:flex-row items-stretch justify-between mx-auto overflow-hidden my-16 md:my-32"
        initial={{ y: 150, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side (Text + Button) */}
        <div className="flex-1 py-10 text-center md:text-left md:ml-12 relative">
          <div>
            <p className="text-xl md:text-5xl md:mb-6 mb-6">LET’S CHAT</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-8xl font-barber md:leading-[1.2] text-center md:text-left mb-6">
              TELL US YOUR PLANS, <br />
              WE’LL BRING THE PANS
            </h2>
          </div>

          {/* Button fixed bottom-left on desktop, centered on mobile */}
          <motion.button
            className="absolute md:bottom-12 md:left-22 left-1/2 transform -translate-x-1/2 md:transform-none whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl bg-white text-[#C20000] px-5 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            CALL US
          </motion.button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/3 w-3/4 md:h-[640px] h-[320px] pr-4 sm:pr-6 md:pr-12 flex justify-center md:justify-center items-center md:items-end mt-4">
          <img
            src={Call}
            alt="Chef Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default HomePage;
