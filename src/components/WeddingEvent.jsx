import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Footer from "./Footer";

// Replace with your actual paths
import bookIcon from "../assets/icons/Calender.svg";
import ringIcon from "../assets/icons/Ring.svg";
import wed from "../assets/icons/WeddingsandEvents.jpg";

import carrotIcon from "../assets/icons/carrot.svg";
import eggplantIcon from "../assets/icons/brinjal.svg";
import leafIcon from "../assets/icons/tumip.svg";
import chiliIcon from "../assets/icons/peas.svg";
import Dhol from "../assets/icons/Dhol.png";
import border from "../assets/icons/Border.svg";
import ChatBorderIcon from "../assets/icons/ChatBorderIcon.svg";
import Menuborder from "../assets/icons/Menu Border Icon_1 1.svg";
import menuborder from "../assets/icons/MenuBorderIcon.svg";
import TestimonialCarousel from "./carousel/TestimonialCarousel";
import Call from "../assets/icons/Call.png";


import photo1 from "../assets/icons/photo-1.jpg";
import photo2 from "../assets/icons/photo-2.jpeg";
import photo3 from "../assets/icons/photo-3.jpeg";
import photo4 from "../assets/icons/photo-4.jpeg";
import photo5 from "../assets/icons/photo-5.jpeg";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: "Sadda Halwai turned our wedding into a feast to remember! Every dish was bursting with authentic flavors...",
    author: "Ananya & Rohan Mehta",
    location: "Delhi",
  },
   {
    text: "Sadda Halwai turned our wedding into a feast to remember! Every dish was bursting with authentic flavors...",
    author: "Ananya & Rohan Mehta",
    location: "Delhi",
  },
   {
    text: "Sadda Halwai turned our wedding into a feast to remember! Every dish was bursting with authentic flavors...",
    author: "Ananya & Rohan Mehta",
    location: "Delhi",
  },
  {
    text: "The attention to detail was unmatched. Our guests kept coming back for into a feast to remember! Every dish was seconds...",
    author: "Karan & Naina",
    location: "Mumbai",
  },
  {
    text: "They didn’t just serve food, they created memories. into a feast to remember! Every dish was Truly a special experience...",
    author: "Simran & Arjun",
    location: "London",
  },
];


