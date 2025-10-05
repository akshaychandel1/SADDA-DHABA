import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Call from "../assets/icons/Call.png"; // same style image as homepage

const TermsAndConditions = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#C20000] text-white text-center py-20 px-6 md:px-12 overflow-hidden">
        <motion.h1
          className="text-4xl md:text-7xl 2xl:text-8xl font-barber tracking-wide mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          TERMS & CONDITIONS
        </motion.h1>
        <motion.p
          className="text-sm md:text-xl text-red-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Last Updated: September 28, 2025
        </motion.p>
      </div>

      {/* Content Section */}
      <section className="bg-white text-[#C20000] py-12 md:py-20 px-6 md:px-20 max-w-6xl mx-auto leading-relaxed">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-base md:text-xl mb-6 text-gray-800">
            Welcome to <span className="font-semibold text-2xl text-[#C20000]">Saada Halwai</span>.
            These Terms and Conditions outline the rules and regulations for using our
            website and services. By engaging with our services or accessing our website,
            you agree to comply with these Terms and Conditions. If you do not agree with
            any part of these terms, you should not use our website or services.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Definitions
          </h2>
          <p className="text-base md:text-xl text-gray-800 mb-4">
            “We,” “Us,” or “Our” refers to Saada Halwai, the catering service provider.  
            “You” or “Your” refers to the client or website user engaging with our services.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Use of Our Website
          </h2>
          <p className="text-base md:text-xl text-gray-800 mb-4">
            By using our website, you agree to conduct yourself in a lawful manner that
            does not restrict or inhibit the enjoyment of others. Misuse of the website,
            including transmitting offensive content or disrupting services, is prohibited.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Service Agreements
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li>A binding contract is formed once a booking has been confirmed and a deposit has been received.</li>
            <li>The contract will outline agreed menus, services, and payment terms.</li>
            <li>Any modifications must be requested in writing and may result in additional costs.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Pricing and Payments
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li>All prices are provided in GBP and may be subject to change without notice.</li>
            <li>A non-refundable deposit is required to secure your booking. Remaining payments must be made according to the terms detailed in your contract.</li>
            <li>Failure to meet payment deadlines may result in cancellation of the booking.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Cancellation Policy
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li>Client-initiated cancellations must be submitted in writing. Deposits are non-refundable, and additional charges may apply depending on the timing of the cancellation.</li>
            <li>If Saada Halwai must cancel due to unforeseen circumstances, we will provide notice and issue a full refund or offer to reschedule the booking.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Menu and Dietary Requirements
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li>We provide a variety of menu options, including vegetarian, vegan, and other dietary preferences.</li>
            <li>While we take appropriate measures, we cannot guarantee our dishes are free from allergens.</li>
            <li>It is the client’s responsibility to notify us of all dietary requirements and allergies at the time of booking.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Liability
          </h2>
          <p className="text-base md:text-xl text-gray-800 mb-4">
            Saada Halwai shall not be liable for any direct, indirect, or consequential
            damages related to the use of our services, including but not limited to
            allergic reactions, illness, or accidents. Our maximum liability is limited
            to the total cost of the services provided.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Intellectual Property
          </h2>
          <p className="text-base md:text-xl text-gray-800 mb-4">
            All website content, including text, images, and branding, is the property of
            Saada Halwai and is protected under intellectual property laws. Reproduction
            or redistribution without prior written consent is prohibited.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Contact Information
          </h2>
          <p className="text-base md:text-xl text-gray-800">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="mt-4 text-base md:text-xl text-gray-800">
            <p>Email: <a href="mailto:info@saadahalwai.com" className="text-[#C20000] underline">info@saadahalwai.com</a></p>
            <p>Phone: +44 (0)20 5555 1234</p>
            <p>Address: Saada Halwai, 21 Chutney Lane, London, UK</p>
          </div>
        </motion.div>
      </section>


      <Footer />
    </>
  );
};

export default TermsAndConditions;
