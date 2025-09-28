import React, { useState } from "react";
import { motion } from "framer-motion";
import rolling from "../assets/icons/Rolling.svg";

const BookingPage = () => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

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

  // ✅ Send email with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      guests: e.target.guests.value,
      location: e.target.location.value,
      dateTime: e.target.dateTime.value,
      budget: selectedBudget,
      services: selectedServices.join(", "),
      notes: e.target.notes.value,
    };

    emailjs
      .send(
        "your_service_id", // from EmailJS dashboard
        "your_template_id", // from EmailJS dashboard
        formData,
        "your_user_id" // public key from EmailJS
      )
      .then(
        (result) => {
          alert("Your booking request has been sent!");
        },
        (error) => {
          alert("Oops, something went wrong. Try again later.");
        }
      );
  };

  return (
    <section className="relative">
      {/* Half red (top) and half white (bottom) background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#C20000]" />
        <div className="h-1/2 bg-white" />
      </div>

      <img
        src={rolling}
        alt="rolling"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-7xl z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 py-16">
        {/* Heading */}
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

        {/* Paragraph */}
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

        {/* Form Card */}
        <div className="bg-white border border-[#C20000] rounded-[2rem] shadow-xl p-10 max-w-3xl mx-auto mt-16">
          <form
            className="space-y-6 mx-auto text-base text-black font-medium"
            onSubmit={handleSubmit}
          >
            {/* Row 1 */}
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

            {/* Row 2 */}
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
                className="border-2 border-[#C20000] rounded-full px-5 py-2 w-50 focus:outline-none"
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap items-center gap-3">
              <span>I’d love Saada Halwai to dish out flavour for</span>
              <input
                name="guests"
                type="number"
                placeholder="Number of Guests"
                className="border-2 border-[#C20000] rounded-full px-5 py-2 w-70 focus:outline-none text-center"
              />
              <span>guests</span>
            </div>

            {/* Row 4 */}
            <div className="flex flex-wrap items-center gap-3">
              <span>at</span>
              <input
                name="location"
                type="text"
                placeholder="Location"
                className="border-2 border-[#C20000] rounded-full px-5 py-2 w-73 focus:outline-none"
              />
              <span>on</span>
              <input
                name="dateTime"
                type="text"
                placeholder="Date and Time"
                className="border-2 border-[#C20000] rounded-full px-5 py-2 w-73 focus:outline-none"
              />
            </div>

            {/* Divider */}
            <hr className="border-t-2 border-[#C20000] my-4" />

            {/* Budget */}
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

            {/* Divider */}
            <hr className="border-t-2 border-[#C20000] my-4" />

            {/* Services */}
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

            {/* Extra Notes */}
            <textarea
              name="notes"
              placeholder="Extra Masala (tell us more):"
              className="w-full border-2 border-[#C20000] rounded-lg px-5 py-3 h-28 focus:outline-none"
            ></textarea>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#C20000] text-white font-bold text-lg px-12 py-4 rounded-full hover:bg-red-700 transition"
              >
                LET’S GET COOKING
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
