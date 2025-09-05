import { useState } from "react";
import "./Comingsoon.css";
import CharacterHead from "../assets/icons/CharacterHead.svg";
import LogoText from '../assets/icons/LogoText.svg';

export default function ComingSoon() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    console.log("Form submitted:", form);
    try {
    const res = await fetch("https://asia-south1-mechatron-lab.cloudfunctions.net/sendSaddaHalwaiQuery", {
    
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.status==200) {
      console.log("Form submitted:");

      // Reset form
      setForm({ name: "", email: "", message: "" });

      // Show success popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      alert("Failed to send. Try again later.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false); // Stop loading
  }

    // Clear the form fields
    setForm({
      name: "",
      email: "",
      message: "",
    });
     setShowPopup(true);
     setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen m-2 pt-5 pb-5 items-center rounded-4xl justify-center bg-red-600 text-white">
      {/* Logo / Title */}
      <img className="w-52"
              src={LogoText} 
              alt="Logo Text"  />
      {/* <h1 className="font-barber text-5xl">SAADA HALWAI</h1> */}
      <br />
      {/* Main Heading */}
      <h2 className="font-barber tracking-wide text-6xl md:text-8xl text-center">
        COOKING UP MAGIC
      </h2>

      {/* Sub Text */}
      <p className="text-center text-sm md:text-base mb-6 px-[28px] md:px-0 mt-4">
        Saada Halwai is almost here to serve you a taste of tradition with a twist.
      </p>

      {/* Scrolling Ribbon */}
<div className="relative w-full my-4 sm:my-12 h-24 sm:h-28 md:h-32">
  {/* Ribbon 1 - Top Left to Bottom Right */}
  <div className="ribbon top -rotate-4 top-2 sm:top-4 md:top-6 absolute inset-x-0 top-[40%] -rotate-6 sm:top-4 md:top-6 bg-white shadow-lg h-10 flex items-center scale-x-[1.014] origin-center">
    <div className="marquee marquee-left">
      <span className="flex items-center">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="font-barber flex items-center text-sm sm:text-base md:text-lg mr-4">
            <img 
              src={CharacterHead} 
              alt="Character Head" 
              className="Character h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mr-2" 
            />
            WE&apos;RE COOKING UP SOMETHING SPECIAL
          </span>
        ))}
      </span>
    </div>
  </div>

  {/* Ribbon 2 - Top Right to Bottom Left */}
  <div className="ribbon bottom rotate-4 top-2 sm:top-4 md:top-6 absolute inset-x-0 top-[60%] rotate-6 sm:top-4 md:top-6 bg-white shadow-md h-10 flex items-center z-5 scale-x-[1.013] origin-center">
    <div className="marquee marquee-right">
      <span className="flex items-center">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="font-barber flex items-center text-sm sm:text-base md:text-lg mr-4">
            <img 
              src={CharacterHead} 
              alt="Character Head" 
              className="Character h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mr-2" 
            />
            WE&apos;RE COOKING UP SOMETHING SPECIAL
          </span>
        ))}
      </span>
    </div>
  </div>
</div>




        <p className="text-center text-sm md:text-base mb-6 px-[28px] md:px-0">
          But why wait? We’re already taking orders. Drop your details below and let’s get the mithai rolling..
        </p>
      {/* Contact Form */}
      <div className=" w-full max-w-3xl">
        {/* <p className="text-center mb-6">
          But why wait? We’re already taking orders. Drop your details below and let’s get the mithai rolling..
        </p> */}

        <form
          onSubmit={handleSubmit}
          className=" p-6 space-y-4 mx-[20px] sm:mx-0"
        >
          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-white flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none text-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Mail"
              value={form.email}
              onChange={handleChange}
              className="bg-white flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none text-gray-900"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter Your Message!"
            value={form.message}
            required
            onChange={handleChange}
            rows="4"
            className="bg-white w-full p-3 rounded-lg border border-gray-300 focus:outline-none text-gray-900"
          ></textarea>

         <button
  type="submit"
  className="items-center font-barber tracking-wider w-full bg-white py-3 rounded-full font-bold text-lg text-red-600 hover:bg-gray-100 transition flex items-center justify-center h-[48px]"
  disabled={loading}
>
  {loading ? (
    <svg
      className="animate-spin h-5 w-5 text-red-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  ) : (
    "LET'S GET COOKING"
  )}
</button>


          {/* <button
            type="submit"
            className="font-barber tracking-wider w-full bg-red-600 text-white py-3 rounded-full font-bold text-lg hover:bg-red-700 transition"
          >
            LET&apos;S GET COOKING
          </button> */}
        </form>
         {/* ✅ Popup */}
      {showPopup && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          Your Message Submitted, Thanks for reaching out! 🎉
        </div>
         )}
      </div>
    </div>
  );
}
