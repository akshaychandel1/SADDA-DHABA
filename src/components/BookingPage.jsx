import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import rolling from "../assets/icons/Rolling.svg";
import Footer from "./Footer";

const BookingPage = () => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const budgets = ["£1000–£2500", "£2500–£5000", "£5000–£10,000", "£10,000+"];
  const services = [
    "Traditional Indian Curries",
    "Elegant Street Food Live Stations",
    "Signature Biryani Service",
    "Dessert & Mithai Selections",
    "Tandoor Grill Specialities",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const validateForm = (form) => {
    const errors = [];

    if (!form.fullName.value.trim()) errors.push("Full name is required.");
    if (!form.email.value.trim()) errors.push("Email is required.");
    else if (!/\S+@\S+\.\S+/.test(form.email.value))
      errors.push("Please enter a valid email.");

    if (!form.phone.value.trim())
      errors.push("Phone number is required.");
    else if (!/^[0-9+\s()-]{7,15}$/.test(form.phone.value))
      errors.push("Please enter a valid phone number.");

    if (!form.guests.value.trim() || form.guests.value <= 0)
      errors.push("Please enter the number of guests.");

    if (!form.location.value.trim()) errors.push("Location is required.");
    if (!form.dateTime.value.trim()) errors.push("Date is required.");
    if (!selectedBudget) errors.push("Please select a budget.");
    if (selectedServices.length === 0)
      errors.push("Please select at least one service.");

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(e.target)) return;

    setLoading(true);

    const formData = {
      name: e.target.fullName.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      noOfGuest: e.target.guests.value,
      location: e.target.location.value,
      date: e.target.dateTime.value,
      budget: selectedBudget,
      services: selectedServices.join(", "),
      message: e.target.notes.value,
    };

    try {
      const res = await axios.post(
        "https://asia-south1-mechatron-lab.cloudfunctions.net/sendSaddaHalwaiBooking",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        e.target.reset();
        setSelectedBudget("");
        setSelectedServices([]);
      } else {
        alert("Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <div className="h-1/2 bg-[#C20000]" />
          <div className="h-1/2 bg-white" />
        </div>

        <img
          src={rolling}
          alt="rolling"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-8xl z-0"
        />

        <div className="relative z-10 container mx-auto text-center px-4 py-16">
          <motion.h1
            className="text-5xl font-barber md:text-8xl tracking-wide mb-5 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            EVERY EVENT DESERVES A FEAST
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-red-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            Provide your event details, and we’ll design a bespoke catering
            experience, tailoring tradition <br />
            and innovation to make your occasion truly memorable.
          </motion.p>

          <div className="bg-white border-3 border-[#C20000] rounded-[2rem] shadow-xl p-10 max-w-3xl mx-auto mt-16 relative">
            <form
              className="space-y-6 mx-auto text-base text-black font-medium"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span>My name is</span>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="border-2 border-[#C20000] rounded-full px-5 py-2 w-60 focus:outline-none"
                />
                <span>from</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="border-2 border-[#C20000] rounded-full px-5 py-2 w-65 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span>I can be contacted via</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email ID"
                  required
                  className="border-2 border-[#C20000] rounded-full px-5 py-2 w-60 focus:outline-none"
                />
                <span>and</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone No."
                  required
                  className="border-2 border-[#C20000] rounded-full px-5 py-2 w-50 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span>I’d love Saada Halwai to dish out flavour for</span>
                <input
                  name="guests"
                  type="number"
                  min="1"
                  max="1500"
                  required
                  placeholder="Number of Guests"
                 className="border-2 border-[#C20000] rounded-full px-5 py-2 w-70 focus:outline-none text-center"
  onInput={(e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4); // trim to 4 digits
    }
  }}/>
                <span>guests</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span>at</span>
                <input
                  name="location"
                  type="text"
                  placeholder="Location"
                  required
                  className="border-2 border-[#C20000] rounded-full px-5 py-2 w-73 focus:outline-none"
                />
                <span>on</span>
                {/* ✅ Replaced text input with date picker */}
                <input
                  name="dateTime"
                  type="datetime-local"
                  required
                  className="border-2 border-[#C20000] rounded-full px-5 py-2 w-73 focus:outline-none"
                />
              </div>

              <hr className="border-t-2 border-[#C20000] my-4" />

              <div className="text-center">
                <p className="mb-3">The estimated budget for our event is:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {budgets.map((budget, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-6 py-2 rounded-full border-2 border-[#C20000] transition ${
                        selectedBudget === budget
                          ? "bg-[#C20000] text-white"
                          : "text-black"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-t-2 border-[#C20000] my-4" />

              <div className="text-center">
                <p className="mb-3">Our preferred service options include:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {services.map((service, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-6 py-2 rounded-full border-2 border-[#C20000] transition ${
                        selectedServices.includes(service)
                          ? "bg-[#C20000] text-white"
                          : "text-black"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                name="notes"
                placeholder="Extra Masala (tell us more):"
                className="w-full border-2 border-[#C20000] rounded-lg px-5 py-3 h-28 focus:outline-none"
              ></textarea>

              <div className="text-center relative">
                <button
                  type="submit"
                  className="bg-[#C20000] text-white font-bold text-lg px-12 py-4 rounded-full hover:bg-red-700 transition"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "LET’S GET COOKING"}
                </button>

                {showPopup && (
                  <div className="absolute top-0 right-0 mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
                    Booking request submitted! 🎉
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookingPage;
