import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
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
import FirstIllu from "../assets/icons/FirstIllustration.png";
import SecIllu from "../assets/icons/SecondIlustration.png";
import ThirdIllu from "../assets/icons/ThirdIllu.png";
import FourthIllu from "../assets/icons/FourthIllu.png";
import FifthIllu from "../assets/icons/FifthIllu.png";

const OurStory = ({ onContactClick }) => {
  return (
    <>
      <div className="w-full text-black overflow-hidden">
        {/* Hero Section */}
        <section className="w-full flex flex-col justify-center bg-[#C20000] text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
          <h1 className="text-white font-barber max-w-5xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-8xl 3xl:text-9xl tracking-wide mb-6 mx-auto">
            FROM DHABA TO DREAMS
          </h1>
          <p className="text-base md:text-lg text-red-100 ">
            What began by the fires of a small dhaba grew into a legacy of
            flavor. Today, Saada Halwai carries this passion across borders,
            serving tradition with a modern twist.
          </p>
        </section>

        {/* First Image */}
        <div className="flex flex-col justify-center items-center">
          <div className="relative mt-6 w-full max-w-6xl h-auto px-4">
            {/* Base Image */}
            <motion.img
              src={FirstImage}
              alt="Display of various Indian sweets and chaat dishes"
              className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
              initial={{ opacity: 0, x: -200 }} // start off to the left and invisible
              whileInView={{ opacity: 1, x: 0 }} // animate when in viewport
              viewport={{ once: true, amount: 0.3 }} // only animate once when 30% visible
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Overlay Mascot */}
            <motion.img
              src={FirstIllu}
              alt="Mascot Illustration"
              className="absolute right-20 sm:right-10 md:right-20 lg:right-32 bottom-4 sm:bottom-10 lg:bottom-14 w-20 sm:w-28 md:w-36 lg:w-56 h-auto object-contain z-10"
              animate={{ y: [0, -20, 0] }} // 👈 float up & down
              transition={{
                duration: 2, // one full cycle (up + down)
                repeat: Infinity, // loops forever
                ease: "easeInOut", // smooth motion
              }}
            />
          </div>
        </div>

        {/* Section 1 */}
        <div className="relative w-full max-w-[1920px] mx-auto min-h-[500px] sm:min-h-[600px] md:min-h-[720px] lg:min-h-[900px] 2xl:h-[1080px] px-4">
          <div className="w-full flex flex-col justify-center text-center px-2 sm:px-6">
            <h2 className="text-[#C20000] font-barber max-w-4xl text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl tracking-wide mx-auto">
              Born in the Aroma
            </h2>
            <p className="text-[#C20000] max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
              Raised on the sound of sizzling tadkas, not lullabies..
            </p>
          </div>

          <img
            src={Vector1}
            alt="Vector 1"
            className="
              absolute opacity-100
              -top-[12%] sm:-top-[22%] md:-top-[20%] lg:-top-[22%] 2xl:-top-[30%] 3xl:-top-[22%]
              left-[0%] sm:left-[0%] md:left-[3%] lg:left-[0%] 2xl:left-[11%] 3xl:left-[12%]
              w-116 sm:w-160 md:w-190 lg:w-298 2xl:w-350 3xl:w-[880px]
            "
          />
          <div className="pt-12 sm:pt-20 md:pt-28 lg:pt-32 2xl:pt-40 flex flex-col justify-center items-center">
            <div className="relative items-center w-full max-w-7xl h-auto">
              {/* Base Image */}
              <motion.img
                src={SecondImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
                initial={{ opacity: 1, x: 200 }} // start off to the right
                whileInView={{ opacity: 1, x: 0 }} // animate when in viewport
                viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Floating Mascot */}
              <motion.img
                src={SecIllu}
                alt="Mascot Illustration"
                className="absolute left-10 sm:left-8 md:left-20 lg:left-26 bottom-4 sm:bottom-10 lg:bottom-14 
               w-28 sm:w-32 md:w-36 lg:w-96 h-auto object-contain z-10"
                animate={{ y: [0, -20, 0] }} // 👈 float up & down
                transition={{
                  duration: 2, // one full cycle (up + down)
                  repeat: Infinity, // loops forever
                  ease: "easeInOut", // smooth motion
                }}
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="-mt-40 sm:mt-16 md:mt-8 lg:mt-0 2xl:mt-15 relative w-full max-w-[1920px] mx-auto min-h-[500px] sm:min-h-[600px] md:min-h-[720px] lg:min-h-[900px] 2xl:h-[1080px] px-4">
          <div className="w-full flex flex-col justify-center text-center px-2 sm:px-6">
            <h2 className="text-[#C20000] font-barber max-w-4xl text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl tracking-wide mx-auto">
              Stirred, Not Taught
            </h2>
            <p className="text-[#C20000] max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
              Recipes whispered, not written, learning straight from the ladl..
            </p>
          </div>
          <img
            src={Vector2}
            alt="Vector 2"
            className="
              absolute opacity-100
              -top-[7%] sm:-top-[22%] md:-top-[8%] lg:-top-[10%] xl:-top-[10%] 2xl:-top-[10%] 3xl:-top-[22%]
              left-[0%] sm:left-[0%] md:left-[6%] lg:left-[4%] xl:left-[8%] 2xl:left-[15%] 3xl:left-[12%]
              w-120 sm:w-160 md:w-190 lg:w-248 xl:w-280 2xl:w-360 3xl:w-[880px]
            "
          />
          <div className="pt-24 sm:pt-20 md:pt-50 lg:pt-62 xl:pt-82 2xl:pt-102 flex flex-col justify-center items-center">
            <div className="relative items-center w-full max-w-6xl h-auto">
              <motion.img
                src={ThirdImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
                initial={{ opacity: 0, x: -200 }} // start off to the left
                whileInView={{ opacity: 1, x: 0 }} // animate when in viewport
                viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.img
                src={ThirdIllu}
                alt="Mascot Illustration"
                className="absolute right-7 sm:right-10 md:right-20 lg:right-18 bottom-4 sm:bottom-10 lg:bottom-14 w-20 sm:w-28 md:w-36 lg:w-60 2xl:w-76 h-auto object-contain z-10"
                animate={{ y: [0, -20, 0] }} // 👈 float up & down
                transition={{
                  duration: 2, // one full cycle (up + down)
                  repeat: Infinity, // loops forever
                  ease: "easeInOut", // smooth motion
                }}
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="-mt-25 sm:mt-16 md:mt-8 lg:mt-0 2xl:mt-40 relative w-full max-w-[1920px] mx-auto min-h-[500px] sm:min-h-[600px] md:min-h-[720px] lg:min-h-[900px] 2xl:h-[1080px] px-4">
          <div className="w-full flex flex-col justify-center text-center px-2 sm:px-6">
            <h2 className="text-[#C20000] font-barber max-w-5xl text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl tracking-wide mx-auto">
              A Passport of Flavours
            </h2>
            <p className="text-[#C20000] max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
              Packed suitcases, unpacked spices, traditions that crossed oceans
            </p>
          </div>
          <img
            src={Vector3}
            alt="Vector 3"
            className="
              absolute opacity-100
              -top-[0%] sm:-top-[22%] md:-top-[8%] lg:-top-[10%] xl:-top-[10%] 2xl:-top-[10%] 3xl:-top-[22%]
              left-[0%] sm:left-[0%] md:left-[6%] lg:left-[0%] xl:left-[8%] 2xl:left-[15%] 3xl:left-[12%]
              w-102 sm:w-160 md:w-190 lg:w-240 xl:w-280 2xl:w-380 3xl:w-[880px]
            "
          />
          <div className="pt-22 sm:pt-20 md:pt-28 lg:pt-46 2xl:pt-112 flex flex-col justify-center items-center">
            <div className="relative items-center w-full max-w-6xl h-auto">
              <motion.img
                src={FourthImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="-mt-10 sm:-mt-20 md:-mt-13 lg:-mt-32 2xl:-mt-40 w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
                initial={{ opacity: 0, x: 200 }} // start off to the right
                whileInView={{ opacity: 1, x: 0 }} // animate when in viewport
                viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.img
                src={FourthIllu}
                alt="Mascot Illustration"
                className="absolute right-1 sm:right-10 md:right-3 lg:right-16 2xl:right-1 -bottom-1 sm:bottom-10 md:-bottom-4 lg:-bottom-3 w-100 sm:w-28 md:w-180 lg:w-260 2xl:w-286 h-auto object-contain z-10"
                animate={{ y: [0, -10, 0] }} // 👈 float up & down
                transition={{
                  duration: 1.5, // one full cycle (up + down)
                  repeat: Infinity, // loops forever
                  ease: "easeInOut", // smooth motion
                }}
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="-mt-30 sm:-mt-20 md:-mt-2 lg:-mt-0 2xl:mt-35 relative w-full max-w-[1920px] mx-auto min-h-[500px] sm:min-h-[600px] md:min-h-[720px] lg:min-h-[900px] 2xl:h-[1080px] px-4">
          <div className="w-full flex flex-col justify-center text-center px-2 sm:px-6">
            <h2 className="text-[#C20000] font-barber max-w-5xl text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl tracking-wide mx-auto">
              From Ladle to Legacy
            </h2>
            <p className="text-[#C20000] max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
              One boy’s kitchen mischief turned into a name on every plate.
            </p>
          </div>
          <img
            src={Vector4}
            alt="Vector 4"
            className="
              absolute opacity-100
              top-[10%] sm:-top-[22%] md:-top-[8%] lg:top-[10%] xl:top-[0%] 2xl:top-[10%] 3xl:-top-[22%]
              left-[16%] sm:left-[0%] md:left-[6%] lg:left-[20%] xl:left-[18%] 2xl:left-[30%] 3xl:left-[12%]
              w-88 sm:w-160 md:w-190 lg:w-100 xl:w-260 2xl:w-280 3xl:w-[880px]
              h-[90%] sm:h-[140%] md:h-[150%] 2xl:h-[125%]
            "
          />
          <div className="pt-10 sm:pt-36 md:pt-52 lg:pt-32 2xl:pt-30 flex flex-col justify-center items-center">
            <div className="relative items-center w-full max-w-6xl h-auto">
              <motion.img
                src={FifthImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
                initial={{ opacity: 0, x: -200 }} // start off to the left
                whileInView={{ opacity: 1, x: 0 }} // animate when in viewport
                viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.img
                src={FifthIllu}
                alt="Mascot Illustration"
                className="absolute left-1/2 bottom-4 sm:bottom-10 lg:bottom-14 
             -translate-x-1/2 w-30 sm:w-38 md:w-48 lg:w-72 2xl:w-76 
             h-auto object-contain z-10"
                animate={{ y: [0, -10, 0] }} // 👈 float up & down
                transition={{
                  duration: 2, // total up-down cycle
                  repeat: Infinity, // infinite loop
                  ease: "easeInOut", // smooth easing
                }}
              />
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="-mt-35 sm:mt-20 md:mt-28 lg:mt-15 2xl:mt-0 relative w-full max-w-[1920px] mx-auto px-4">
          <div className="w-full flex flex-col justify-center text-center px-2 sm:px-6">
            <h2 className="text-[#C20000] font-barber max-w-5xl text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl tracking-wide mx-auto">
              A Story Still Cooking
            </h2>
            <p className="text-[#C20000] max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
              The saga of Saada Halwai, serving nostalgia, with a side of future
            </p>
          </div>
        </div>
        <div className="mt-25 lg:mt-80"></div>

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
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
              className="absolute md:bottom-12 md:left-22 left-1/2 transform -translate-x-1/2 md:transform-none whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl bg-white text-[#C20000] px-6 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110"
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
      </div>

      <Footer />
    </>
  );
};

export default OurStory;
