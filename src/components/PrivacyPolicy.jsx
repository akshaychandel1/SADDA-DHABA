import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Call from "../assets/icons/Call.png"; // same style image as homepage

const PrivacyPolicy = () => {
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
          PRIVACY POLICY
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
            At <span className="font-semibold text-2xl text-[#C20000]">Saada Halwai</span>, 
            we are committed to protecting your privacy and handling your personal data in a secure 
            and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your information. 
            By using our website or services, you consent to the practices described herein.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, event details, and other information submitted through forms or bookings.</li>
            <li><strong>Non-Personal Information:</strong> IP address, browser type, and usage statistics collected via cookies and similar technologies.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li>To process bookings and provide catering services.</li>
            <li>To communicate with clients regarding inquiries, bookings, or updates.</li>
            <li>To send promotional or marketing communication where consent has been provided (with opt-out options available).</li>
            <li>To improve the functionality and user experience of our website.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Information Sharing
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li>We do not sell or trade client data.</li>
            <li>Information may be shared with trusted third-party service providers who assist in delivering our services under strict confidentiality agreements.</li>
            <li>Data may be disclosed if required by law or regulatory authorities.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Cookies
          </h2>
          <p className="text-base md:text-xl text-gray-800 mb-4">
            Our website uses cookies to enhance the user experience and gather website usage data. 
            Cookies can be disabled in your browser settings, though certain features of the website may not function optimally.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Data Security
          </h2>
          <p className="text-base md:text-xl text-gray-800 mb-4">
            We implement appropriate technical and organizational measures to safeguard personal data. 
            However, due to the nature of the internet, absolute security cannot be guaranteed.
          </p>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Your Rights
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-800 space-y-2">
            <li>You have the right to access, update, or request deletion of your personal data.</li>
            <li>You may withdraw consent to receive marketing communications at any time.</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-barber mt-10 mb-4">
            Contact Information
          </h2>
          <p className="text-base md:text-xl text-gray-800">
            For questions regarding this Privacy Policy, please contact us:
          </p>
          <div className="mt-4 text-base md:text-xl text-gray-800">
            <p>Email: <a href="mailto:privacy@saadahalwai.com" className="text-[#C20000] underline">privacy@saadahalwai.com</a></p>
            <p>Phone: +44 (0)20 5555 1234</p>
            <p>Address: Saada Halwai, 21 Chutney Lane, London, UK</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
