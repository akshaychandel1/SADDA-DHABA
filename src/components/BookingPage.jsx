import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import rolling from "../assets/icons/Rolling.svg";
import Footer from "./Footer";

const BookingPage = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    guests: "",
    location: "",
    dateTime: "",
    notes: "",
  });
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const budgets = ["£1000–£2500", "£2500–£5000", "£5000–£10,000", "£10,000+"];
  const services = [
    "Traditional Indian Curries",
    "Elegant Street Food Live Stations",
    "Signature Biryani Service",
    "Dessert & Mithai Selections",
    "Tandoor Grill Specialities",
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

   if (name === "fullName" || name === "company") {
    // Only alphabets and spaces allowed
    newValue = newValue.replace(/[^A-Za-z\s]/g, "");
    newValue = newValue.slice(0, 35); // max 35 chars
  }

  if (name === "location") {
    // Allow letters, numbers, spaces
    newValue = newValue.replace(/[^A-Za-z0-9\s]/g, "");
    newValue = newValue.slice(0, 35); // max 35 chars
  }

    if (name === "email") {
      newValue = newValue.slice(0, 30).replace(/\s/g, ""); // max 30, no spaces
    }

    if (name === "notes") {
      newValue = newValue.slice(0, 250); // max 80 chars
    }

    if (name === "phone") {
      newValue = newValue.replace(/\D/g, "").slice(0, 10); // digits only, max 10
    }

    if (name === "guests") {
      newValue = newValue.slice(0, 4); // max 4 digits
    }

    setFormValues((prev) => ({ ...prev, [name]: newValue }));
  };

  // Toggle services
  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Validate a single field
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required.";
        else if (!/^[A-Za-z\s]+$/.test(value)) error = "Only alphabets allowed.";
        break;
      case "company":
        if (!value.trim()) error = "Company name is required.";
        else if (!/^[A-Za-z\s]+$/.test(value)) error = "Only alphabets allowed.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email (example@domain.com)";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required.";
        else if (value.length !== 10) error = "Phone number must be 10 digits.";
        break;
      case "guests":
        if (!value) error = "Number of guests is required.";
        else if (value <= 0) error = "Guests must be greater than 0.";
        break;
      case "location":
        if (!value.trim()) error = "Location is required.";
        break;
      case "dateTime":
        if (!value.trim()) error = "Date is required.";
        break;
      case "notes":
        if (value.length > 80) error = "Max 80 characters allowed.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Validate entire form
  const validateForm = () => {
    const fieldNames = [
      "fullName",
      "company",
      "email",
      "phone",
      "guests",
      "location",
      "dateTime",
      "notes",
    ];
    fieldNames.forEach((field) => validateField(field, formValues[field]));

    if (!selectedBudget) setErrors((prev) => ({ ...prev, budget: "Please select a budget." }));
    else setErrors((prev) => ({ ...prev, budget: "" }));

    if (selectedServices.length === 0)
      setErrors((prev) => ({ ...prev, services: "Please select at least one service." }));
    else setErrors((prev) => ({ ...prev, services: "" }));

    const hasErrors = Object.values(errors).some((err) => err) || !selectedBudget || selectedServices.length === 0;
    return !hasErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const formData = {
      name: formValues.fullName,
      company: formValues.company,
      email: formValues.email,
      phone: formValues.phone,
      noOfGuest: formValues.guests,
      location: formValues.location,
      date: formValues.dateTime,
      budget: selectedBudget,
      services: selectedServices.join(", "),
      message: formValues.notes,
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
        setFormValues({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          guests: "",
          location: "",
          dateTime: "",
          notes: "",
        });
        setSelectedBudget("");
        setSelectedServices([]);
        setErrors({});
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
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            EVERY EVENT DESERVES A FEAST
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-red-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
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
              {/* Name + Company */}
              <div className="flex flex-wrap items-center gap-3">
                <span>My name is</span>
                <div className="flex flex-col">
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formValues.fullName}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`border-2 rounded-full px-5 py-2 w-60 focus:outline-none ${
                      errors.fullName ? "border-red-600" : "border-[#C20000]"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-red-600 text-sm mt-1">{errors.fullName}</span>
                  )}
                </div>

                <span>from</span>
                <div className="flex flex-col">
                  <input
                    name="company"
                    type="text"
                    placeholder="Company Name"
                    value={formValues.company}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`border-2 rounded-full px-5 py-2 w-65 focus:outline-none ${
                      errors.company ? "border-red-600" : "border-[#C20000]"
                    }`}
                  />
                  {errors.company && (
                    <span className="text-red-600 text-sm mt-1">{errors.company}</span>
                  )}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="flex flex-wrap items-center gap-3">
                <span>I can be contacted via</span>
                <div className="flex flex-col">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email ID"
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`border-2 rounded-full px-5 py-2 w-60 focus:outline-none ${
                      errors.email ? "border-red-600" : "border-[#C20000]"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm mt-1">{errors.email}</span>
                  )}
                </div>
                <span>and</span>
                <div className="flex flex-col">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone No."
                    value={formValues.phone}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`border-2 rounded-full px-5 py-2 w-50 focus:outline-none ${
                      errors.phone ? "border-red-600" : "border-[#C20000]"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-red-600 text-sm mt-1">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Guests + Location + Date */}
              <div className="flex flex-wrap items-center gap-3">
                <span>I’d love Saada Halwai to dish out flavour for</span>
                <div className="flex flex-col">
                  <input
                    name="guests"
                    type="number"
                    min="1"
                    max="9999"
                    placeholder="Number of Guests"
                    value={formValues.guests}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`border-2 rounded-full px-5 py-2 w-70 text-center focus:outline-none ${
                      errors.guests ? "border-red-600" : "border-[#C20000]"
                    }`}
                  />
                  {errors.guests && (
                    <span className="text-red-600 text-sm mt-1">{errors.guests}</span>
                  )}
                </div>
                <span>guests at</span>
                <div className="flex flex-col">
                  <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    value={formValues.location}
                    onChange={handleChange}
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={`border-2 rounded-full px-5 py-2 w-73 focus:outline-none ${
                      errors.location ? "border-red-600" : "border-[#C20000]"
                    }`}
                  />
                  {errors.location && (
                    <span className="text-red-600 text-sm mt-1">{errors.location}</span>
                  )}
                </div>
                <span>on</span>
                <input
                  name="dateTime"
                  type="datetime-local"
                  value={formValues.dateTime}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  className={`border-2 rounded-full px-5 py-2 w-73 focus:outline-none ${
                    errors.dateTime ? "border-red-600" : "border-[#C20000]"
                  }`}
                />
                {errors.dateTime && (
                  <span className="text-red-600 text-sm mt-1">{errors.dateTime}</span>
                )}
              </div>

              {/* Budget */}
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
                {errors.budget && (
                  <span className="text-red-600 text-sm mt-1">{errors.budget}</span>
                )}
              </div>

              {/* Services */}
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
                {errors.services && (
                  <span className="text-red-600 text-sm mt-1">{errors.services}</span>
                )}
              </div>

              {/* Notes */}
              <textarea
                name="notes"
                placeholder="Extra Masala (tell us more):"
                value={formValues.notes}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                className={`w-full border-2 border-[#C20000] rounded-lg px-5 py-3 h-28 focus:outline-none ${
                  errors.notes ? "border-red-600" : "border-[#C20000]"
                }`}
              ></textarea>

              {/* Submit Button */}
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
