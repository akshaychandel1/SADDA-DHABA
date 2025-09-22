import React from "react";
import Navbar from "./Navbar";
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

const OurStory = () => {
  return (
    <>
      <Navbar />

      <div className="w-full text-black overflow-hidden">
        {/* Hero Section */}
        <section className="w-full flex flex-col justify-center bg-[#C20000] text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
          <h1 className="text-white font-barber max-w-5xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-8xl 3xl:text-9xl tracking-wide mb-6 mx-auto">
            FROM DHABA TO DREAMS
          </h1>
          <p className="text-white max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
            What began by the fires of a small dhaba grew into a legacy of
            flavor. Today, Saada Halwai carries this passion across borders,
            serving tradition with a modern twist.
          </p>
        </section>

        {/* First Image */}
        <div className="flex flex-col justify-center items-center">
          <div className="mt-6 w-full max-w-6xl h-auto px-4">
            <img
              src={FirstImage}
              alt="Display of various Indian sweets and chaat dishes"
              className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
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
            <div className="items-center w-full max-w-7xl h-auto">
              <img
                src={SecondImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
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
            <div className="items-center w-full max-w-6xl h-auto">
              <img
                src={ThirdImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
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
            <div className="items-center w-full max-w-6xl h-auto">
              <img
                src={FourthImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="-mt-10 sm:-mt-20 md:-mt-28 lg:-mt-32 2xl:-mt-40 w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="-mt-30 sm:mt-20 md:mt-28 lg:-mt-0 2xl:mt-35 relative w-full max-w-[1920px] mx-auto min-h-[500px] sm:min-h-[600px] md:min-h-[720px] lg:min-h-[900px] 2xl:h-[1080px] px-4">
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
            <div className="items-center w-full max-w-6xl h-auto">
              <img
                src={FifthImage}
                alt="Display of various Indian sweets and chaat dishes"
                className="w-full h-auto object-cover object-center rounded-xl sm:rounded-2xl lg:rounded-[2rem] mx-auto"
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
<div className="mt-140"></div>


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
                className="absolute md:bottom-12 md:left-22 left-1/2 transform -translate-x-1/2 md:transform-none whitespace-nowrap font-barber text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl bg-white text-[#C20000] px-4 sm:px-6 md:px-10 pt-2 sm:pt-3 md:pt-4 pb-1 sm:pb-2 md:pb-3 rounded-2xl shadow-xl leading-[1.2] transition-transform duration-300 ease-in-out transform hover:scale-110"
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
       </div>

      <Footer />
    </>
  );
};

export default OurStory;