const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // approx 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const WeddingEvent = () => {

    const photos = [
    "", // put image link here
    "", // put image link here
    "", // put image link here
    "", // put image link here
    "", // put image link here
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });


  const [active, setActive] = useState("MITHAAS");
  const buttons = ["OCCASION", "MITHAAS", "MEMORIES"];

  // ✅ Add ref for Section 2 (Dhol image)
  const sectionRef = useRef(null);

  // ✅ Track scroll progress relative to sectionRef
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // when section enters and leaves viewport
  });

  // Dhol animation
  const yDhol = useTransform(scrollYProgress, [0, 1], [30, -50]);

  // Book animation
  const yBook = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rBook = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const sBook = useTransform(scrollYProgress, [0, 1], [1, 1.07]);

  // Ring animation
  const yRing = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rRing = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const sRing = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Leaf animation
  const yLeaf = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rLeaf = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const sLeaf = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Chili animation
  const yChili = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rChili = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const sChili = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Eggplant animation
  const yEggplant = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rEggplant = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const sEggplant = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Carrot animation
  const yCarrot = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rCarrot = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const sCarrot = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>

      {/* SECTION 1 */}
      <section className="bg-[#C20000] text-white overflow-hidden -mb-px">
        <div className="relative container mx-auto px-2 sm:px-4 py-12 md:py-20 text-center">
          {/* Buttons */}
          <motion.div
            className="font-lilita flex flex-wrap justify-center gap-3 sm:gap-5 mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          >
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => setActive(btn)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 transform ${
                  active === btn
                    ? "bg-white text-[#C20000] scale-110"
                    : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#C20000]"
                }`}
              >
                {btn}
              </button>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-barber tracking-wide mb-3 leading-snug"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            PARTIES THAT TASTE
            <br className="hidden sm:block" />
            <span className="relative inline-flex flex-wrap items-center justify-center gap-2 mt-2 text-center">
              <motion.img
                src={bookIcon}
                alt="Book"
                style={{ y: yBook, rotate: rBook, scale: sBook }}
                className="block w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
                whileHover={{ scale: 1.12, rotate: -15 }}
              />
              <span>LIKE</span>
              <span>HOMES</span>
              <motion.img
                src={ringIcon}
                alt="Ring"
                style={{ y: yRing, rotate: rRing, scale: sRing }}
                className="block w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
                whileHover={{ scale: 1.15, rotate: 15 }}
              />
            </span>
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2 - Dhol */}
      {/* <section ref={sectionRef} className="bg-[#C20000] -mt-18 sm:-mt-30 lg:-mt-35 2xl:-mt-35">
        <div className="container mx-auto px-4">
          <motion.img
            src={Dhol}
            alt="Centered PNG"
            className="mx-auto w-26 sm:w-36 md:w-42 lg:w-48 2xl:w-76 object-contain"
            style={{ y: yDhol }}
          />
        </div>
      </section> */}
      <section
  ref={sectionRef}
  className="bg-[#C20000] -mt-18 sm:-mt-30 lg:-mt-35 2xl:-mt-35"
>
  <div className="container mx-auto px-4">
    <motion.img
      src={Dhol}
      alt="Centered PNG"
      className="mx-auto w-26 sm:w-36 md:w-42 lg:w-48 2xl:w-76 object-contain"
      animate={{ y: [0, -20, 0] }} // moves up and back
      transition={{
        duration: 2, // total cycle time
        repeat: Infinity, // keeps looping
        ease: "easeInOut", // smooth movement
      }}
    />
  </div>
</section>


      {/* SECTION 3 */}
<section className="relative py-10 -mt-0.5 z-10">
  {/* Half red, half white background */}
  <div className="absolute inset-0 h-full w-full">
    <div className="h-1/2 bg-[#C20000]"></div>  {/* top half red */}
    <div className="h-1/2 bg-white"></div>      {/* bottom half white */}
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-20">
    <div className="overflow-hidden shadow-xl rounded-full max-w-[90%] mx-auto">
      <div className="relative w-full aspect-[1637/623]">
        <img
          src={wed}
          alt="Buffet"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>



      {/* SECTION 4 */}
      <div className="bg-white text-[#C20000] overflow-hidden -mb-px">
        <div className="relative container mx-auto px-2 py-12 md:py-20 text-center">
          <motion.h1
            className="font-barber relative my-6 leading-snug text-center text-2xl sm:text-4xl md:text-6xl 2xl:text-8xl tracking-wide mb-3 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            <span className="flex flex-wrap justify-center items-center gap-2">
              FRESHNESS
              <motion.img
                src={leafIcon}
                alt="Leaf"
                style={{ y: yLeaf, rotate: rLeaf, scale: sLeaf }}
                className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                whileHover={{ scale: 1.15, rotate: -15 }}
              />
              IS OUR SECRET SPICE,
              <motion.img
                src={chiliIcon}
                alt="Chili"
                style={{ y: yChili, rotate: rChili, scale: sChili }}
                className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                whileHover={{ scale: 1.15, rotate: 15 }}
              />
            </span>
            <span className="flex flex-wrap justify-center items-center gap-2">
              <motion.img
                src={eggplantIcon}
                alt="Eggplant"
                style={{ y: yEggplant, rotate: rEggplant, scale: sEggplant }}
                className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                whileHover={{ scale: 1.15, rotate: -10 }}
              />
              STRAIGHT FROM FARM
              <motion.img
                src={carrotIcon}
                alt="Carrot"
                style={{ y: yCarrot, rotate: rCarrot, scale: sCarrot }}
                className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                whileHover={{ scale: 1.15, rotate: 0 }}
              />
              TO PLATE
            </span>
          </motion.h1>
        </div>
      </div>




{/* Top Border (flipped) */}
<motion.section
  className="my-16"
  initial={{ opacity: 1, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <img
    src={border}
    alt="top border"
    className="w-full rotate-180 -my-0.5"
  />

  {/* Main Section */}
  <div className="bg-[#C20000] text-white py-20 px-4 text-center">
    <h2 className="font-barber tracking-wider text-4xl md:text-6xl 2xl:text-8xl font-bold mb-2">
      NUMBERS THAT TELL OUR STORY
    </h2>
    <p className="text-sm md:text-xl 2xl:text-2xl mb-10">
      Every celebration we cater is more than just food—it’s memories, <br />
      milestones, and moments we’re proud to share.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      {/* Plates Served */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-5xl md:text-6xl font-barber leading-tight">
          <Counter target={10000} duration={1500} />
        </div>
        <p className="mt-3 text-base md:text-xl font-barber tracking-wide">
          PLATES SERVED
        </p>
      </motion.div>

      {/* Weddings & Events */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-5xl md:text-6xl font-barber leading-tight">
          <Counter target={500} duration={1500} />
        </div>
        <p className="mt-3 text-base md:text-xl font-barber tracking-wide">
          WEDDINGS & EVENTS
        </p>
      </motion.div>

      {/* Happy Guests */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-5xl md:text-6xl font-barber leading-wider">
          <Counter target={5000} duration={1500} />
        </div>
        <p className="mt-3 text-base md:text-xl font-barber tracking-wide">
          HAPPY GUESTS
        </p>
      </motion.div>
    </div>
  </div>

  {/* Bottom Border (normal) */}
  <img
    src={border}
    alt="bottom border"
    className="w-full -my-0.5"
  />
</motion.section>



<motion.div
  className="w-full bg-white py-16 my-16 flex flex-col items-center text-center"
  initial={{ opacity: 1, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Heading */}
  <h2 className="text-[#C20000] font-barber tracking-wider text-4xl md:text-6xl 2xl:text-8xl font-bold mb-2">
    WHERE CELEBRATIONS SHINE
  </h2>
  <p className="text-[#C20000] text-sm md:text-xl 2xl:text-2xl mb-10">
    A little peek at the parties we’ve sprinkled with mithas. <br />
    Because memories taste better when shared.
  </p>
  {/* Wire + Hanging Photos */}
  <div className="relative w-full flex justify-center">
    {/* Curved wire (responsive) */}
    <svg
      className="absolute top-0 left-0 w-full"
      height="120"
      viewBox="0 0 100 120"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0 Q50 100 100 0"
        stroke="#C20000"
        strokeWidth="4"
        fill="transparent"
      />
    </svg>

    {/* Hanging squares */}
    <div className="flex w-full justify-between relative z-10 mt-12 px-4 md:px-0">
      {/* 1st square */}
      <div
        className="hidden md:block relative w-24 h-28 md:w-60 md:h-60 bg-[#C20000] rounded-lg md:-top-4 2xl:-top-7"
        style={{ transform: "rotate(6deg)" }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 md:w-3 h-6 md:h-9 bg-[#C20000] rounded-sm"></div><img
        src={photo1}
        alt="Photo 5"
        className="w-full h-full border-2 border-[#C20000] rounded-lg object-cover"
      />
      </div>

      {/* 2nd square */}
      <div
        className="relative w-24 h-28 md:w-60 md:h-60 bg-[#C20000] rounded-lg md:top-1 2xl:top-1 -top-2"
        style={{ transform: "rotate(3deg)" }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 md:w-3 h-6 md:h-9 bg-[#C20000] rounded-sm"></div>
        <img
        src={photo2}
        alt="Photo 5"
        className="w-full h-full border-2 border-[#C20000] rounded-lg object-cover"
      />
      </div>

      {/* 3rd square */}
      <div
        className="relative w-24 h-28 md:w-60 md:h-60 bg-[#C20000] rounded-lg md:top-2 2xl:top-2 top-2"
        style={{ transform: "rotate(0deg)" }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 md:w-3 h-6 md:h-9 bg-[#C20000] rounded-sm"></div>
        <img
        src={photo3}
        alt="Photo 5"
        className="w-full h-full border-2 border-[#C20000] rounded-lg object-cover"
      />
      </div>

      {/* 4th square */}
      <div
        className="relative w-24 h-28 md:w-60 md:h-60 bg-[#C20000] rounded-lg md:top-1 2xl:top-0 -top-2"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 md:w-3 h-6 md:h-9 bg-[#C20000] rounded-sm"></div>
        <img
        src={photo4}
        alt="Photo 5"
        className="w-full h-full border-2 border-[#C20000] rounded-lg object-cover"
      />
      </div>

      {/* 5th square */}
      <div
        className="hidden md:block relative w-24 h-28 md:w-60 md:h-60 bg-[#C20000] rounded-lg md:-top-4 2xl:-top-7"
        style={{ transform: "rotate(-6deg)" }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 md:w-3 h-6 md:h-9 bg-[#C20000] rounded-sm"></div>
        <img
        src={photo5}
        alt="Photo 5"
        className="w-full h-full border-2 border-[#C20000] rounded-lg object-cover"
      />
      </div>
    </div>
  </div>
</motion.div>







 <motion.div
  className="bg-[#C20000] text-white rounded-[3rem] px-6 sm:px-10 max-w-8xl mx-4 2xl:mx-20 text-center py-16 my-16"
  initial={{ y: 150, opacity: 1 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-barber mb-10">
    HOW TO GET YOUR HALWAI FIX
  </h2>

  {/* Grid Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
    {/* Pick Your Feast */}
    <div className="flex flex-col items-center space-y-6">
      <img
        src={Menuborder}
        alt="Pick Your Feast"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
      />
      <h3 className="font-barber text-lg sm:text-xl md:text-2xl">
        PICK YOUR FEAST
      </h3>
      <p className="text-sm sm:text-base leading-relaxed max-w-xs">
        Browse through our menu full of chaats, curries, and mithais. Think of
        it as your ticket to India, plated fresh in the UK.
      </p>
    </div>

    {/* Share Your Details */}
    <div className="flex flex-col items-center space-y-6">
      <img
        src={ChatBorderIcon}
        alt="Share Your Details"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
      />
      <h3 className="font-barber text-lg sm:text-xl md:text-2xl">
        SHARE YOUR DETAILS
      </h3>
      <p className="text-sm sm:text-base leading-relaxed max-w-xs">
        From guest count to venue vibes, just spill the beans. We’ll tailor the
        spread so it feels made just for you.
      </p>
    </div>

    {/* Sit Back & Savour */}
    <div className="flex flex-col items-center space-y-6">
      <img
        src={menuborder}
        alt="Sit Back & Savour"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
      />
      <h3 className="font-barber text-lg sm:text-xl md:text-2xl">
        SIT BACK & SAVOUR
      </h3>
      <p className="text-sm sm:text-base leading-relaxed max-w-xs">
        When the day arrives, we roll in with flavours and flair. You just enjoy
        and we’ll make sure no plate leaves empty.
      </p>
    </div>
  </div>

  {/* CTA Button */}
  <Link to="/booking">
  <motion.button
    className="mt-10 bg-white text-[#C20000] px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 rounded-full font-barber font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-100"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    PLACE YOUR ORDER
  </motion.button>
  </Link>
</motion.div>






<section className="flex flex-col items-center ">
  <h2 className="text-[#C20000] font-barber tracking-wider text-4xl md:text-6xl 2xl:text-8xl font-bold mb-6 text-center pt-16">
    Tales from the Table!
  </h2>
  <TestimonialCarousel />
</section>








            


<motion.section
        className="w-[95%] md:max-w-[80%] bg-[#C20000] text-white rounded-[3rem] flex flex-col md:flex-row items-stretch justify-between mx-auto overflow-hidden my-16 md:my-16"
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
              BECAUSE GOOD FOOD <br />
              START WITH A HELLO
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
        <div className="w-full md:w-1/3 h-[320px] md:h-[640px] flex justify-center items-center md:items-end mt-4 md:pr-12">
  <img
    src={Call}
    alt="Chef Illustration"
    className="max-w-[75%] md:max-w-full h-auto object-contain"
  />
</div>

      </motion.section>





      <Footer />
    </>
  );
};

export default WeddingEvent;
