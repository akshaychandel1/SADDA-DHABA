import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Call from "../assets/icons/Call.png";
import FirstImage from "../assets/icons/FirstImage.png";
import SecondImage from "../assets/icons/SecondImage.png";
import ThirdImage from "../assets/icons/ThirdImage.png";
import FourthImage from "../assets/icons/FourthImage.png";
import FifthImage from "../assets/icons/FifthImage.png";
import Vector1 from "../assets/icons/Vector1.svg";
import Vector2 from "../assets/icons/Vector2.svg";
import Vector3 from "../assets/icons/Vector3.svg";
import Vector4 from "../assets/icons/Vector4.svg";

const OurStory = () => {
  return (
    <>
      <Navbar />

      <div className="w-full text-black overflow-hidden">
        {/* Hero Section */}
        <section className="w-full flex flex-col justify-center bg-[#C20000] text-center py-20 px-6">
          <h1 className="text-white font-barber max-w-4xl text-4xl md:text-8xl tracking-wide mb-6 mx-auto">
            FROM DHABA TO DREAMS
          </h1>
          <p className="text-white max-w-3xl mx-auto text-lg">
            What began by the fires of a small dhaba grew into a legacy of
            flavor. Today, Saada Halwai carries this passion across borders,
            serving tradition with a modern twist.
          </p>
        </section>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-6 items-center h-[728px] max-w-6xl ">
            <img
              src={FirstImage}
              alt="Display of various Indian sweets and chaat dishes"
              className="w-full object-cover object-center rounded-[2rem] mx-auto"
            />
          </div>
        </div>

        <div className="relative w-[1920px] h-[1080px] ">
          {/* Vector 1 */}
          <div className="w-full  flex flex-col justify-center text-center px-6">
            <h2 className=" text-[#C20000] font-barber max-w-4xl text-4xl md:text-8xl tracking-wide mx-auto">
              Born in the Aroma
            </h2>
            <p className="text-[#C20000] max-w-3xl mx-auto text-lg">
              Raised on the sound of sizzling tadkas, not lullabies..
            </p>
          </div>
          <img
            src={Vector1}
            alt="Vector 1"
            className="absolute -top-[20%] left-[10%] w-362 opacity-100"
          />
          <div className="pt-120 flex flex-col justify-center items-center">
            <div className=" items-center h-[780px] max-w-7xl ">
              <img
                src={SecondImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="h-full object-cover object-center mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-15 relative w-[1920px] h-[1080px] ">
        {/* Vector 2 */}
        <div className="w-full  flex flex-col justify-center text-center px-6">
          <h2 className=" text-[#C20000] font-barber max-w-4xl text-4xl md:text-8xl tracking-wide mx-auto">
            Stirred, Not Taught
          </h2>
          <p className="text-[#C20000] max-w-3xl mx-auto text-lg">
            Recipes whispered, not written, learning straight from the ladl..
          </p>
        </div>
        <img
          src={Vector2}
          alt="Vector 2"
          className="absolute -top-[12%] left-[14%] w-362 opacity-100"
        />
        <div className="pt-120 flex flex-col justify-center items-center">
          <div className=" items-center h-[728px] max-w-6xl ">
            <img
              src={ThirdImage}
              alt="Display of various Indian sweets and chaat dishes"
              className="w-full object-cover object-center rounded-[2rem] mx-auto"
            />
          </div>
        </div>
      </div>

       <div className="mt-65 relative w-[1920px] h-[1080px] ">
        {/* Vector 3 */}
        <div className="w-full  flex flex-col justify-center text-center px-6">
          <h2 className=" text-[#C20000] font-barber max-w-5xl text-4xl md:text-8xl tracking-wide mx-auto">
            A Passport of Flavours
          </h2>
          <p className="text-[#C20000] max-w-3xl mx-auto text-lg">
           Packed suitcases, unpacked spices, traditions that crossed oceans
          </p>
        </div>
        <img
          src={Vector3}
          alt="Vector 3"
          className="absolute -top-[8%] left-[8%] w-360 h-[125%] opacity-100"
        />
        <div className="pt-120 flex flex-col justify-center items-center">
          <div className=" items-center h-[728px] max-w-6xl ">
            <img
              src={FourthImage}
              alt="Display of various Indian sweets and chaat dishes"
              className="-mt-40 w-full object-cover object-center rounded-[2rem] mx-auto"
            />
          </div>
        </div>
      </div>


      <div className="mt-35 relative w-[1920px] h-[1080px] ">
        {/* Vector 4 */}
        <div className="w-full  flex flex-col justify-center text-center px-6">
          <h2 className=" text-[#C20000] font-barber max-w-5xl text-4xl md:text-8xl tracking-wide mx-auto">
            From Ladle to Legacy
          </h2>
          <p className="text-[#C20000] max-w-3xl mx-auto text-lg">
           One boy’s kitchen mischief turned into a name on every plate.
          </p>
        </div>
        <img
          src={Vector4}
          alt="Vector 4"
          className="absolute pt-40 -top-[12%] left-[22%] w-352 h-[170%] opacity-100"
        />
        <div className="pt-80 flex flex-col justify-center items-center">
          <div className=" items-center h-[728px] max-w-6xl ">
            <img
              src={FifthImage}
              alt="Display of various Indian sweets and chaat dishes"
              className=" w-full object-cover object-center rounded-[2rem] mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="mt-35 relative w-[1920px] h-[1080px] ">
        {/* Vector 4 */}
        <div className="w-full  flex flex-col justify-center text-center px-6">
          <h2 className=" text-[#C20000] font-barber max-w-5xl text-4xl md:text-8xl tracking-wide mx-auto">
           A Story Still Cooking
          </h2>
          <p className="text-[#C20000] max-w-3xl mx-auto text-lg">
           The saga of Saada Halwai, serving nostalgia, with a side of future
          </p>
        </div>
        
      </div>





























      

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
            className="bg-white absolute md:bottom-12 md:left-22 left-1/2 transform -translate-x-1/2 md:transform-none whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl  text-[#C20000] px-4 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110"
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

export default OurStory;
