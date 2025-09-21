import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Vector1 from '../assets/icons/Vector1.svg'
import Vector2 from '../assets/icons/Vector2.svg'
import Vector3 from '../assets/icons/Vector3.svg'
import Vector4 from '../assets/icons/Vector4.svg'

const OurStory = () => {
  return (
      <>
      <Navbar />

       <div className="w-full bg-white text-black overflow-hidden">
  {/* Hero Section */}
  <section className="w-full flex flex-col justify-center bg-[#C20000] text-center py-20 px-6">
    <h1 className="text-white font-barber max-w-4xl text-4xl md:text-8xl tracking-wide mb-6 mx-auto">
      FROM DHABA TO DREAMS
    </h1>
    <p className="text-white max-w-3xl mx-auto text-lg">
      What began by the fires of a small dhaba grew into a legacy of flavor.
      Today, Saada Halwai carries this passion across borders, serving
      tradition with a modern twist.
    </p>
  </section>

        <div className="relative w-full flex justify-center items-center">
      <svg
        viewBox="0 0 200 800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[200px] h-[800px]"
      >
        {/* Vector Path 1 */}
        <path
          id="Vector"
          d="M 80 40 C 20 120 120 160 60 240"
          fill="transparent"
          stroke="#f4c2c2"
          strokeWidth="1"
        />
        <text fill="#c00" fontSize="14" fontWeight="bold">
          <textPath href="#Vector" startOffset="50%" textAnchor="middle">
            
          </textPath>
        </text>

        {/* Vector Path 2 */}
        <path
          id="Vector1"
          d={Vector2}
          fill="transparent"
          stroke="#f4c2c2"
          strokeWidth="1"
        />
        <text fill="#c00" fontSize="14" fontWeight="bold">
          <textPath href="#Vector1" startOffset="50%" textAnchor="middle">
            STIRRED, NOT TAUGHT
          </textPath>
        </text>

        {/* Vector Path 3 */}
        <path
          id="Vector2"
          d={Vector3}
          fill="transparent"
          stroke="#f4c2c2"
          strokeWidth="1"
        />
        <text fill="#c00" fontSize="14" fontWeight="bold">
          <textPath href="#Vector2" startOffset="50%" textAnchor="middle">
            FROM LADLE TO LEGACY
          </textPath>
        </text>

        {/* Vector Path 4 */}
        <path
          id="Vector3"
          d={Vector4}
          fill="transparent"
          stroke="#f4c2c2"
          strokeWidth="1"
        />
        <text fill="#c00" fontSize="14" fontWeight="bold">
          <textPath href="#Vector3" startOffset="50%" textAnchor="middle">
            A STORY STILL COOKING
          </textPath>
        </text>
      </svg>
    </div>

</div>


       <Footer />
      </>
  )
}

export default OurStory;