import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import ComingSoon from "./components/ComingSoon";
import HomePage from "./components/HomePage";
import OurStory from "./components/OurStory";
import WeddingEvent from "./components/WeddingEvent";
import FAQPage from "./components/FAQPage";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import BookingPage from "./components/BookingPage";
import { Menu } from "./components/Menu";
import CorporateEvent from "./components/CorporateEvent";
import GrabAndGo from "./components/GrabAndGo";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    const handleOpenContact = () => setShowContact(true);
    window.addEventListener("openContactPopup", handleOpenContact);
    return () =>
      window.removeEventListener("openContactPopup", handleOpenContact);
  }, []);

  return (
    <>
      <ScrollToTop />

      {/* Navbar with onContactClick prop */}
      <Navbar onContactClick={() => setShowContact(true)} />

      {/* Routes for normal pages */}
      <Routes>
        <Route
          path="/"
          element={<HomePage onContactClick={() => setShowContact(true)} />}
        />
        <Route
          path="/our-story"
          element={<OurStory onContactClick={() => setShowContact(true)} />}
        />
        <Route path="/wedding-event" element={<WeddingEvent />} />
        <Route path="/corporate-event" element={<CorporateEvent />} />
        <Route path="/grab-go" element={<GrabAndGo />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Removed /contact route because popup opens instead */}
      </Routes>

      {/* Contact Form Popup */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </>
  );
}

export default App;
