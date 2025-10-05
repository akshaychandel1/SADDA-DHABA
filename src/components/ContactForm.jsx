import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import axios from "axios";
import contactus from "../assets/icons/contactus.png";

const ContactForm = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://asia-south1-mechatron-lab.cloudfunctions.net/sendSaddaHalwaiQuery",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        setForm({ name: "", email: "", message: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        alert("Failed to send. Try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/20 p-1">
      <div className="flex flex-col md:flex-row w-full md:w-[70%] lg:w-[85%] max-w-7xl rounded-[2rem] overflow-hidden bg-white shadow-xl relative max-h-screen">
        <div className="flex-1 flex items-center justify-center bg-white p-1 md:p-2 lg:p-5">
          <motion.img
            src={contactus}
            alt="Halwai"
            className="w-full h-1/2 md:h-full object-cover object-top"
            initial={{ y: 100, rotate: -15, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, duration: 1 }}
          />
        </div>

        <div className="flex-1 bg-[#C20000] text-white flex flex-col justify-start px-2 md:px-4 lg:px-12 py-3 md:py-5 lg:py-10 relative rounded-tr-[2rem] rounded-br-[2rem] overflow-y-auto max-h-[95vh]">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-6 lg:right-6"
          >
            <AiFillCloseCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </button>

          <h1 className="text-xl md:text-3xl lg:text-6xl font-barber font-bold mb-2 md:mb-3 lg:mb-4">
            YOUR HALWAI AWAITS
          </h1>
          <p className="text-xs md:text-sm lg:text-base mb-2 md:mb-3 lg:mb-6">
            From chaats that spark conversations to curries that steal the spotlight, we’ve got the recipes to make your event unforgettable. Drop us a message and let’s start cooking up memories.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4 mb-2 md:mb-4 lg:mb-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-2 md:p-2 lg:p-3 rounded-2xl bg-white text-black placeholder-[#C20000] w-full outline-none text-sm md:text-base lg:text-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Mail"
              value={form.email}
              onChange={handleChange}
              className="p-2 md:p-2 lg:p-3 rounded-2xl bg-white text-black placeholder-[#C20000] w-full outline-none text-sm md:text-base lg:text-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Enter Your Message !"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="p-2 md:p-2 lg:p-3 rounded-2xl bg-white text-black placeholder-[#C20000] w-full outline-none text-sm md:text-base lg:text-lg"
              required
            />
            <button
              type="submit"
              className="bg-white text-[#C20000] font-lilita font-bold p-2 md:p-3 lg:p-3 text-sm md:text-base lg:text-2xl rounded-[2rem] hover:bg-gray-200 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-[#C20000]"
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
                "LET’S GET COOKING"
              )}
            </button>
          </form>

          {showPopup && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
              Your Message Submitted, Thanks for reaching out! 🎉
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
